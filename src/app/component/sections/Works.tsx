'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import IconDownMore from '../../../../public/assets/icon_down_more.svg';
import WorksNav from '@/app/component/ui/WorksNav';
import { workNavDesc } from '@/mockData/allData';
import TitleText from '@/app/component/ui/TitleText';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';
import WorkCard from '@/app/component/ui/WorkCard';
import { useWindowWidthStore } from '@/store/useWindowWidthStore';
import { ProjectData } from '../../api/works/route';

export default function Works() {
  const width = useWindowWidthStore((state) => state.width);
  const [work, setWorks] = useState<string>('');
  const [showWorksIndex, setShowWorksIndex] = useState<number>(3);
  const [show, setShow] = useState<boolean>(false);
  const worksSectionRef = useRef<HTMLElement | null>(null);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch('/api/works')
      .then((res) => res.json())
      .then((json) => setProjectData(json));
  }, []);

  useEffect(() => {
    const el = worksSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
    if (width < 1024 && !menu) {
      setShowWorksIndex(3);
    } else if (width < 1024 && menu) {
      setShowWorksIndex(4);
    } else {
      setShowWorksIndex(3);
    }
  };

  // type별 column span 정의
  const getColSpan = (type: string) => {
    if (type === 'web') return width < 1024 ? 1 : 2;
    return 1;
  };

  const moreWorks = () => {
    if (showWorksIndex >= projectData.length) {
      setShowWorksIndex(3);
      const worksSection = document.getElementById('worksSection');
      worksSection?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    let colCount = 0;
    let addCount = 0;
    const setCount = width < 1024 ? 4 : 3;

    for (let i = showWorksIndex; i < projectData.length; i++) {
      const item = projectData[i];
      colCount += getColSpan(item.type);
      addCount++;

      if (colCount >= setCount) {
        break; // 한 줄이 꽉 찼으면 멈춤
      }
    }

    setShowWorksIndex((prev) => prev + addCount);
  };
  return (
    <section
      ref={worksSectionRef}
      id="worksSection"
      className={`works_wrap w-full pt-[4rem] mb-[100px] flex flex-col
        items-center rounded-[16px] ${
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
        className={`text-[1.4rem] sm:text-[1.6rem] text-txt-quaternary mb-[18px]
          ${show ? 'animate-fade_up_ani duration-500' : ''}`}
      >
        작업물은 중요도 순으로 정리되어 있습니다.
      </p>

      {/* NOTE 작업물 네비 */}
      <WorksNav
        updateWork={activeWorksNav}
        styles={`mb-[16px] ${show ? 'animate-fade_up_ani duration-550' : ''}`}
      ></WorksNav>
      <p
        className={`text-txt-quaternary text-[1.2rem] sm:text-[1.4rem]
          lg:text-[1.6rem] text-center whitespace-pre-line max-w-[500px]
          break-keep px-[20px]
          ${!work ? 'max-h-0 opacity-0' : 'max-h-[50rem] opacity-100'} mb-[40px]
          lg:mb-[80px] transition-all duration-400 ease-linear `}
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
          w-full h-full sm:gap-x-[24px] gap-y-[45px] mb-[40px] px-[1rem]
          sm:px-[4rem] `}
      >
        {projectData
          .filter((ele) => {
            if (!work) {
              return ele;
            } else if (ele.type === work) {
              return ele;
            }
          })
          .slice(0, showWorksIndex)
          .map((item, index) => {
            return (
              <WorkCard
                key={item.title + index}
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
        {showWorksIndex >= projectData.length ? (
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
