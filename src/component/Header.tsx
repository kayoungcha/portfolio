'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export default function Header() {
  const navMenu = ['소개', '작업물', '기술', '연락처'];
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as 'light' | 'dark') || null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, [setTheme]);

  return (
    <header
      className="sticky top-[-1px] right-[0] flex justify-end z-100 mr-[-45px]"
    >
      <nav
        className="bg-header-txt border-background shadow-header w-auto
          rounded-b-[16px] border-1 backdrop-blur-xs relative z-10 border-t-0"
      >
        {/* 메인 네비 */}
        <ul className="flex w-auto gap-[5.2rem] px-[4rem] py-[1.2rem]">
          {navMenu.map((menu, index) => {
            return (
              <li key={menu + index}>
                <Link
                  href="/"
                  className="text-background hover:text-header-txt-point
                    text-[2rem] font-normal transition-all duration-300
                    ease-in-out hover:font-bold"
                >
                  {menu}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 다크/라이트 모드 버튼 */}
      <div
        className={`relative top-[-6px] flex w-auto items-center justify-center
          ${theme === 'dark' && 'pr-[0.6rem] '}`}
      >
        <span
          className="bg-header-txt relative z-1 flex h-[1.4rem] w-[3.4rem]
            content-center justify-center"
        ></span>
        <button
          onClick={() => toggleTheme()}
          className={`relative z-10 scale-[0.8] cursor-pointer text-[36px]
            opacity-90 transition-all duration-300 ease-in-out hover:scale-[1]
            hover:opacity-100 ${
              theme === 'dark' ? 'ml-[-3.6rem] rotate-[-20deg]' : 'ml-[-3rem]'
            }`}
          title={theme === 'dark' ? '라이트 모드 전환' : '다크모드 전환'}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
