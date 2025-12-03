import { useModalStore } from "@/stores/useModal";
import Sheet from "../common/Sheet";
import { PERIOD_LIST } from "@/constants/receipt";

export default function PeriodSheet({
    select,
    setSelect,
    startDate,
    endDate,
}: {
    select: string;
    setSelect: (select: string) => void;
    startDate: string;
    endDate: string;
}) {
    const { openModal } = useModalStore();

    const toggleHandler = (s: string) => {
        setSelect(s === select ? "조회 기간" : s);
    };

    return (
        <>
            <Sheet>
                <h4 className="pretendard-semibold mb-2">조회 기간</h4>
                <div className="flex gap-3 flex-wrap">
                    {PERIOD_LIST.map((i) => (
                        <button
                            key={i.id}
                            className={`h-10 flex items-center text-sm border border-gray400 rounded-full px-4 duration-200 ${
                                select === i.name
                                    ? "bg-gray1000 text-white"
                                    : "hover:bg-gray100 active:bg-gray100"
                            }`}
                            onClick={() => toggleHandler(i.name)}
                        >
                            {i.name}
                        </button>
                    ))}
                    {select === "직접 설정" && (
                        <div className="w-full h-10 border border-gray400 rounded-full grid grid-cols-[4.75fr_0.5fr_4.75fr] text-center items-center">
                            <button
                                className="h-full"
                                onClick={() => openModal("startDate")}
                            >
                                {startDate}
                            </button>
                            -
                            <button
                                className="h-full"
                                onClick={() => openModal("endDate")}
                            >
                                {endDate}
                            </button>
                        </div>
                    )}
                </div>
            </Sheet>
        </>
    );
}
