type Props = { title: string };

export const Title = ({ title }: Props) => {
  return <h3 className="mb-2 text-sm font-semibold"> ~/ {title}</h3>;
};
