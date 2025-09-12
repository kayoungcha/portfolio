'use client';

import TitleText from '@/component/TitleText';
import WorkTagChip from '@/component/WorkTagChip';
import { frontEndSkill, workToolsSkill } from '@/mockData/allData';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';
import React, { useEffect, useRef } from 'react';

export default function Skills() {
  const skillsSectionRef = useRef<HTMLElement | null>(null);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  useEffect(() => {
    const el = skillsSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('skillsSection');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [setActiveSection]);
  return (
    <section ref={skillsSectionRef} id="skillsSection">
      <TitleText title={'사용 가능 기술'} styles={'mb-[24px]'} />
      <p className="text-center text-[1.6rem] text-txt-quaternary mb-[80px]">
        다양한 작업물을 경험하며 React / Angular 기반으로
        <br />
        아래 기술들을 익혔고 사용할 수 있습니다.
      </p>

      <section
        className="w-auto p-[40px] bg-background rounded-[24px]
          shadow-[0_4px_14px_-3px_rgba(209,228,209,0.7)]
          border-[rgba(209,228,209,0.5)] border-1 mb-[40px] max-w-[450px]
          m-auto"
      >
        <h3
          className="text-[2rem] font-medium text-txt-quaternary mb-[24px]
            text-center"
        >
          프론트엔드 개발 & 데이터 관리
        </h3>
        <div className="flex gap-x-[8px] gap-y-[14px] flex-wrap justify-center">
          {frontEndSkill.map((item, index) => {
            return (
              <WorkTagChip
                key={'프론트엔드 기술' + index}
                type={'skill'}
                text={item}
                moreStyling="text-[1.2rem] font-medium rounded-[14px] px-[12px] py-[2px]"
              ></WorkTagChip>
            );
          })}
        </div>
      </section>
      <section
        className="w-auto p-[40px] bg-background rounded-[24px]
          shadow-[0_4px_14px_-3px_rgba(231,198,194,0.7)]
          border-[rgba(231,198,194,0.7)] border-1 mb-[150px] max-w-[450px]
          m-auto"
      >
        <h3
          className="text-[2rem] font-medium text-txt-quaternary mb-[24px]
            text-center"
        >
          UI 스타일링 & 협업 생산성 도구
        </h3>
        <div className="flex gap-x-[8px] gap-y-[14px] flex-wrap justify-center">
          {workToolsSkill.map((item, index) => {
            return (
              <WorkTagChip
                key={'협업 툴' + index}
                type={'design'}
                text={item}
                moreStyling="text-[1.2rem] font-medium rounded-[14px] px-[12px] py-[2px]"
              ></WorkTagChip>
            );
          })}
        </div>
      </section>
    </section>
  );
}
