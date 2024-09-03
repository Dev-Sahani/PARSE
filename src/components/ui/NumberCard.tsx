import { BiSolidLike } from "react-icons/bi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { LuActivity } from "react-icons/lu";
import { MdCrisisAlert } from "react-icons/md";

type Props = {
  title: string;
  percentage: number;
  number: number | string;
  type: "like" | "currency" | "activity" | "sale" | "other";
};

export default function NumberCard({ title, number, percentage, type }: Props) {
  return (
    <div className="min-w-56 min-h-28 bg-primary p-3 text-background flex flex-col gap-4">
      <h6 className="text-sm font-light">{title}</h6>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center">
          {getIcon(type)}
          <h3 className="text-3xl">{number}</h3>
        </div>
        <div className="w-full h-1 bg-secondary">
          <div className="h-1 bg-accent" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  );
}

function getIcon(type: Props["type"]) {
  switch (type) {
    case "like":
      return <BiSolidLike className="h-10 w-10" />;
    case "currency":
      return <MdOutlineCurrencyRupee className="h-10 w-10" />;
    case "activity":
      return <LuActivity className="h-10 w-10" />;
    case "sale":
      return <MdCrisisAlert className="h-10 w-10" />;
    case "other":
      return <p className="h-10 w-10">O</p>;
    default:
      return <p>default</p>;
  }
}
