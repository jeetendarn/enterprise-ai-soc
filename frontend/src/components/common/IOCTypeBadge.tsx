interface Props {
  type: string;
}

export default function IOCTypeBadge({ type }: Props) {
  return (
    <span className="bg-cyan-600 px-3 py-1 rounded-full text-xs">
      {type}
    </span>
  );
}