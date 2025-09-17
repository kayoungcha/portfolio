'use client';

import Image from 'next/image';
import WorkTypeChip from './WorkTypeChip';
import WorkTitle from './WorkTitle';
import WorkTagChip from './WorkTagChip';
import { ProjectData, work } from '@/mockData/allData';
import { useEffect, useRef, useState } from 'react';
import Modal from '@/app/Modal';
import IconClose from '../../public/assets/icon_close.svg';
import ModalSubTitle from './ModalSubTitle';
import React from 'react';

type Props = { item: ProjectData; index: number; work: string };

export default function WorkCard({ item, index, work }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);
  const [alertShow, setAlertShow] = useState(true);

  // 섹션 observer
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
            observer.unobserve(entry.target); // 한 번만 실행
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // modal 켜질때마다 카피 경고 얼럿 다시 띄우기
  useEffect(() => {
    if (modalOpen) {
      setAlertShow(true);
    }
  }, [modalOpen]);

  useEffect(() => {
    console.log({ modalOpen });
  }, [modalOpen]);

  const chipMerged = [
    ...item.skill.map((val) => ({ type: 'skill', value: val })),
    ...item.design.map((val) => ({ type: 'design', value: val })),
    ...item.keyFeatures.map((val) => ({
      type: 'keyFeatures',
      value: val.key,
    })),
  ];

  return (
    <>
      <article
        ref={cardRef}
        className={`group bg-background w-full lg:h-[700px] lg:max-h-[700px]
          h-[600px] max-h-[600px] rounded-[24px] shadow-xl overflow-hidden
          relative opacity-0 col-span-1 cursor-pointer ${
            item.type === 'app' || item.type === 'publishing'
              ? 'md:col-span-1'
              : (item.type === 'web' && index === 0) || work === '웹'
                ? 'md:col-span-3'
                : 'md:col-span-2 '
          } ${show ? 'animate-fade-up-ani' : ''} hover:scale-[1.02]
          hover:shadow-2xl transition-all duration-300`}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={item.img}
          alt={item.title + '메인 이미지'}
          width={1200}
          height={400}
          className="w-full max-h-[400px] h-full absolute z-0 object-cover
            object-top scale-100 group-hover:scale-110 transition-all
            duration-300"
        />
        <div
          className="box w-full h-[350px] bg-background absolute left-0 bottom-0
            z-10 px-[40px] py-[40px]
            shadow-[3px_-4px_10px_1px_rgba(0,0,0,0.25)]"
        >
          <WorkTypeChip type={item.type} moreStyles="mb-[24px]"></WorkTypeChip>
          {/* <span
            className="absolute inline-block right-[40px] top-[40px] font-medium
              text-[1.4rem] text-txt-tertiary/50"
          >
            {item.year}
          </span> */}
          <WorkTitle title={item.title} moreStyles="mb-[12px]"></WorkTitle>
          <p className="font-normal text-[1.4rem] text-txt-quaternary mb-[24px]">
            {item.description}
          </p>
          {item.type !== 'app' ? (
            <div
              className="tag_area overflow-auto h-full max-h-[9rem]
                md:max-h-[12.8rem]"
            >
              {item.skill.length > 0 && (
                <div className="skill flex gap-[1.2rem] flex-wrap mb-[12px]">
                  {item.skill.map((skillItem) => {
                    return (
                      <WorkTagChip
                        key={item.title + skillItem}
                        type={'skill'}
                        text={skillItem}
                      ></WorkTagChip>
                    );
                  })}
                </div>
              )}
              {item.design.length > 0 && (
                <div className="design flex gap-[1.2rem] flex-wrap mb-[12px]">
                  {item.design.map((designItem) => {
                    return (
                      <WorkTagChip
                        key={item.title + designItem}
                        type={'design'}
                        text={designItem}
                      ></WorkTagChip>
                    );
                  })}
                </div>
              )}
              {item.keyFeatures.length > 0 && (
                <div
                  className="keyFeatures flex gap-[1.2rem] flex-wrap mb-[12px]"
                >
                  {item.keyFeatures.map((chip) => {
                    return (
                      <WorkTagChip
                        key={item.title + chip.key}
                        type={'keyFeatures'}
                        text={chip.key}
                      ></WorkTagChip>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div
              className="tag_area overflow-auto h-full max-h-[9rem]
                md:max-h-[12.8rem]"
            >
              <div className="keyFeatures flex gap-[1.2rem] flex-wrap mb-[12px]">
                {chipMerged.map((chip) => {
                  return (
                    <WorkTagChip
                      key={item.title + chip.value}
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

      {/* NOTE 모달 */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <article className="relative h-full">
          <button
            className="absolute block w-[32px] h-[32px] right-[10px] top-[-24px]
              cursor-pointer hover:scale-[1.2] hover:rotate-180
              transition-transform duration-300"
            onClick={() => setModalOpen(false)}
          >
            <IconClose></IconClose>
          </button>
          <div
            className={`content_area h-full grid w-full
              ${item.type === 'app' ? 'grid-cols-2 gap-x-[4px]' : 'grid-rows-2 gap-y-[20px]'}`}
          >
            {/* <div
            className={`img_area grid
              ${item.modalImage.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}
              overflow-hidden gap-x-[4px] aspect-[720/353]`}
          >
            {item.modalImage.map((img, index) => {
              return (
                <div
                  key={img + index}
                  className={`${item.modalImage.length === 1 ? 'col-span-2' : ''}
                  w-full h-[100%] object-contain relative`}
                >
                  <Image
                    src={item.mainImg}
                    alt={item.title + '메인 이미지 '}
                    fill
                    className="object-contain"
                  ></Image>
                </div>
              );
            })}
          </div> */}

            {/* iframe */}
            {item.url && (
              <div
                className={`iframe_wrap max-h-[700px] w-full h-full
                bg-txt-tertiary/40 ${loaded ? '' : 'animate-pulse'}
                overflow-auto flex items-center justify-center flex-col
                relative`}
              >
                {!loaded && (
                  <div
                    className="loading relative w-full flex items-center
                      justify-center"
                  >
                    <span
                      className="relative size-30 flex items-center
                        justify-center"
                    >
                      <span
                        className="absolute inline-flex h-full w-full
                          animate-ping rounded-full bg-background/50 opacity-75"
                      ></span>
                      <span
                        className="relative inline-flex size-20 rounded-full
                          bg-background/50 animate-ping"
                      ></span>
                    </span>
                    <span
                      className="absolute block w-fit text-center align-middle
                        text-[1.6rem] text-background pt-[20px]
                        top-[calc(50%_-_2.4rem)]"
                    >
                      잠시만 기다려 주세요.
                    </span>
                  </div>
                )}
                <iframe
                  src={item.url}
                  className="absolute top-0 left-0 h-full w-full"
                  onLoad={() => setLoaded(true)}
                >
                  죄송합니다. iframe이 지원되지 않는 기기입니다.
                </iframe>
                {alertShow && loaded && (
                  <div
                    className={`alert absolute left-0 bg-black/40
                    backdrop-blur-[10px] text-white rounded-2xl py-[24px]
                    px-[10px] z-999 ${alertShow ? 'scale-100' : 'scale-0'}
                    transition-transform duration-200`}
                    onClick={() => setAlertShow(false)}
                  >
                    <button
                      className="cursor-pointer absolute right-[10px] top-[8px]
                        rounded-[4px] bg-white/50 hover:bg-black/50 text-black
                        hover:text-white transition-color duration-200"
                      onClick={() => setAlertShow(false)}
                    >
                      <IconClose width={20} height={20}></IconClose>
                    </button>
                    <p
                      className="text-inherit font-normal text-[1.4rem] w-fit
                        h-fit text-center break-keep"
                    >
                      작동 가능한{' '}
                      <span className="font-medium text-black/70 text-[1.4rem]">
                        &quot;카피 페이지&quot;
                      </span>
                      입니다. <br />
                      모두 테스트 데이터로 실제 데이터와 다릅니다. 어플을 웹에서
                      작동하게 만든 사이트로 실제 구동과는 차이가 있을 수
                      있습니다. <br />
                      <br /> 이미지 업로드 기능은 어플용 플러그인으로 <br />
                      카피 페이지에서는 실행 되지않습니다.
                    </p>
                  </div>
                )}
              </div>
            )}
            {!item.url && (
              <div
                className={`img_wrap max-w-[320px] max-h-[700px] w-full h-full
                bg-txt-tertiary/40 overflow-auto flex items-center
                justify-center flex-col relative object-contain `}
              >
                <Image
                  src={item.img[0]}
                  alt={item.title + '이미지'}
                  fill
                ></Image>
              </div>
            )}
            {/*NOTE 포트폴리오 설명란 */}
            <div
              className="content_desc py-[24px] h-full overflow-auto
                [scrollbar-gutter:stable] pr-[32px]"
            >
              <WorkTypeChip type={item.type} moreStyles="mb-[14px]" />
              <div
                className="title_wrap flex items-end justify-between mb-[4px]"
              >
                <WorkTitle title={item.title} />
                {/* <span
                  className="inline-block right-[40px] top-[40px] font-medium
                    text-[1.4rem] text-txt-tertiary/50"
                >
                  {item.year}
                </span> */}
              </div>

              <p
                className="font-normal text-[1.4rem] text-txt-quaternary
                  mb-[24px]"
              >
                {item.description}
              </p>

              <div
                className="flex gap-x-[16px] mb-[28px] justify-between
                  items-center bg-foreground/20 p-[16px] pb-[32px] rounded-2xl"
              >
                <section>
                  <ModalSubTitle
                    title={'작업 기간'}
                    moreStyles="!font-medium !text-txt-tertiary/60 !text-[1.25rem]"
                  ></ModalSubTitle>
                  <p
                    className="font-light text-[1.2rem] text-txt-tertiary
                      relative top-[8px]"
                  >
                    {item.duration}
                  </p>
                </section>
                <section className="flex flex-col w-fit items-end">
                  <ModalSubTitle
                    title={'배포 플랫폼'}
                    moreStyles="!font-medium !text-txt-tertiary/60 !text-[1.25rem]"
                  ></ModalSubTitle>
                  <div className="app_icon_area flex gap-x-[16px] items-end">
                    {item.platforms.map((plat) => {
                      return (
                        <React.Fragment key={item.id + plat}>
                          {plat === 'Android' ? (
                            <div
                              className="icon_android w-[28px] h-[28px]
                                object-contain relative"
                            >
                              <svg
                                viewBox="0 0 152 89"
                                className="w-full h-full object-contain"
                                fill="none"
                              >
                                <g clipPath="url(#a)">
                                  <path
                                    fill="#34A853"
                                    d="M151.025 85.224q-.071-.464-.147-.92a75.665 75.665 0 0 0-7.546-22.597 76.5 76.5 0 0 0-5.511-8.995 76 76 0 0 0-8.322-9.808 76.034 76.034 0 0 0-13.398-10.626q.042-.074.085-.148 2.286-3.948 4.572-7.897l4.47-7.712a3946 3946 0 0 0 3.208-5.54q.38-.658.604-1.355a6.97 6.97 0 0 0-.652-5.702 6.9 6.9 0 0 0-2.406-2.398 7 7 0 0 0-2.954-.95 7 7 0 0 0-2.376.206 6.93 6.93 0 0 0-4.22 3.227q-1.606 2.77-3.208 5.54l-4.47 7.712c-1.523 2.634-3.05 5.263-4.573 7.897q-.25.43-.5.865c-.232-.092-.46-.184-.692-.272-8.398-3.205-17.511-4.958-27.036-4.958q-.39-.001-.78.004A75.7 75.7 0 0 0 50.977 25q-1.317.46-2.608.968-.234-.404-.467-.806-2.286-3.95-4.573-7.897l-4.47-7.713a4385 4385 0 0 1-3.208-5.54A6.93 6.93 0 0 0 29.055.58a6.9 6.9 0 0 0-2.954.95 6.92 6.92 0 0 0-3.157 4.185 6.96 6.96 0 0 0 .703 5.27l3.208 5.54 4.47 7.713c1.523 2.634 3.05 5.263 4.573 7.897.01.022.025.044.036.066a76.3 76.3 0 0 0-13.527 10.711 76.5 76.5 0 0 0-8.322 9.808 75.4 75.4 0 0 0-5.51 8.995 75.7 75.7 0 0 0-7.546 22.597 76.038 76.038 0 0 0-.581 4.247h151a77 77 0 0 0-.434-3.327z"
                                  />
                                  <path
                                    fill="#202124"
                                    d="M115.225 67.663c3.022-2.012 3.461-6.668.981-10.4-2.48-3.73-6.939-5.123-9.96-3.11-3.021 2.012-3.46 6.668-.98 10.4 2.479 3.73 6.938 5.123 9.959 3.11M46.762 64.564c2.48-3.73 2.04-8.387-.98-10.4-3.022-2.012-7.481-.619-9.96 3.112s-2.041 8.387.98 10.4 7.48.62 9.96-3.112"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path
                                      fill="#fff"
                                      d="M.459.555h151v88h-151z"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <span
                                className="text-center absolute
                                  left-[calc(50%_-_2.15rem)] bottom-[-16px]
                                  text-[1.2rem] font-light text-black/70"
                              >
                                Android
                              </span>
                            </div>
                          ) : plat === 'iOS' ? (
                            <div
                              className="icon_ios w-[28px] h-[28px]
                                object-contain relative"
                            >
                              <svg
                                viewBox="0 0 50 50"
                                className="w-full h-full object-contain"
                              >
                                <path d="M 15 3 C 8.3845336 3 3 8.3845336 3 15 L 3 35 C 3 41.615466 8.3845336 47 15 47 L 35 47 C 41.615466 47 47 41.615466 47 35 L 47 15 C 47 8.3845336 41.615466 3 35 3 L 15 3 z M 15 5 L 35 5 C 40.534534 5 45 9.4654664 45 15 L 45 35 C 45 40.534534 40.534534 45 35 45 L 15 45 C 9.4654664 45 5 40.534534 5 35 L 5 15 C 5 9.4654664 9.4654664 5 15 5 z M 11.615234 18.066406 C 10.912234 18.066406 10.394531 18.567563 10.394531 19.226562 C 10.394531 19.876563 10.912234 20.376953 11.615234 20.376953 C 12.318234 20.376953 12.837891 19.876562 12.837891 19.226562 C 12.837891 18.567562 12.318234 18.066406 11.615234 18.066406 z M 22.037109 18.636719 C 18.398109 18.636719 16.113281 21.18525 16.113281 25.28125 C 16.113281 29.36825 18.354109 31.933594 22.037109 31.933594 C 25.711109 31.933594 27.943359 29.35925 27.943359 25.28125 C 27.943359 21.19425 25.693109 18.637719 22.037109 18.636719 z M 34.966797 18.636719 C 32.198797 18.636719 30.351562 20.139437 30.351562 22.398438 C 30.351562 24.261437 31.397406 25.37025 33.691406 25.90625 L 35.326172 26.302734 C 37.005172 26.697734 37.744141 27.277141 37.744141 28.244141 C 37.744141 29.369141 36.583953 30.185547 35.001953 30.185547 C 33.306858 30.185547 32.128927 29.421639 31.960938 28.21875 L 30.007812 28.21875 C 30.148813 30.48675 32.037609 31.935547 34.849609 31.935547 C 37.855609 31.935547 39.736328 30.416234 39.736328 27.990234 C 39.736328 26.083234 38.6645 25.027875 36.0625 24.421875 L 34.666016 24.078125 C 33.014016 23.691125 32.345703 23.172578 32.345703 22.267578 C 32.345703 21.124578 33.383453 20.378906 34.939453 20.378906 C 36.416453 20.378906 37.434141 21.106391 37.619141 22.275391 L 39.535156 22.275391 C 39.421156 20.139391 37.541797 18.636719 34.966797 18.636719 z M 22.037109 20.472656 C 24.446109 20.472656 25.931641 22.33725 25.931641 25.28125 C 25.931641 28.20725 24.445109 30.097656 22.037109 30.097656 C 19.603109 30.097656 18.126953 28.20825 18.126953 25.28125 C 18.126953 22.33725 19.646109 20.473656 22.037109 20.472656 z M 10.675781 22.056641 L 10.675781 31.626953 L 12.556641 31.626953 L 12.556641 22.056641 L 10.675781 22.056641 z"></path>
                              </svg>
                              <span
                                className="text-center absolute
                                  left-[calc(50%_-_0.9rem)] bottom-[-16px]
                                  text-[1.2rem] font-light text-black/70"
                              >
                                iOS
                              </span>
                            </div>
                          ) : (
                            <span
                              className="text-center absolute
                                left-[calc(50%_-_0.9rem)] bottom-[-16px]
                                text-[1.2rem] font-light text-black/70"
                            >
                              {plat}
                            </span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </section>
              </div>

              <section className="mb-[24px]">
                <ModalSubTitle
                  firstTxt={'참'}
                  title={'여 범위'}
                ></ModalSubTitle>
                <p className="font-light text-[1.4rem] text-txt-tertiary">
                  {item.role}
                </p>
              </section>

              <section className="dev_tools mb-[24px]">
                <ModalSubTitle
                  firstTxt={'개'}
                  title={'발 도구'}
                ></ModalSubTitle>
                <div
                  className="flex flex-wrap gap-x-[8px] gap-y-[12px] mb-[12px]"
                >
                  {item.skill.map((ele) => {
                    return (
                      <WorkTagChip
                        key={item.title + 'detail' + ele}
                        type={'skill'}
                        text={ele}
                        moreStyles="font-medium text-[1.3rem] px-[1rem]  rounded-[24px]"
                      />
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-x-[8px] gap-y-[12px]">
                  {item.design.map((ele) => {
                    return (
                      <WorkTagChip
                        key={item.title + 'detail' + ele}
                        type={'design'}
                        text={ele}
                        moreStyles="font-medium text-[1.3rem] px-[1rem]  rounded-[24px]"
                      />
                    );
                  })}
                </div>
              </section>

              <section className="key_features mb-[24px]">
                <ModalSubTitle
                  firstTxt={'주'}
                  title={'요 기능'}
                ></ModalSubTitle>
                <ul className="">
                  {item.keyFeatures.map((ele) => {
                    return (
                      <li
                        key={item.title + 'detail' + ele}
                        className="font-light text-[1.4rem] text-txt-tertiary"
                      >
                        <WorkTagChip
                          key={item.title + 'detail' + ele}
                          type={'keyFeatures'}
                          text={ele.key}
                          moreStyles="font-medium text-[1.3rem] px-[1rem]  rounded-[24px] !text-background"
                        />

                        <p className="py-[4px] mb-[4px]">{ele.value}</p>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section>
                <ModalSubTitle firstTxt="도" title={'전 과제'}></ModalSubTitle>
                <ul>
                  {item.challenges.map((challenge) => {
                    return (
                      <li key={item.title + challenge.key}>
                        <p>도전과제: {challenge.key}</p>
                        <p>{challenge.value}</p>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <section>
                <ModalSubTitle firstTxt="주" title={'요 성과'}></ModalSubTitle>
                <ul>
                  {item.achievements.map((achievement, index) => {
                    return (
                      <li key={item.title + '주요성과' + index}>
                        {achievement}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </article>
      </Modal>
    </>
  );
}
