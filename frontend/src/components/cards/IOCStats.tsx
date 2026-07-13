interface Props {
  title: string;
  value: number;
  color: string;
}

export default function IOCStats({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="bg-[#132034] rounded-xl p-5 border border-[#243246]">
      <p className="text-gray-400">{title}</p>

      <h2 className={`text-4xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
}