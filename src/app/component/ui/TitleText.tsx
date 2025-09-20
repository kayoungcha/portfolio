type Props = {
  title: string;
  styles?: string;
};

export default function TitleText(props: Props) {
  return (
    <h2
      className={`text-primary font-bold text-[3rem] sm:text-[3.4rem]
        lg:text-[3.6rem] text-center ${props.styles}`}
    >
      {props.title}
    </h2>
  );
}
