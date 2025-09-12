'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';

export default function Header() {
  const navMenu = [
    { title: '소개', id: 'heroSection' },
    { title: '작업물', id: 'worksSection' },
    { title: '기술', id: 'skillsSection' },
    { title: '연락처', id: 'contactSection' },
  ];
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [show, setShow] = useState<boolean>(false); //처음 들어왔을때
  const [hidden, setHidden] = useState<boolean>(false); // 헤더 숨김 여부
  const [lastScrollY, setLastScrollY] = useState<number>(0); // 마지막 스크롤 위치
  const isNavigating = useRef<boolean>(false);
  const activeSection = useActiveSectionStore((state) => state.activeSection);

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as 'light' | 'dark') || null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, [setTheme]);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    function update() {
      const currentScrollY = window.scrollY;

      // 내비게이션 중이면 스킵
      if (isNavigating.current) {
        ticking = false;
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 54) {
        // 스크롤 내릴 때 (54 이상 내려간 경우만 헤더 숨김)
        setHidden(true);
      } else {
        // 스크롤 올리거나 멈췄을 때 → 헤더 보임
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // 네비게이션 클릭시 header 이벤트 막기
  function handleNavClick() {
    isNavigating.current = true;
    setHidden(false); // 무조건 보이게
    setTimeout(() => {
      isNavigating.current = false;
    }, 1500); // 스크롤 애니메이션 끝날 시간만큼
  }

  return (
    <header
      className={`sticky top-0 right-[0] flex justify-end z-100 mr-[-45px],
        will-change-transform ${
          !show
            ? 'opacity-0 translate-x-[80px]'
            : 'opacity-100 translate-0 duration-800 delay-600'
        } ${
          hidden
            ? '-translate-y-[60px] duration-300 delay-0'
            : 'translate-y-0 duration-300 delay-0'
        } transition-all `}
    >
      <nav
        className="bg-header-txt border-background shadow-header w-auto
          rounded-b-[16px] border-1 backdrop-blur-xs relative z-10 border-t-0"
      >
        {/* 메인 네비 */}
        <ul className="flex w-auto gap-[5.2rem] px-[4rem] py-[1.2rem]">
          {navMenu.map((menu, index) => {
            return (
              <li key={menu.title + index}>
                <Link
                  href={`#${menu.id}`}
                  className={`text-background hover:text-header-txt-point
                  text-[2rem] font-normal transition-all duration-300
                  ease-in-out hover:font-bold
                  ${activeSection === menu.id ? 'text-header-txt-point font-bold' : ''}`}
                  onClick={handleNavClick}
                >
                  {menu.title}
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
