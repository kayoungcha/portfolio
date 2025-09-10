'use client';
import Image from 'next/image';

import { useThemeStore } from '@/store/useThemeStore';
// 컴포넌트
import FillButton from '@/component/FillButton';
import OutLineButton from '@/component/OutLineButton';
import MainIconChip from '@/component/MainIconChip';
// 이미지
import IconOpen from '../../public/assets/icon_open.svg';
import IconDownArrow from '../../public/assets/icon-down-arrow.svg';
import IconDownMore from '../../public/assets/icon_down_more.svg';
import TitleText from '@/component/TitleText';
import WorksNav from '@/component/WorksNav';
import { useState } from 'react';
import WorkTypeChip from '@/component/WorkTypeChip';
import WorkTitle from '@/component/WorkTitle';
import WorkTagChip from '@/component/WorkTagChip';

const icons = [
  {
    name: 'angular',
    img: '/assets/icon_angular_logo.svg',
    size: 46,
    position: { x: 230, y: 350 },
  },
  {
    name: 'firebase',
    img: '/assets/icon_firebase_logo.svg',
    size: 48,
    position: { x: -390, y: 310 },
  },
  {
    name: 'git',
    img: '/assets/icon_git_logo.svg',
    size: 36,
    position: { x: -360, y: -20 },
  },
  {
    name: 'ionic',
    img: '/assets/icon_ionic_logo.svg',
    size: 31,
    position: { x: 215, y: -60 },
  },
  {
    name: 'react',
    img: '/assets/icon_react_logo.svg',
    size: 45,
    position: { x: 390, y: 170 },
  },
  {
    name: 'typescript',
    img: '/assets/icon_typescript_logo.svg',
    size: 33,
    position: { x: -290, y: 140 },
  },
];

const workList = [
  {
    type: 'web',
    name: 'Streaum',
    mainImg: '/assets/worksImages/img_streaum.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2024',
    skill: [
      'React',
      'vite',
      'zustand',
      'Restful Api',
      'React Query',
      'Electron',
      'Recharts',
      'React quill',
      'Storybook',
      'FramerMotion',
    ],
    keyFeatures: [
      '랭킹',
      '커뮤니티',
      '유튜브 api 연결',
      '스트리밍 플랫폼 api 연결',
      '주요 게임 api 연결',
    ],
    design: ['Figma'],
  },
  {
    type: 'app',
    name: 'ANIDAR',
    mainImg: '/assets/worksImages/img_anidar.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'Capacitor'],
    keyFeatures: ['예약기능', 'QR', '쇼핑몰', 'push 알람', '채팅'],
    design: ['Sketch'],
  },
  {
    type: 'web',
    name: 'StartApp 메인 홈페이지',
    mainImg: '/assets/worksImages/img_startapp.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Angular', 'Firebase'],
    keyFeatures: ['문의하기', '간편 견적', '견적 다운'],
    design: ['Sketch'],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
  {
    type: 'app',
    name: 'Heyo',
    mainImg: '/assets/worksImages/img_heyo.png',
    desc: '스트리머 팬덤 기반 게임 랭크 사이트',
    year: '2022',
    skill: ['Ionic', 'Angular', 'Firebase', 'cordova'],
    keyFeatures: [
      '지역기반',
      '커뮤니티',
      '포인트 차감',
      '실명 인증',
      '번호 인증',
      'push 알람',
    ],
    design: [],
  },
];

const frontEndSkill = [
  'React',
  'Angular',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'WordPress',
  'Electron',
  'Capacitor',
  'Cordova',
  'Firebase ',
  'Zustand',
  'React Query',
  'Chart.js',
  'Recharts',
  'React quill',
];
const workToolsSkill = [
  'HTML',
  'CSS',
  'SCSS',
  'Tailwindcss',
  'GitHub',
  'GitLab',
  'Figma',
  'Photoshop',
  'XD',
  'Sketch',
  'Storybook',
];

export default function Home() {
  const theme = useThemeStore((state) => state.theme);
  const [work, setWorks] = useState<string>('');
  const [showWorksIndex, setShowWorksIndex] = useState<number>(3);

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
    <main className="pt-[7.6rem] relative">
      <div
        className="main_background absolute w-full h-[100vh] top-0 left-0
          pointer-events-none"
      >
        {icons.map((icon) => {
          return (
            <MainIconChip
              key={icon.name}
              iconSrc={icon.img}
              alt={`${icon.name} icon`}
              position={icon.position}
              size={icon.size}
            ></MainIconChip>
          );
        })}
      </div>
      <h1
        className="text-txt-secondary m-auto mb-[32px] text-center
          text-[5.8rem]"
      >
        안녕하세요.
        <span className="text-primary block font-medium">
          프론트엔드 개발자
        </span>
        <span className="font-bold">차가영</span> 입니다.
      </h1>
      <p className="text-txt-tertiary mb-[64px] text-center text-[2rem]">
        모바일 앱부터 웹까지, 다양한 프로젝트로 빠르게 배우고 적응해왔습니다.
        <br />
        새로운 여정을 함께할 곳을 찾고 있습니다.
      </p>
      <FillButton
        text={'이력서 보러가기'}
        className="m-auto mb-[100px]"
        icon={<IconOpen aria-label="새창 열기 아이콘" />}
      ></FillButton>
      <p className="text-txt-secondary mb-32 text-center text-[2rem]
        font-normal">
        반응형 웹에서부터 모바일, 데스크톱 앱까지
        <br />
        <span className="text-txt-point font-bold">5년간</span> 저를 성장시킨
        다양한 프로젝트가 저를 설명합니다.
      </p>
      <OutLineButton
        text={'작업 보기'}
        icon={<IconDownArrow aria-label="내려가기 아이콘" />}
        className="m-auto mb-[200px]"
      ></OutLineButton>

      <section
        className="works_wrap w-full bg-works-background pt-[4rem] mb-[100px]
          flex flex-col items-center rounded-[16px]"
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
                  className="w-full max-h-[400px] h-full absolute z-0
                    object-cover object-top"
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
                      <div
                        className="skill flex gap-[1.2rem] flex-wrap mb-[12px]"
                      >
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
                className="rotate-180 transition-transform duration-200
                  mt-[-2px]"
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

      <section className="">
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
          <div className="flex gap-x-[8px] gap-y-[14px] flex-wrap
            justify-center">
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
          <div className="flex gap-x-[8px] gap-y-[14px] flex-wrap
            justify-center">
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
    </main>
  );
}
