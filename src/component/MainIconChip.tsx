import Image from 'next/image';

type Props = {
  iconSrc: string;
  alt: string;
  position: { x: number; y: number };
  size: number;
};

export default function MainIconChip(props: Props) {
  return (
    <div
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% - ${props.position.x}px), calc(-50% - ${props.position.y}px))`,
      }}
      className={`absolute bg-background shadow-icon-chip flex items-center
        justify-center rounded-[14px]
        ${props.size > 45 ? 'p-[4px]' : 'p-[8px]'}`}
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
