type Props = { type: string; text: string; moreStyles?: string };

export default function WorkTagChip(props: Props) {
  return (
    <span
      className={`inline-block border-1 dark:border-2 px-[0.8rem] rounded-[10px]
        text-[1.3rem] w-fit h-fit ${
          props.type === 'keyFeatures'
            ? 'text-works-background dark:text-skill-chip/70'
            : 'text-txt-tertiary/50 dark:text-foreground/90'
        } ${
          props.type === 'design'
            ? 'bg-key-features-chip dark:bg-outline-btn/50'
            : props.type === 'keyFeatures'
              ? 'bg-point-secondary dark:bg-point-secondary/30'
              : 'bg-skill-chip dark:bg-point-secondary/50'
        } ${
          props.type === 'design'
            ? 'border-outline-btn dark:border-key-features-chip'
            : 'border-point-secondary dark:border-point-secondary'
        } ${props.moreStyles ?? ''}`}
    >
      {props.text}
    </span>
  );
}
