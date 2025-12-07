'use client';

import Image from 'next/image';
import WorkTypeChip from './WorkTypeChip';
import WorkTitle from './WorkTitle';
import WorkTagChip from './WorkTagChip';
import { useEffect, useRef, useState } from 'react';
import Modal from '@/app/component/sections/Modal';
import IconClose from '../../../../public/assets/icon_close.svg';
import React from 'react';
import ModalContentWeb from './ModalContentWeb';
import ModalContentApp from './ModalContentApp';
import { ProjectData } from '../../api/works/route';

type Props = { item: ProjectData; index: number; work: string };

export default function WorkCard({ item, index, work }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
        className={`group bg-background w-[calc(100%)] lg:h-[700px]
          lg:max-h-[700px] h-[600px] max-h-[600px] rounded-[24px] shadow-xl
          overflow-hidden relative opacity-0 dark:shadow-[#5c5c5c28] ${
            item.type === 'web' && (index === 0 || work === 'web')
              ? 'lg:col-span-3 md:col-span-2'
              : item.type === 'personalWork' &&
                  (index === 0 || work === 'personalWork')
                ? 'lg:col-span-3 md:col-span-2'
                : (item.type === 'web' && index !== 0) ||
                    (item.type === 'personalWork' && index !== 0)
                  ? 'lg:col-span-2'
                  : 'col-span-1'
          } cursor-pointer ${show ? 'animate-fade-up-ani' : ''}
          hover:scale-[1.02] hover:shadow-2xl will-change-transform
          transition-all duration-300`}
        onClick={() => setModalOpen(true)}
      >
        <div
          className="mask_area w-full h-full"
          style={{
            clipPath: 'inset(2px round 24px)', // border-radius 24px과 동일하게
          }}
        >
          <Image
            src={item.img}
            alt={item.title + '메인 이미지'}
            fill
            className="w-full block max-h-[400px] h-full absolute z-1
              object-cover object-top scale-100 group-hover:scale-110
              translate-z-0 transition-all will-change-transform duration-300
              backface-hidden"
          />
        </div>
        <div
          className="box w-full h-[300px] lg:h-[350px] bg-background absolute
            left-0 bottom-0 z-50 px-[32px] py-[32px] lg:px-[40px] lg:py-[38px]
            shadow-[3px_-4px_10px_1px_rgba(0,0,0,0.25)]"
        >
          <WorkTypeChip
            type={item.type}
            moreStyles="mb-[10px] lg:mb-[24px]"
          ></WorkTypeChip>
          <WorkTitle
            title={item.title}
            moreStyles="mb-[4px] lg:mb-[12px]"
          ></WorkTitle>
          <p
            className="font-normal text-[1.4rem] text-txt-quaternary mb-[24px]
              line-clamp-2"
          >
            {item.description}
          </p>
          <div
            className="tag_area overflow-auto h-full max-h-[9.5rem]
              lg:max-h-[11rem]"
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
          {/* )} */}
        </div>
      </article>

      {/* NOTE 모달 */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <article
          className="relative w-full h-full p-[24px] sm:p-[32px]
            overflow-hidden"
        >
          <button
            className="absolute block w-[32px] h-[32px] right-[8px] top-[8px]
              bg-foreground/30 backdrop-blur-md cursor-pointer hover:scale-[1.2]
              overflow-hidden rounded-2xl z-999 hover:rotate-180
              transition-transform duration-300"
            onClick={() => setModalOpen(false)}
          >
            <IconClose></IconClose>
          </button>
          {item.type === 'app' || item.type === 'publishing' ? (
            <ModalContentApp item={item} />
          ) : (
            <ModalContentWeb item={item} />
          )}
        </article>
      </Modal>
    </>
  );
}
