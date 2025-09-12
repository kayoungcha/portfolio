'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import IconDownMore from '../../public/assets/icon_down_more.svg';
import WorksNav from '@/component/WorksNav';
import { workList, workNavDesc } from '@/mockData/allData';
import TitleText from '@/component/TitleText';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';
import WorkCard from '@/component/WorkCard';

export default function Works() {
  const [work, setWorks] = useState<string>('');
  const [showWorksIndex, setShowWorksIndex] = useState<number>(3);
  const [show, setShow] = useState<boolean>(false);
  const worksSectionRef = useRef<HTMLElement | null>(null);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  useEffect(() => {
    const el = worksSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log({ entry });

          if (entry.isIntersecting) {
            setActiveSection('worksSection');
            setShow(true);
          }
        });
      },
      { threshold: 0.2 }
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
    if (showWorksIndex >= workList.length) {
      setShowWorksIndex(3);
      const worksSection = document.getElementById('worksSection');
      worksSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowWorksIndex((prev) => prev + 3);
    }
  };

  return (
    <section
      ref={worksSectionRef}
      id="worksSection"
      className={`works_wrap w-full min-h-screen pt-[4rem] mb-[100px] flex
        flex-col items-center rounded-[16px] ${
          show
            ? 'bg-works-background opacity-100 translate-0'
            : 'bg-background opacity-0 translate-y-[40px]'
        } transition-all duration-400 ease-linear`}
    >
      <TitleText
        title="작업물"
        styles={`mb-[16px] ${show ? 'animate-fade_up_ani duration-450' : ''}`}
      ></TitleText>
      <p
        className={`text-[1.6rem] text-txt-quaternary mb-[18px]
          ${show ? 'animate-fade_up_ani duration-500' : ''}`}
      >
        모든 작업물은 최신순으로 정리되어 있습니다.
      </p>

      {/* NOTE 작업물 네비 */}
      <WorksNav
        updateWork={activeWorksNav}
        styles={`mb-[24px] ${show ? 'animate-fade_up_ani duration-550' : ''}`}
      ></WorksNav>
      <p
        className={`text-txt-quaternary text-[1.6rem] text-center
          whitespace-pre-line
          ${!work ? 'max-h-0 opacity-0' : 'max-h-[50rem] opacity-100'} mb-[80px]
          transition-all duration-400 ease-linear`}
      >
        {workNavDesc
          .filter((ele) => ele.id === work)
          .map((item) => {
            return <Fragment key={item.id}> {item.desc}</Fragment>;
          })}
      </p>

      {/* NOTE 카드 뷰 */}
      <div
        className={`works_area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          w-full gap-x-[24px] gap-y-[45px] mb-[40px] px-[4rem] `}
      >
        {workList.slice(0, showWorksIndex).map((item, index) => {
          return (
            <WorkCard
              key={item.name + index}
              item={item}
              work={work}
              index={index}
            ></WorkCard>
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
