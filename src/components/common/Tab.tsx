import { twMerge } from "tailwind-merge";
import HorizontalScroller from "./HorizontalScroller";

export default function Tab({
    list,
    select,
    setSelect,
    className,
}: {
    list: string[];
    select: string;
    setSelect: (c: string) => void;
    className?: string;
}) {
    return (
        <div className={twMerge(`relative overflow-hidden`, className)}>
            <HorizontalScroller className="px-2 w-full flex overflow-scroll border-b pt-2 border-gray200 bg-white">
                {list.map((v, i) => (
                    <button
                        key={i}
                        className="px-3 whitespace-nowrap"
                        onClick={() => setSelect(v)}
                    >
                        <div
                            className={`h-full border-b-2 flex items-end pb-2 border-clear duration-100 ease-in text-gray600 ${
                                v === select
                                    ? "pretendard-semibold text-gray1000 border-gray1000"
                                    : "hover:text-gray700 active:text-gray700 border-white"
                            }`}
                        >
                            {v}
                        </div>
                    </button>
                ))}
            </HorizontalScroller>
        </div>
    );
}
