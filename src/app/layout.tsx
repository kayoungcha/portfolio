import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/app/component/sections/Header';
import Footer from '@/app/component/sections/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
const spoqa = localFont({
  src: [
    {
      path: './fonts/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    { path: './fonts/SpoqaHanSansNeo-Medium.woff2', weight: '500' },
    {
      path: './fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '차가영 포트폴리오',
  description: '프론트엔드 개발자 차가영 포트폴리오',
  openGraph: {
    title: '차가영 포트폴리오',
    description: '안녕하세요. 프론트엔드 개발자 차가영입니다.',
    url: 'https://chaky-portfolio.vercel.app/',
    siteName: '차가영 포트폴리오',
    images: [
      {
        url: '/assets/img_my_og.png', // 👈 절대 경로
        width: 1024,
        height: 1024,
        alt: '차가영 포트폴리오 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={spoqa.className}>
      <body className={'antialiased min-w-[320px]'}>
        <div
          className="wrap m-auto w-full max-w-[1200px] px-[20px] md:px-[40px]
            lg:px-[80px]"
        >
          <Header />
          {children}
          <div id="modalRoot" />
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
