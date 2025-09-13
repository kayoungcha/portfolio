'use client';

import Image from 'next/image';
import WorkTypeChip from './WorkTypeChip';
import WorkTitle from './WorkTitle';
import WorkTagChip from './WorkTagChip';
import { work } from '@/mockData/allData';
import { useEffect, useRef, useState } from 'react';
import Modal from '@/app/Modal';
import IconClose from '../../public/assets/icon_close.svg';

type Props = { item: work; index: number; work: string };

export default function WorkCard({ item, index, work }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    console.log({ modalOpen });
  }, [modalOpen]);

  const chipMerged = [
    ...item.skill.map((val) => ({ type: 'skill', value: val })),

    ...item.design.map((val) => ({ type: 'design', value: val })),
    ...item.keyFeatures.map((val) => ({
      type: 'keyFeatures',
      value: val,
    })),
  ];

  return (
    <>
      <article
        ref={cardRef}
        className={`group bg-background w-full lg:h-[700px] lg:max-h-[700px]
          h-[600px] max-h-[600px] rounded-[24px] shadow-xl overflow-hidden
          relative opacity-0 col-span-1 cursor-pointer ${
            item.type === 'app'
              ? 'md:col-span-1'
              : (item.type === 'web' && index === 0) || work === '웹'
                ? 'md:col-span-3'
                : 'md:col-span-2 '
          } ${show ? 'animate-fade-up-ani' : ''} hover:scale-[1.02]
          hover:shadow-2xl transition-all duration-300`}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={item.mainImg}
          alt={item.name + '메인 이미지'}
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
          <WorkTypeChip type={item.type}></WorkTypeChip>
          <span
            className="absolute inline-block right-[40px] top-[40px] font-medium
              text-[1.4rem] text-txt-tertiary-50"
          >
            {item.year}
          </span>
          <WorkTitle title={item.name}></WorkTitle>
          <p className="font-normal text-[1.4rem] text-txt-quaternary mb-[24px]">
            {item.desc}
          </p>
          {item.type !== 'app' ? (
            <div
              className="tag_area overflow-auto h-full max-h-[9rem]
                md:max-h-[12.8rem]"
            >
              <div className="skill flex gap-[1.2rem] flex-wrap mb-[12px]">
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
              <div className="design flex gap-[1.2rem] flex-wrap mb-[12px]">
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
              <div className="keyFeatures flex gap-[1.2rem] flex-wrap mb-[12px]">
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
              <div className="keyFeatures flex gap-[1.2rem] flex-wrap mb-[12px]">
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
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <article className="relative h-full">
          <button
            className="absolute block w-[32px] h-[32px] right-[-20px]
              top-[-20px] cursor-pointer hover:scale-[1.05] transition-transform
              duration-200"
            onClick={() => setModalOpen(false)}
          >
            <IconClose></IconClose>
          </button>
          <div
            className={`content_area h-full grid
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
                    alt={item.name + '메인 이미지 '}
                    fill
                    className="object-contain"
                  ></Image>
                </div>
              );
            })}
          </div> */}

            <div
              className={`iframe_wrap max-w-[320px] max-h-[700px] w-full h-full
                bg-txt-tertiary-50 ${loaded ? '' : 'animate-pulse'}
                overflow-auto`}
            >
              <iframe
                src="https://anidar-test.firebaseapp.com"
                className="h-full w-full"
                onLoad={() => setLoaded(true)}
              ></iframe>
            </div>
            <div className="content_desc">
              <h4>Anidar</h4>
            </div>
          </div>
        </article>
      </Modal>
    </>
  );
}
