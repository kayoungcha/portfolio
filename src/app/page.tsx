'use client';
import { useThemeStore } from '@/store/useThemeStore';

// 컴포넌트
import HeroSection from './component/sections/HeroSection';
import Works from './component/sections/Works';
import Skills from './component/sections/Skills';
import { useEffect } from 'react';
import { useWindowWidthStore } from '@/store/useWindowWidthStore';

export default function Home() {
  const theme = useThemeStore((state) => state.theme);
  const setWidth = useWindowWidthStore((state) => state.setWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="pt-[7.6rem] overflow-x-hidden">
      <HeroSection></HeroSection>
      <Works></Works>
      <Skills></Skills>
    </main>
  );
}
