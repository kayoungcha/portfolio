import { ReactNode } from 'react';
// import IconWrite from '../assets/icon/icon_write.svg?react';

export type buttonProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
};

export default function FillButton(props: buttonProps) {
  return (
    <button
      className={`group bg-primary text-fill-btn-txt flex cursor-pointer
        items-center justify-center gap-x-[4px] rounded-[4px] px-[2rem] border-2
        border-[transparent] py-[0.4rem] text-[2rem] font-normal
        hover:bg-background hover:text-primary hover:border-primary
        transition-all duration-300 ${props.className ?? ''} `}
    >
      {props.text}
      {props.icon && (
        <span
          className="group-hover:scale-110 group-hover:translate-x-[8px]
            group-hover:translate-y-[-5px]"
        >
          {props.icon}
        </span>
      )}
    </button>
  );
}
