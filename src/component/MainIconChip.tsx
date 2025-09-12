/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { CSSProperties, useEffect, useRef } from 'react';

type Props = {
  iconSrc: string;
  alt: string;
  position: { x: number; y: number };
  size: number;
  moreStyles?: CSSProperties;
};

export default function MainIconChip(props: Props) {
  // 아이콘 ref
  const chipRef = useRef<HTMLDivElement | null>(null);

  // 마우스 이벤트
  useEffect(() => {
    let targetX = 0,
      targetY = 0;
    let currentX = 0,
      currentY = 0;

    // 마우스 움직임에 따라
    function handleMouseMove(e: MouseEvent) {
      const rect = chipRef.current!.getBoundingClientRect();
      const iconX = rect.left + rect.width / 2;
      const iconY = rect.top + rect.height / 2;

      const dx = e.clientX - iconX;
      const dy = e.clientY - iconY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const strength = Math.pow(Math.max(0, (1000 - distance) / 1000), 2);
      targetX = -dx * strength * 0.3;
      targetY = -dy * strength * 0.5;
    }

    //아이콘 중간값에서 가까울때 애니메이션
    function animate() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      chipRef.current?.style.setProperty('--mx', `${currentX}px`);
      chipRef.current?.style.setProperty('--my', `${currentY}px`);

      requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={chipRef}
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% - ${props.position.x}px), calc(-50% - ${props.position.y}px))`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['--tx' as any]: `calc(-50% - ${props.position.x}px)`,
        ['--ty' as any]: `calc(-50% - ${props.position.y}px)`,
        ...props.moreStyles,
      }}
      className={`absolute bg-background shadow-icon-chip flex items-center
        justify-center rounded-[14px] ${props.size > 45 ? 'p-[4px]' : 'p-[8px]'}
        opacity-0 will-change-transform
        [transform:translate(var(--tx),var(--ty))_translate(var(--mx,0),var(--my,0))_scale(1)]
        transition-transform duration-200 ease-out `}
    >
      <Image
        className="block"
        src={props.iconSrc}
        alt={props.alt}
        width={props.size}
        height={props.size}
      />
    </div>
  );
}
