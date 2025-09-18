import React from 'react';
import ModalSubTitle from './ModalSubTitle';
import { ProjectData } from '@/mockData/allData';
import WorkTypeChip from './WorkTypeChip';
import WorkTitle from './WorkTitle';
import WorkTagChip from './WorkTagChip';

type Props = { item: ProjectData };

export default function ModalTxtContent({ item }: Props) {
  return (
    <div
      className={`content_desc py-[24px] h-auto [scrollbar-gutter:stable]
        shrink-0 order-1 sm:order-2
        ${item.type !== 'web' ? 'overflow-auto pr-[8px]' : 'overflow-hidden'}`}
    >
      <WorkTypeChip type={item.type} moreStyles="mb-[14px]" />
      <div className="title_wrap flex items-end justify-between mb-[4px]">
        <WorkTitle title={item.title} />
      </div>

      <p className="font-normal text-[1.4rem] text-txt-quaternary mb-[24px]">
        {item.description}
      </p>

      <div
        className="flex gap-x-[16px] mb-[28px] justify-between items-center
          bg-foreground/20 p-[16px] pb-[32px] rounded-2xl"
      >
        <section>
          <ModalSubTitle
            title={'작업 기간'}
            moreStyles="!font-medium !text-txt-tertiary/60 !text-[1.25rem]"
          ></ModalSubTitle>
          <p
            className="font-light text-[1.2rem] text-txt-tertiary relative
              top-[8px]"
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
                      className="icon_android w-[28px] h-[28px] object-contain
                        relative"
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
                            <path fill="#fff" d="M.459.555h151v88h-151z" />
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
                      className="icon_ios w-[28px] h-[28px] object-contain
                        relative"
                    >
                      <svg
                        viewBox="0 0 50 50"
                        className="w-full h-full object-contain"
                      >
                        <path d="M 15 3 C 8.3845336 3 3 8.3845336 3 15 L 3 35 C 3 41.615466 8.3845336 47 15 47 L 35 47 C 41.615466 47 47 41.615466 47 35 L 47 15 C 47 8.3845336 41.615466 3 35 3 L 15 3 z M 15 5 L 35 5 C 40.534534 5 45 9.4654664 45 15 L 45 35 C 45 40.534534 40.534534 45 35 45 L 15 45 C 9.4654664 45 5 40.534534 5 35 L 5 15 C 5 9.4654664 9.4654664 5 15 5 z M 11.615234 18.066406 C 10.912234 18.066406 10.394531 18.567563 10.394531 19.226562 C 10.394531 19.876563 10.912234 20.376953 11.615234 20.376953 C 12.318234 20.376953 12.837891 19.876562 12.837891 19.226562 C 12.837891 18.567562 12.318234 18.066406 11.615234 18.066406 z M 22.037109 18.636719 C 18.398109 18.636719 16.113281 21.18525 16.113281 25.28125 C 16.113281 29.36825 18.354109 31.933594 22.037109 31.933594 C 25.711109 31.933594 27.943359 29.35925 27.943359 25.28125 C 27.943359 21.19425 25.693109 18.637719 22.037109 18.636719 z M 34.966797 18.636719 C 32.198797 18.636719 30.351562 20.139437 30.351562 22.398438 C 30.351562 24.261437 31.397406 25.37025 33.691406 25.90625 L 35.326172 26.302734 C 37.005172 26.697734 37.744141 27.277141 37.744141 28.244141 C 37.744141 29.369141 36.583953 30.185547 35.001953 30.185547 C 33.306858 30.185547 32.128927 29.421639 31.960938 28.21875 L 30.007812 28.21875 C 30.148813 30.48675 32.037609 31.935547 34.849609 31.935547 C 37.855609 31.935547 39.736328 30.416234 39.736328 27.990234 C 39.736328 26.083234 38.6645 25.027875 36.0625 24.421875 L 34.666016 24.078125 C 33.014016 23.691125 32.345703 23.172578 32.345703 22.267578 C 32.345703 21.124578 33.383453 20.378906 34.939453 20.378906 C 36.416453 20.378906 37.434141 21.106391 37.619141 22.275391 L 39.535156 22.275391 C 39.421156 20.139391 37.541797 18.636719 34.966797 18.636719 z M 22.037109 20.472656 C 24.446109 20.472656 25.931641 22.33725 25.931641 25.28125 C 25.931641 28.20725 24.445109 30.097656 22.037109 30.097656 C 19.603109 30.097656 18.126953 28.20825 18.126953 25.28125 C 18.126953 22.33725 19.646109 20.473656 22.037109 20.472656 z M 10.675781 22.056641 L 10.675781 31.626953 L 12.556641 31.626953 L 12.556641 22.056641 L 10.675781 22.056641 z"></path>
                      </svg>
                      <span
                        className="text-center absolute
                          left-[calc(50%_-_0.9rem)] bottom-[-16px] text-[1.2rem]
                          font-light text-black/70"
                      >
                        iOS
                      </span>
                    </div>
                  ) : (
                    <div
                      className="icon_ios w-[28px] h-[28px] object-contain
                        relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                        />
                      </svg>

                      <span
                        className="text-center absolute
                          left-[calc(50%_-_1.6rem)] bottom-[-16px] text-[1.2rem]
                          font-light text-black/70"
                      >
                        {plat.toUpperCase()}
                      </span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </div>
      <section className="mb-[24px]">
        <ModalSubTitle firstTxt={'참'} title={'여 범위'}></ModalSubTitle>
        <p className="modal_txt">{item.role}</p>
      </section>

      <section className="dev_tools mb-[24px]">
        <ModalSubTitle firstTxt={'개'} title={'발 도구'}></ModalSubTitle>
        <div className="flex flex-wrap gap-x-[8px] gap-y-[12px] mb-[12px]">
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
        <ModalSubTitle firstTxt={'주'} title={'요 기능'}></ModalSubTitle>
        <ul>
          {item.keyFeatures.map((ele) => {
            return (
              <li
                key={item.title + 'detail' + ele.key}
                className={`${item.type === 'web' && 'flex gap-[16px] items-center'}`}
              >
                <WorkTagChip
                  type={'keyFeatures'}
                  text={ele.key}
                  moreStyles="font-medium text-[1.3rem] px-[1rem]  rounded-[24px] !text-background "
                />

                <p className="py-[4px] mb-[4px] modal_txt">{ele.value}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <ModalSubTitle firstTxt="도" title={'전 과제'}></ModalSubTitle>
        <ul className="mb-[24px]">
          {item.challenges.map((challenge) => {
            return (
              <li key={item.title + challenge.key} className="mb-[8px]">
                <p
                  className="modal_txt !font-medium flex items-center
                    gap-x-[4px] mb-[4px]"
                >
                  <span
                    className="inline-block w-[6px] h-[2px] bg-txt-tertiary/70
                      mt-[-3px]"
                  ></span>
                  <span>{challenge.key}</span>
                </p>
                <p className="modal_txt mb-[4px]">{challenge.value}</p>
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
              <li
                key={item.title + '주요성과' + index}
                className="modal_txt mb-[8px] flex items-start gap-x-[4px]"
              >
                <span
                  className="inline-block w-[6px] h-[2px] bg-txt-tertiary/50
                    mt-[0.85rem]"
                ></span>
                <span>{achievement}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
