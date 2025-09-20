import React from 'react';

type Props = {
  firstTxt?: string;
  title: string;
  moreStyles?: string;
};

export default function ModalSubTitle({ firstTxt, title, moreStyles }: Props) {
  return (
    <h6
      className={`text-txt-quaternary font-bold text-[1.45rem] mb-[8px]
        ${moreStyles ?? moreStyles}`}
    >
      {firstTxt && <span className="text-primary/70">{firstTxt}</span>}
      {title}
    </h6>
  );
}
