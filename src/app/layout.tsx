import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

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
  description: '안녕하세요. 프론트엔드 개발자 차가영 포트폴리오입니다.',
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
      <body className={'antialiased'}>
        <div
          className="wrap m-auto w-full max-w-[1200px] md:px-[80px] px-[40px]"
        >
          <Header></Header>
          {children}
          <div id="modal-root" />
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
