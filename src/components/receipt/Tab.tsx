import { twMerge } from "tailwind-merge";

export default function Tab({
    tabList,
    select,
    setSelect,
    className,
}: {
    tabList: string[];
    select: string;
    setSelect: (s: string) => void;
    className?: string;
}) {
    return (
        <>
            <nav
                className={twMerge(
                    "relative top-15.5 w-full max-w-md h-10 bg-white px-5 grid grid-cols-2 pretendard-medium border-b border-gray200",
                    className
                )}
                style={{
                    gridTemplateColumns: `repeat(${tabList.length}, 1fr)`,
                }}
            >
                {tabList.map((v, i) => (
                    <button
                        key={i}
                        className={`flex justify-center items-center duration-200 ${
                            select !== v &&
                            "text-gray600 hover:text-gray700 active:text-gray700"
                        }`}
                        onClick={() => setSelect(v)}
                    >
                        {v}
                    </button>
                ))}
                <div
                    className="absolute bottom-0 h-0.5 bg-gray1000 duration-200"
                    style={{
                        width: `calc((100% - 40px) / ${tabList.length})`,
                        left: `calc(20px + ${tabList.findIndex(
                            (item) => item === select
                        )} * (100% - 40px) / ${tabList.length})`,
                    }}
                ></div>
            </nav>
        </>
    );
}
