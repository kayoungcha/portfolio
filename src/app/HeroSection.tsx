'use client';

import React, { useEffect, useRef, useState } from 'react';
import { heroIcons } from '@/mockData/allData';
import FillButton from '@/component/FillButton';
import OutLineButton from '@/component/OutLineButton';
import MainIconChip from '@/component/MainIconChip';
// 이미지
import IconOpen from '../../public/assets/icon_open.svg';
import IconDownArrow from '../../public/assets/icon-down-arrow.svg';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';

export default function HeroSection() {
  const [show, setShow] = useState<boolean>(false);
  const heroSectionRef = useRef<HTMLElement | null>(null);
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

  return (
    <section
      ref={heroSectionRef}
      id="heroSection"
      className="w-full h-auto relative"
    >
      <div className="main_background absolute top-0 left-0 w-full h-full z-0">
        {heroIcons.map((icon, index) => {
          return (
            <MainIconChip
              key={icon.name}
              iconSrc={icon.img}
              alt={`${icon.name} icon`}
              position={icon.position}
              size={icon.size}
              moreStyles={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ['--tx' as any]: `calc(-50% - ${icon.position.x}px)`,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ['--ty' as any]: `calc(-50% - ${icon.position.y}px)`,
                animation: `mainChip_ani ${(index + 1) * 0.3}s 1s cubic-bezier(0.34,1.56,0.64,1) forwards `,
                // transition: `opacity ${index % 2 === 0 ? index * 0.5 : index * 0.4}s ease-in-out`,
              }}
            ></MainIconChip>
          );
        })}
      </div>
      <div className="main relative z-10">
        <h1
          className={`text-txt-secondary m-auto mb-[32px] text-center
            text-[5.8rem]
            ${show ? 'translate-y-[0] opacity-100' : 'translate-y-[40px] opacity-0'}
            transition-all duration-400 ease-linear`}
        >
          안녕하세요.
          <span className="text-primary block font-medium">
            프론트엔드 개발자
          </span>
          <span className="font-bold">차가영</span> 입니다.
        </h1>
        <p
          className={`text-txt-tertiary mb-[64px] text-center text-[2rem]
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
            className={'m-auto mb-[100px]'}
            icon={<IconOpen aria-label="새창 열기 아이콘" />}
          ></FillButton>
        </div>
        <p
          className={`text-txt-secondary mb-32 text-center text-[2rem]
            font-normal
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
            className={'m-auto mb-[200px] '}
          ></OutLineButton>
        </div>
      </div>
    </section>
  );
}
