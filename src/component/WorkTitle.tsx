type Props = {
  title: string;
};

export default function workTitle(props: Props) {
  return <h3 className="font-bold text-[2.4rem] mb-[12px]">{props.title}</h3>;
}
