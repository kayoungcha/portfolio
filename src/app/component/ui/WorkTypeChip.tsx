type Props = {
  type: string;
  moreStyles?: string;
};

export default function WorkTypeChip(props: Props) {
  return (
    <span
      className={`inline-block text-[1.4rem] px-[2rem] py-[2px] text-background
        rounded-[10px] font-medium
        ${props.type === 'web' ? 'bg-primary' : props.type === 'app' || props.type === 'publishing' ? 'bg-point' : 'bg-point-secondary'}
        ${props.moreStyles ?? props.moreStyles}`}
    >
      {props.type.toLocaleLowerCase() === 'web'
        ? '반응형 Web'
        : props.type.toLocaleLowerCase() === 'app' ||
            props.type.toLocaleLowerCase() === 'publishing'
          ? '모바일 App'
          : '개인 작업'}
    </span>
  );
}
