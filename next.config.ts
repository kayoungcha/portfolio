import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // TurboPack 설정
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
                ],
              },
              svgProps: { fill: 'currentColor', stroke: 'currentColor' },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  // 웹팩
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rule: { test: { test: (arg0: string) => any } }) =>
        rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
