import Sheet from "../common/Sheet";
import { STATE_LIST } from "@/constants/receipt";

export default function StateSheet({
    select,
    setSelect,
}: {
    select: string[];
    setSelect: (s: string[]) => void;
}) {
    const toggleHandler = (s: string) => {
        setSelect(
            select.includes(s) ? select.filter((i) => i !== s) : [...select, s]
        );
    };

    return (
        <>
            <Sheet>
                <h4 className="pretendard-semibold mb-2">주문 상태</h4>
                <div className="flex gap-3 flex-wrap">
                    {STATE_LIST.map((i) => (
                        <button
                            key={i.id}
                            className={`h-10 flex items-center text-sm border border-gray400 rounded-full px-4 duration-200 ${
                                select.includes(i.name)
                                    ? "bg-gray1000 text-white"
                                    : "hover:bg-gray100 active:bg-gray100"
                            }`}
                            onClick={() => toggleHandler(i.name)}
                        >
                            {i.name}
                        </button>
                    ))}
                </div>
            </Sheet>
        </>
    );
}
