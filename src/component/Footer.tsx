'use client';

import Image from 'next/image';
import TitleText from './TitleText';
import { useEffect, useRef } from 'react';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';

export default function Footer() {
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  useEffect(() => {
    const el = contactSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('contactSection');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [setActiveSection]);

  return (
    <footer>
      <section
        ref={contactSectionRef}
        id="contactSection"
        className="relative h-[480px]"
      >
        <div
          className="w-full h-full absolute left-0 top-0 z-200 p-[40px] flex
            flex-col items-center"
        >
          <TitleText title={'연락처'} styles="!text-contact-title mb-[40px]" />

          <ul
            className="border-1 border-outline-btn bg-background
              backdrop-blur-[40px] shadow-[6px_7px_15.4px_0_rgba(0,0,0,0.1)]
              w-fit rounded-[20px] grid grid-rows-3 overflow-hidden mb-[40px]"
          >
            {[
              '이메일 주소 복사하기',
              '노션 포트폴리오로 이동하기',
              '노션 이력서로 이동하기',
            ].map((val) => {
              return (
                <li key={val} className="group hover:bg-outline-btn h-[60px]">
                  <button
                    className="w-full h-full text-[rgba(30,30,30,.68)]
                      text-[2rem] group-hover:text-background
                      group-hover:font-medium cursor-pointer px-[60px]
                      text-center transition-all duration-300"
                  >
                    {val}
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-x-[64px] items-center">
            <li>
              <button
                className="text-[48px] cursor-pointer scale-[0.9]
                  hover:scale-[1] transition-transform duration-200"
              >
                ☎️
              </button>
            </li>
            <li>
              <button
                className="pt-[5px] cursor-pointer scale-[0.9] hover:scale-[1]
                  transition-transform duration-200"
              >
                <Image
                  width={48}
                  height={48}
                  src="/assets/icon_git_logo.svg"
                  alt="깃 아이콘"
                />
              </button>
            </li>
            <li>
              <button
                className="text-[48px] cursor-pointer scale-[0.9]
                  hover:scale-[1] transition-transform duration-200"
              >
                📒
              </button>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden w-full h-full">
          <div
            className="absolute w-full h-full bg-[rgba(255,255,255,0.5)] left-0
              top-0 z-100 backdrop-blur-[70px]"
          ></div>
          <span
            className="block absolute w-[263px] h-[263px] left-[637px]
              top-[-142px] rounded-full bg-[rgba(44,103,241,.44))]
              animate-circle_ani1"
          ></span>

          <span
            className="block absolute w-[607px] h-[643px] rounded-full
              bottom-[-350px] left-0 bg-[rgba(136,18,120,.49)]
              animate-circle_ani2"
          ></span>
          <span
            className="block absolute w-[488px] h-[488px] rounded-full
              top-[200px] left-[calc(50%_-350px)] bg-[#92B1FB)]
              animate-circle_ani2"
          ></span>
          <span
            className="block absolute w-[263px] h-[263px] rounded-full
              left-[calc(50%_-_500px)] bottom-[120px] bg-[rgba(187,207,255,.44)]
              animate-circle_ani3"
          ></span>
          <span
            className="block absolute w-[382px] h-[404px] rounded-full
              right-[-20px] top-[-150px] bg-[rgba(35,0,49,.47)]
              animate-circle_ani2"
          ></span>
          <span
            className="block absolute w-[382px] h-[404px] rounded-full
              left-[244px] top-[-20px] bg-[rgba(35,0,49,.5)]
              animate-circle_ani3"
          ></span>
          <span
            className="block absolute w-[672px] h-[672px] rounded-full
              left-[-70px] top-[-200px] bg-[rgba(185,215,255,.53)]
              animate-circle_ani1"
          ></span>
          <span
            className="block absolute w-[672px] h-[672px] rounded-full
              right-[-60px] top-[-500px] bg-[rgba(185,245,255,.53)]
              animate-circle_ani2"
          ></span>
          <span
            className="block absolute w-[816px] h-[864px] rounded-full
              right-[-100px] bottom-[-450px] bg-[rgba(47,216,205,.38)]
              animate-circle_ani1"
          ></span>
          <span
            className="block absolute w-[320px] h-[320px] rounded-full
              right-[200px] bottom-0 bg-[rgba(47,216,205,.38)]
              animate-circle_ani3"
          ></span>
        </div>
      </section>
      <section
        className="bg-footer-background w-full h-[20rem] flex items-center
          justify-center"
      >
        <h6
          className="font-medium text-[1.6rem] text-footer-txt text-center
            opacity-50"
        >
          차가영
          <br />
          Frontend Developer
          <br />
          © 2025 차가영 • 서울, 대한민국
        </h6>
      </section>
    </footer>
  );
}
