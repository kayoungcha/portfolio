type Props = {
  title: string;
  moreStyles?: string;
};

export default function workTitle(props: Props) {
  return (
    <h3
      className={`font-bold text-[2.2rem] lg:text-[2.4rem] truncate
        ${props.moreStyles ?? props.moreStyles}`}
    >
      {props.title}
    </h3>
  );
}
