import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  text: string;
  icon?: ReactNode;
  className?: string;
};

export default function OutLineButton(props: Props) {
  return (
    <Link
      className={`group w-fit bg-background text-txt-tertiary border-outline-btn
        hover:bg-outline-btn hover:text-background flex cursor-pointer
        items-center justify-center gap-x-[4px] rounded-full border-[1px]
        px-[20px] py-[4px] text-[1.4rem] font-medium transition-all duration-200
        ${props.className ?? ''}`}
      href={'#worksSection'}
    >
      {props.text}
      {props.icon && (
        <span className="block animate-bounce group-hover:text-background">
          {props.icon}
        </span>
      )}
    </Link>
  );
}
