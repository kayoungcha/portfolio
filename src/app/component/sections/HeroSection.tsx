'use client';

import React, { useEffect, useRef, useState } from 'react';
import { heroIcons } from '@/mockData/allData';
import FillButton from '@/app/component/ui/FillButton';
import OutLineButton from '@/app/component/ui/OutLineButton';
import MainIconChip from '@/app/component/ui/MainIconChip';
// 이미지
import IconOpen from '../../../../public/assets/icon_open.svg';
import IconDownArrow from '../../../../public/assets/icon-down-arrow.svg';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';
import { useWindowWidthStore } from '@/store/useWindowWidthStore';
import { useThemeStore } from '@/store/useThemeStore';

export default function HeroSection() {
  const theme = useThemeStore((state) => state.theme);
  const [show, setShow] = useState<boolean>(false);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const width = useWindowWidthStore((state) => state.width);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );
  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('heroSection');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [setActiveSection]);

  const icons = heroIcons.map((icon) => {
    const positionX =
      width <= 1024 && width >= 768
        ? icon.position.x < 0
          ? icon.position.x + 80
          : icon.position.x - 80
        : width < 768 && width >= 640
          ? icon.position.x < 0
            ? icon.position.x + 120
            : icon.position.x - 120
          : width < 640
            ? icon.position.x < 0
              ? icon.position.x * 0
              : icon.position.x * 0
            : icon.position.x;

    const positionY =
      width < 768 && width >= 640
        ? icon.position.y < 0
          ? icon.position.y - 150
          : icon.position.y - 50
        : width < 640
          ? icon.position.y < 0
            ? icon.position.y * 0
            : icon.position.y * 0
          : icon.position.y;

    return { ...icon, position: { x: positionX, y: positionY } };
  });

  const viewWorks = () => {
    const section = document.getElementById('worksSection');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroSectionRef}
      id="heroSection"
      className="relative w-full h-auto"
    >
      <div
        className="main_background absolute top-[190px] left-[10px] sm:top-0
          sm:left-0 w-full h-full z-0 flex align-center justify-center
          gap-x-[8px]"
      >
        {icons.map((icon, index) => {
          return (
            <MainIconChip
              key={icon.name}
              iconSrc={theme !== 'dark' ? icon.img : icon.darkImg}
              alt={`${icon.name} icon`}
              position={icon.position}
              size={icon.size}
              moreStyles={{
                ['--tx' as any]: `calc(-50% - ${icon.position.x}px)`,
                ['--ty' as any]: `calc(-50% - ${icon.position.y}px)`,
                animation: `mainChip_ani ${(index + 1) * 0.3}s 1s cubic-bezier(0.34,1.56,0.64,1) forwards `,
              }}
            ></MainIconChip>
          );
        })}
      </div>
      <div className="main relative z-10">
        <h1
          className={`text-txt-secondary m-auto mb-[100px] sm:mb-[32px]
            text-center text-[3.2rem] sm:text-[4.8rem] md:text-[5.2rem]
            lg:text-[5.8rem]
            ${show ? 'translate-y-[0] opacity-100' : 'translate-y-[40px] opacity-0'}
            transition-all duration-400 ease-linear `}
        >
          안녕하세요.
          <span className="text-primary block font-medium">
            프론트엔드 개발자
          </span>
          <span className="font-bold">차가영</span> 입니다.
        </h1>
        <p
          className={`text-txt-tertiary mb-[32px] md:mb-[64px] text-center
            text-[1.4rem] sm:text-[1.6rem] lg:text-[2rem]
            ${show ? 'translate-y-[0] opacity-100' : 'translate-y-[40px] opacity-0'}
            transition-all duration-400 ease-linear delay-400`}
        >
          모바일 앱부터 웹까지, 다양한 프로젝트로 빠르게 배우고 적응해왔습니다.
          <br />
          새로운 여정을 함께할 곳을 찾고 있습니다.
        </p>
        <div
          className={`ani_wrap w-fit m-auto
            ${show ? 'translate-y-[0] opacity-100' : 'translate-y-[40px] opacity-0'}
            transition-all duration-400 ease-linear delay-600`}
        >
          <FillButton
            text={'이력서 보러가기'}
            className={'m-auto mb-[40px] md:mb-[100px]'}
            icon={
              <IconOpen
                aria-label="새창 열기 아이콘"
                width={
                  width < 1024 && width >= 640 ? 22 : width < 640 ? 18 : 26
                }
                height={
                  width < 1024 && width >= 640 ? 22 : width < 640 ? 18 : 26
                }
              />
            }
            onClick={() =>
              window.open(
                'https://cyclic-wax-2df.notion.site/1c7f9546edb980219c92fd53785ebb70?source=copy_link',
                '_blank',
                'noopener,noreferrer'
              )
            }
          ></FillButton>
        </div>
        <p
          className={`text-txt-secondary mb-32 text-center text-[1.4rem]
            sm:text-[1.6rem] lg:text-[2rem] font-normal
            ${show ? 'translate-y-[0] opacity-100' : 'translate-y-[40px] opacity-0'}
            transition-all duration-400 ease-linear delay-800`}
        >
          반응형 웹에서부터 모바일, 데스크톱 앱까지
          <br />
          <span className="text-txt-point font-bold">5년간</span> 저를 성장시킨
          다양한 프로젝트가 저를 설명합니다.
        </p>
        <div
          className={`ani_Wrap
            ${show ? 'translate-y-[0] opacity-100' : 'translate-y-[40px] opacity-0'}
            transition-all duration-400 ease-linear delay-1000`}
        >
          <OutLineButton
            text={'작업 보기'}
            icon={<IconDownArrow aria-label="내려가기 아이콘" />}
            className={'m-auto mb-[150px] lg:mb-[200px] '}
            onClick={() => viewWorks()}
          ></OutLineButton>
        </div>
      </div>
    </section>
  );
}
