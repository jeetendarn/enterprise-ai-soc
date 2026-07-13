interface Props {
  confidence: number;
}

export default function IOCConfidenceBadge({ confidence }: Props) {
  const color =
    confidence > 90
      ? "text-red-400"
      : confidence > 70
      ? "text-orange-400"
      : "text-green-400";

  return (
    <span className={`${color} font-bold`}>
      {confidence}%
    </span>
  );
}