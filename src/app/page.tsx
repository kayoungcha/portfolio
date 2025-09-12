'use client';
import { useThemeStore } from '@/store/useThemeStore';

// 컴포넌트
import HeroSection from './HeroSection';
import Works from './Works';
import Skills from './Skills';

export default function Home() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <main className="pt-[7.6rem]">
      <HeroSection></HeroSection>
      <Works></Works>
      <Skills></Skills>
    </main>
  );
}
