import React from 'react';

type Props = {
  title: string;
  moreStyles?: string;
};

export default function ModalSubTitle({ title, moreStyles }: Props) {
  return (
    <h6
      className={`text-txt-quaternary font-bold text-[1.4rem] mb-[8px]
        ${moreStyles ?? moreStyles}`}
    >
      {title}
    </h6>
  );
}
