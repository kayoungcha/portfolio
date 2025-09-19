'use client';
import React from 'react';
import { ProjectData } from '@/mockData/allData';
import ModalSubTitle from './ModalSubTitle';
import WorkTagChip from './WorkTagChip';
import Image from 'next/image';
import Link from 'next/link';
import WorkTypeChip from './WorkTypeChip';
import WorkTitle from './WorkTitle';
import ModalTxtContent from './ModalTxtContent';

type Props = { item: ProjectData };

export default function ModalContentWeb({ item }: Props) {
  const linkUrl = item.liveUrl ?? item.url;

  return (
    <div className={'content_area h-full w-full overflow-auto'}>
      <div
        className={`img_wrap relative max-w-full w-full max-h-[40%] h-full
          object-contain group overflow-hidden bg-black`}
      >
        <Image
          src={item.img}
          alt={item.title + '이미지'}
          fill
          className="object-contain group-hover:scale-110 transition-transform
            duration-200"
        ></Image>
        {linkUrl && (
          <Link
            className="block absolute left-0 top-0 w-full h-full"
            href={linkUrl}
            target="_blank"
          ></Link>
        )}
      </div>
      {item.liveUrl ? (
        <Link
          href={item.liveUrl}
          target="_blank"
          className="text-[1.4rem] text-white inline-block text-center w-full
            py-[8px] hover:font-medium transition-all duration-200 bg-black"
        >
          라이브 페이지 바로가기:&nbsp;&nbsp;
          <span> {item.liveUrl}</span>
        </Link>
      ) : item.url ? (
        <Link
          href={item.url}
          target="_blank"
          className="text-[1.4rem] text-white inline-block text-center w-full
            py-[8px] hover:font-medium transition-all duration-200 bg-black"
        >
          카피 페이지 바로가기:&nbsp;&nbsp;
          <span> {item.url}</span>
        </Link>
      ) : null}

      {/*NOTE 포트폴리오 설명란 */}
      <ModalTxtContent item={item} />
    </div>
  );
}
