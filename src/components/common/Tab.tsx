import { RECEIPT_LIST } from "@/constants/receipt";

export default function Tab({
    select,
    setSelect,
}: {
    select: string;
    setSelect: (s: string) => void;
}) {
    return (
        <>
            <nav className="relative top-15.5 w-full max-w-md h-10 bg-white px-5 grid grid-cols-2 pretendard-medium border-b border-gray200">
                {RECEIPT_LIST.map((i) => (
                    <button
                        key={i.id}
                        className={`flex justify-center items-center duration-200 ${
                            select !== i.name &&
                            "text-gray500 hover:text-gray600 active:text-gray600"
                        }`}
                        onClick={() => setSelect(i.name)}
                    >
                        {i.name}
                    </button>
                ))}
                <div
                    className="absolute bottom-0 h-0.5 bg-gray1000 duration-200"
                    style={{
                        width: "calc((100% - 40px) / 2)",
                        left:
                            select === RECEIPT_LIST[0].name
                                ? "20px"
                                : "calc((100% - 40px) / 2 + 20px)",
                    }}
                ></div>
            </nav>
        </>
    );
}
