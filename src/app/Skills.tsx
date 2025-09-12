'use client';

import TitleText from '@/component/TitleText';
import WorkTagChip from '@/component/WorkTagChip';
import { frontEndSkill, workToolsSkill } from '@/mockData/allData';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';
import React, { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const skillsSectionRef = useRef<HTMLElement | null>(null);
  const frontChipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const toolChipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [show, setShow] = useState<boolean>(false);
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
            setShow(true);
            frontChipRefs.current.forEach((chip) => {
              if (chip) {
                const randomDelay = Math.random() * 800; // 0 ~ 800ms
                const randomX = (Math.random() - 0.5) * 800; // -20px ~ +20px
                const randomDeg = (Math.random() - 0.5) * 180; // -20px ~ +20px
                const randomDuration = 600 + Math.random() * 600; // 0.4s ~ 1s

                chip.style.setProperty('--x-offset', `${randomX}px`);
                chip.style.setProperty('--rotate', `${randomDeg}deg`);
                chip.style.setProperty('--skew', `${randomDeg}deg`);
                chip.style.animationDelay = `${randomDelay}ms`;
                chip.style.animationDuration = `${randomDuration}ms`;
                chip.classList.add('animate-chip');
              }
            });
            toolChipRefs.current.forEach((chip) => {
              if (chip) {
                const randomDelay = Math.random() * 1000; // 0 ~ 800ms
                const randomX = (Math.random() - 0.5) * 1000; // -20px ~ +20px
                const randomDuration = 500 + Math.random() * 600; // 0.4s ~ 1s
                const randomDeg = -(Math.random() - 0.5) * 180; // -20px ~ +20px

                chip.style.setProperty('--x-offset', `${randomX}px`);
                chip.style.setProperty('--rotate', `${randomDeg}deg`);
                chip.style.setProperty('--skew', `${randomDeg}deg`);
                chip.style.animationDelay = `${randomDelay}ms`;
                chip.style.animationDuration = `${randomDuration}ms`;
                chip.classList.add('animate-chip');
              }
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [setActiveSection]);
  return (
    <section
      ref={skillsSectionRef}
      id="skillsSection"
      className={`${show ? 'animate-fade-up-ani' : 'opacity-0 translate-y-[40px]'}`}
    >
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
              <span
                key={'프론트엔드 기술' + index}
                ref={(el) => {
                  frontChipRefs.current[index] = el; // 대입만 하고 반환 없음
                }}
              >
                <WorkTagChip
                  type={'skill'}
                  text={item}
                  moreStyling="text-[1.2rem] font-medium rounded-[14px] px-[12px] py-[2px]"
                />
              </span>
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
              <span
                key={'협업 툴' + index}
                ref={(el) => {
                  toolChipRefs.current[index] = el; // 대입만 하고 반환 없음
                }}
              >
                <WorkTagChip
                  type={'design'}
                  text={item}
                  moreStyling="text-[1.2rem] font-medium rounded-[14px] px-[12px] py-[2px]"
                />
              </span>
            );
          })}
        </div>
      </section>
    </section>
  );
}
