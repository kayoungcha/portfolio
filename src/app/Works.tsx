'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import IconDownMore from '../../public/assets/icon_down_more.svg';
import WorksNav from '@/component/WorksNav';
import WorkTypeChip from '@/component/WorkTypeChip';
import WorkTitle from '@/component/WorkTitle';
import { workList } from '@/mockData/allData';
import TitleText from '@/component/TitleText';
import WorkTagChip from '@/component/WorkTagChip';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';

export default function Works() {
  const [work, setWorks] = useState<string>('');
  const [showWorksIndex, setShowWorksIndex] = useState<number>(3);
  const worksSectionRef = useRef<HTMLElement | null>(null);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  useEffect(() => {
    const el = worksSectionRef.current;
    console.log('Works ref:', el);

    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Works observer entries:', entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('>>> Works ACTIVE');
            setActiveSection('worksSection');
          } else {
            console.log('Works NOT intersecting');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [setActiveSection]);

  const activeWorksNav = (menu: string) => {
    setWorks(menu);
  };

  const moreWorks = () => {
    setShowWorksIndex((prev) => {
      if (prev >= workList.length) {
        return 3;
      }
      return prev + 3;
    });
  };

  return (
    <section
      ref={worksSectionRef}
      id="worksSection"
      className="works_wrap w-full min-h-full bg-works-background pt-[4rem]
        mb-[100px] flex flex-col items-center rounded-[16px]"
    >
      <TitleText title="작업물" styles="mb-[16px]"></TitleText>
      <p className="text-[1.6rem] text-txt-quaternary mb-[18px]">
        모든 작업물은 최신순으로 정리되어 있습니다.
      </p>
      <WorksNav updateWork={activeWorksNav} styles="mb-[24px]"></WorksNav>
      <p className="text-txt-quaternary text-[1.6rem] text-center mb-[80px]">
        {work === '앱' ? (
          <>
            모바일 앱은 Ionic과 Angular를 이용한 하이브리드 앱으로 <br />
            Firebase를 통해 서버리스 백엔드를 설계 및 구현까지 직접
            진행하였습니다.
          </>
        ) : work === '웹' ? (
          <>
            웹 작업은 React 작업과 Angular 작업 WordPress 세가지 버전이
            있습니다. <br />
            React 작업은 퍼블리싱과 HTTP 프론트엔드 작업을 진행하였고. <br />
            Angular 작업은 Firebase를 통한 서버리스 백엔드 설계 및 구현까지
            진행하였습니다.
          </>
        ) : work === '퍼블리싱' ? (
          <>
            퍼블리셔로 시작해 퍼블리싱 작업이 많습니다. <br />
            모든 퍼블리싱 작업은 Ionic / Angular로 작업되어있습니다.
          </>
        ) : work === '개인작업' ? (
          <>포트폴리오와 작업을 진행하며 만들었던 실험용 개인 작업</>
        ) : (
          ''
        )}
      </p>
      <div
        className="works_area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          w-full gap-x-[24px] gap-y-[45px] mb-[40px] px-[4rem]"
      >
        {workList.slice(0, showWorksIndex).map((item, index) => {
          const chipMerged = [
            ...item.skill.map((val) => ({ type: 'skill', value: val })),

            ...item.design.map((val) => ({ type: 'design', value: val })),
            ...item.keyFeatures.map((val) => ({
              type: 'keyFeatures',
              value: val,
            })),
          ];

          return (
            <article
              key={item.name + index}
              className={`bg-background w-full lg:h-[700px] lg:max-h-[700px]
              h-[600px] max-h-[600px] rounded-[24px] shadow-xl overflow-hidden
              relative col-span-1 ${
                item.type === 'app'
                  ? 'md:col-span-1'
                  : (item.type === 'web' && index === 0) || work === '웹'
                    ? 'md:col-span-3'
                    : 'md:col-span-2 '
              }`}
            >
              <Image
                src={item.mainImg}
                alt={item.name + '메인 이미지'}
                width={1200}
                height={400}
                className="w-full max-h-[400px] h-full absolute z-0 object-cover
                  object-top"
              />
              <div
                className="box w-full h-[350px] bg-background absolute left-0
                  bottom-0 z-10 px-[40px] py-[40px]
                  shadow-[3px_-4px_10px_1px_rgba(0,0,0,0.25)]"
              >
                <WorkTypeChip type={item.type}></WorkTypeChip>
                <span
                  className="absolute inline-block right-[40px] top-[40px]
                    font-medium text-[1.4rem] text-txt-tertiary-50"
                >
                  {item.year}
                </span>
                <WorkTitle title={item.name}></WorkTitle>
                <p
                  className="font-normal text-[1.4rem] text-txt-quaternary
                    mb-[24px]"
                >
                  {item.desc}
                </p>
                {item.type !== 'app' ? (
                  <div
                    className="tag_area overflow-auto h-full max-h-[9rem]
                      md:max-h-[12.8rem]"
                  >
                    <div className="skill flex gap-[1.2rem] flex-wrap mb-[12px]">
                      {item.skill.map((skillItem) => {
                        return (
                          <WorkTagChip
                            key={item.name + skillItem}
                            type={'skill'}
                            text={skillItem}
                          ></WorkTagChip>
                        );
                      })}
                    </div>
                    <div
                      className="design flex gap-[1.2rem] flex-wrap mb-[12px]"
                    >
                      {item.design.map((designItem) => {
                        return (
                          <WorkTagChip
                            key={item.name + designItem}
                            type={'design'}
                            text={designItem}
                          ></WorkTagChip>
                        );
                      })}
                    </div>
                    <div
                      className="keyFeatures flex gap-[1.2rem] flex-wrap
                        mb-[12px]"
                    >
                      {item.keyFeatures.map((chip) => {
                        return (
                          <WorkTagChip
                            key={item.name + chip}
                            type={'keyFeatures'}
                            text={chip}
                          ></WorkTagChip>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div
                    className="tag_area overflow-auto h-full max-h-[9rem]
                      md:max-h-[12.8rem]"
                  >
                    <div
                      className="keyFeatures flex gap-[1.2rem] flex-wrap
                        mb-[12px]"
                    >
                      {chipMerged.map((chip) => {
                        return (
                          <WorkTagChip
                            key={item.name + chip.value}
                            type={chip.type}
                            text={chip.value}
                          ></WorkTagChip>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <button
        className="flex items-center justify-center gap-x-[4px] text-[1.8rem]
          rounded-[4px] border-outline-btn bg-background w-full h-[4.8rem]
          border-1 cursor-pointer pt-[1px] hover:bg-outline-btn
          hover:text-background transition-color duration-200"
        onClick={() => moreWorks()}
      >
        {showWorksIndex >= workList.length ? (
          <>
            접기
            <IconDownMore
              className="rotate-180 transition-transform duration-200 mt-[-2px]"
              width={20}
              height={24}
            ></IconDownMore>
          </>
        ) : (
          <>
            더보기
            <IconDownMore
              className="rotate-0 transition-transform duration-200 mt-[-2px]"
              width={20}
              height={24}
            ></IconDownMore>
          </>
        )}
      </button>
    </section>
  );
}
