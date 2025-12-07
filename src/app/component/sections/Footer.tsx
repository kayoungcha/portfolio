'use client';

import Image from 'next/image';
import TitleText from '../ui/TitleText';
import { useEffect, useRef, useState } from 'react';
import { useActiveSectionStore } from '@/store/useActiveSectionStore';
import { useThemeStore } from '@/store/useThemeStore';

export default function Footer() {
  const theme = useThemeStore((state) => state.theme);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [showIcon, setShowIcon] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);

  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const mobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
      setIsMobile(mobile);
    }
  }, []);

  useEffect(() => {
    const el = contactSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('contactSection');
            setShow(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [setActiveSection]);

  const listHandle = (i: number, e: React.MouseEvent) => {
    if (i === 0) {
      handleCopy(e, 'rkdud9941@gmail.com');
    } else if (i === 1) {
      handleWindowOpen(
        'https://cyclic-wax-2df.notion.site/19ff9546edb980c8a0ced54cdb5df0bb?source=copy_link'
      );
    } else if (i === 2) {
      handleWindowOpen(
        'https://cyclic-wax-2df.notion.site/1c7f9546edb980219c92fd53785ebb70?source=copy_link'
      );
    } else {
      return;
    }
  };

  const handleCopy = (e: React.MouseEvent, copyString: string) => {
    navigator.clipboard.writeText(copyString).then(() => {
      setShowIcon(copyString);
      setTimeout(() => setShowIcon(''), 500);
    });
  };

  const handleWindowOpen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer>
      <section
        ref={contactSectionRef}
        id="contactSection"
        className={`relative h-[480px] z-0
          ${show ? ' translate-y-0' : 'translate-y-[100px]'}
          transition-transform duration-800 ease-linear`}
      >
        <div
          className="w-full h-full absolute left-0 top-0 z-200 p-[40px] flex
            flex-col items-center"
        >
          <TitleText
            title={'연락처'}
            styles={`!text-contact-title mb-[40px] ${show ? 'animate-fade-up-ani' : ''}`}
          />

          <ul
            className={`border-1 border-outline-btn bg-background
              dark:bg-foreground/20 backdrop-blur-[40px]
              shadow-[6px_7px_15.4px_0_rgba(0,0,0,0.1)] w-fit rounded-[20px]
              grid grid-rows-3 overflow-hidden mb-[40px]
              ${show ? 'animate-fade-up-ani' : ''}`}
          >
            {[
              '이메일 주소 복사하기',
              '노션 포트폴리오로 이동하기',
              '노션 이력서로 이동하기',
            ].map((val, index) => {
              return (
                <li
                  key={val}
                  className="group hover:bg-outline-btn
                    dark:hover:bg-outline-btn/50 h-[48px] sm:h-[60px]"
                >
                  <button
                    className="relative w-full h-full text-txt-contact
                      text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem]
                      group-hover:text-background group-hover:font-medium
                      cursor-pointer px-[24px] sm:px-[60px] text-center
                      transition-all duration-300"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onClick={(e) => listHandle(index, e)}
                  >
                    {index === 0 && hoverIndex === index
                      ? 'rkdud9941@gmail.com'
                      : val}
                    {index === 0 && showIcon === 'rkdud9941@gmail.com' && (
                      <div
                        className="absolute min-w-[180px] w-fit flex
                          items-center justify-center h-auto text-point
                          transition-opacity duration-500 gap-x-[4px]
                          bg-foreground/50 backdrop-blur-[20px] py-[4px]
                          px-[12px] rounded-2xl overflow-hidden font-medium
                          z-999"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                        <span className="text-[1.4rem] block">
                          복사 되었습니다!
                        </span>
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <ul
            className={`flex gap-x-0 max-w-[280px] w-full justify-between
              sm:max-w-full sm:w-fit sm:gap-x-[64px] items-center
              ${show ? 'animate-fade-up-ani' : ''}`}
          >
            <li>
              {isMobile ? (
                <a
                  className="text-[48px] cursor-pointer scale-[0.9]
                    hover:scale-[1] transition-transform duration-200"
                  title="전화 걸기"
                  href={`tel:+821025253132`}
                >
                  ☎️
                </a>
              ) : (
                <button
                  className="text-[48px] cursor-pointer scale-[0.9]
                    hover:scale-[1] transition-transform duration-200"
                  title="전화번호 복사하기"
                  onClick={(e) => handleCopy(e, '010-2525-3132')}
                >
                  ☎️
                  {showIcon === '010-2525-3132' && (
                    <div
                      className="absolute min-w-[180px] w-fit flex items-center
                        justify-center h-auto text-point transition-opacity
                        duration-500 gap-x-[4px] bg-foreground/50
                        backdrop-blur-[20px] py-[4px] px-[12px] rounded-2xl
                        overflow-hidden font-medium z-999"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      <span className="text-[1.4rem] block">
                        복사 되었습니다!
                      </span>
                    </div>
                  )}
                </button>
              )}
            </li>
            <li>
              <button
                className="pt-[5px] cursor-pointer scale-[0.9] hover:scale-[1]
                  transition-transform duration-200"
                title="Github 이동하기"
                onClick={() =>
                  handleWindowOpen('https://github.com/kayoungcha')
                }
              >
                {theme === 'light' ? (
                  <Image
                    width={48}
                    height={48}
                    src="/assets/icon_git_logo.svg"
                    alt="깃 아이콘"
                  />
                ) : (
                  <Image
                    width={48}
                    height={48}
                    src="/assets/icon_git_logo_w.svg"
                    alt="깃 아이콘"
                  />
                )}
              </button>
            </li>
            <li>
              <button
                className="text-[48px] cursor-pointer scale-[0.9]
                  hover:scale-[1] transition-transform duration-200"
                title="개발 노트 이동하기"
                onClick={() =>
                  handleWindowOpen(
                    'https://cyclic-wax-2df.notion.site/1c6f9546edb9802e88c0d7553cd352ad?source=copy_link'
                  )
                }
              >
                📒
              </button>
            </li>
          </ul>
        </div>
        <div className={'relative overflow-hidden w-full h-full'}>
          <div
            className={`absolute w-full h-full bg-[rgba(255,255,255,0.5)]
              dark:bg-[rgba(56,56,56,0.5)] left-0 top-0 z-100
              backdrop-blur-[70px]`}
          ></div>
          <span
            className="block absolute w-[263px] h-[263px] left-[637px]
              top-[-142px] rounded-full bg-[rgba(44,103,241,.44)]
              animate-circle_ani1"
          ></span>

          <span
            className="block absolute w-[607px] h-[643px] rounded-full
              bottom-[-350px] left-0 bg-[rgba(136,18,120,.49)]
              animate-circle_ani2"
          ></span>
          <span
            className="block absolute w-[488px] h-[488px] rounded-full
              top-[200px] left-[calc(50%_-350px)] bg-[#92B1FB]
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
        className="relative bg-footer-background w-full h-[14rem] flex
          items-center justify-center z-10"
      >
        <h6
          className="font-medium text-[1.4rem] text-footer-txt text-center
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
