'use client';
import React from 'react';
import { ProjectData } from '@/mockData/allData';
import { useState } from 'react';
import Image from 'next/image';
import IconClose from '../../public/assets/icon_close.svg';
import Link from 'next/link';
import ModalTxtContent from './ModalTxtContent';

type Props = { item: ProjectData };

export default function ModalContentApp({ item }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [alertShow, setAlertShow] = useState(true);

  return (
    <div
      className={`content_area h-full w-full flex flex-col sm:grid
        sm:grid-cols-2 gap-x-[20px] overflow-auto sm:overflow-hidden`}
    >
      {/* iframe */}
      {item.url && (
        <div
          className={`iframe_wrap max-w-[320px] max-h-[700px] w-full h-full
          shrink-0 bg-txt-tertiary/40 ${loaded ? '' : 'animate-pulse'}
          overflow-auto flex items-center justify-center flex-col relative
          m-auto order-2 sm:order-1 border-2 border-foreground rounded-2xl`}
        >
          {!loaded && (
            <div
              className="loading relative w-full flex items-center
                justify-center"
            >
              <span className="relative size-30 flex items-center
                justify-center">
                <span
                  className="absolute inline-flex h-full w-full animate-ping
                    rounded-full bg-background/50 opacity-75"
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
            className={'absolute top-0 left-0 h-full w-full '}
            onLoad={() => setLoaded(true)}
          >
            죄송합니다. iframe이 지원되지 않는 기기입니다.
          </iframe>
          {alertShow && loaded && (
            <div
              className={`alert absolute left-[50%] translate-x-[-50%]
              bg-black/40 backdrop-blur-[10px] text-white rounded-2xl py-[24px]
              px-[10px] z-999 max-w-[280px] w-full
              ${alertShow ? 'scale-100' : 'scale-0'} transition-transform
              duration-200`}
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
                className="text-inherit font-normal text-[1.4rem] w-fit h-fit
                  text-center break-keep"
              >
                작동 가능한
                <span className="font-medium text-black/70 text-[1.4rem]">
                  &quot;카피 페이지&quot;
                </span>
                입니다. <br />
                모두 테스트 데이터로 실제 데이터와 다릅니다.
                <br />
                어플을 웹에서 작동하게 만든 사이트로 실제 구동과는 차이가 있을
                수 있습니다. <br />
                <br /> 이미지 업로드 기능은 어플용 플러그인으로 <br />
                카피 페이지에서는 실행 되지않습니다.
              </p>
            </div>
          )}
        </div>
      )}
      {!item.url && (
        <div
          className="relative justify-center flex-col pr-0 sm:pr-[32px] shrink-0
            order-2 sm:order-1"
        >
          <div
            className={`img_wrap relative h-[700px] sm:h-full max-h-[700px]
            w-full max-x-[320px] border-2 border-foreground rounded-2xl
            overflow-hidden`}
          >
            <Image
              src={item.img}
              alt={item.title + '이미지'}
              fill
              className="object-contain"
            ></Image>
          </div>{' '}
          {item.liveUrl ? (
            <Link
              href={item.liveUrl}
              target="_blank"
              className="modal_txt inline-block text-center w-full py-[8px]
                hover:!text-txt-tertiary hover:!font-medium transition-all
                duration-200"
            >
              라이브 페이지 바로가기:&nbsp;&nbsp;
              <span> {item.liveUrl}</span>
            </Link>
          ) : item.url ? (
            <Link
              href={item.url}
              target="_blank"
              className="modal_txt inline-block text-center w-full py-[8px]
                hover:!text-txt-tertiary hover:!font-medium transition-all
                duration-200"
            >
              카피 페이지 바로가기:&nbsp;&nbsp;
              <span> {item.url}</span>
            </Link>
          ) : null}
        </div>
      )}
      {/*NOTE 포트폴리오 설명란 */}
      <ModalTxtContent item={item}></ModalTxtContent>
    </div>
  );
}
