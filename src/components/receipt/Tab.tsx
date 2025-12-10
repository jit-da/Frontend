import { RECEIPT_TAB_LIST } from "@/constants/receipt";

export default function Tab({
    select,
    setSelect,
}: {
    select: string;
    setSelect: (s: string) => void;
}) {
    return (
        <>
            <nav
                className="relative top-15.5 w-full max-w-md h-10 bg-white px-5 grid grid-cols-2 pretendard-medium border-b border-gray200"
                style={{
                    gridTemplateColumns: `repeat(${RECEIPT_TAB_LIST.length}, 1fr)`,
                }}
            >
                {RECEIPT_TAB_LIST.map((i) => (
                    <button
                        key={i.id}
                        className={`flex justify-center items-center duration-200 ${
                            select !== i.name &&
                            "text-gray600 hover:text-gray700 active:text-gray700"
                        }`}
                        onClick={() => setSelect(i.name)}
                    >
                        {i.name}
                    </button>
                ))}
                <div
                    className="absolute bottom-0 h-0.5 bg-gray1000 duration-200"
                    style={{
                        width: `calc((100% - 40px) / ${RECEIPT_TAB_LIST.length})`,
                        left: `calc(20px + ${RECEIPT_TAB_LIST.findIndex(
                            (item) => item.name === select
                        )} * (100% - 40px) / ${RECEIPT_TAB_LIST.length})`,
                    }}
                ></div>
            </nav>
        </>
    );
}
