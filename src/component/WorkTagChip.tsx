type Props = { type: string; text: string; moreStyles?: string };

export default function WorkTagChip(props: Props) {
  return (
    <span
      className={`inline-block border-1 px-[0.8rem] rounded-[10px] text-[1.2rem]
        ${props.type === 'keyFeatures' ? 'text-works-background' : 'text-txt-tertiary/50'}
        ${props.type === 'design' ? 'bg-key-features-chip' : props.type === 'keyFeatures' ? 'bg-point-secondary' : 'bg-skill-chip'}
        ${props.type === 'design' ? 'border-outline-btn' : 'border-point-secondary'}
        ${props.moreStyles ?? ''}`}
    >
      {props.text}
    </span>
  );
}
