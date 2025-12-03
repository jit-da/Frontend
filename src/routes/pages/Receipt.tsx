import Gnb from "@/components/common/Gnb";
import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import Tab from "@/components/common/Tab";
import Card from "@/components/receipt/Card";
import DateModal from "@/components/receipt/DateModal";
import PeriodSheet from "@/components/receipt/PeriodSheet";
import StateSheet from "@/components/receipt/StateSheet";
import { RECEIPT_LIST } from "@/constants/receipt";
import { useModalStore } from "@/stores/useModal";
import { ChevronDown, RotateCcw } from "lucide-react";
import { useState } from "react";
import { format, subMonths } from "date-fns";
import TopButton from "@/components/common/TopButton";

export default function Receipt() {
    const [tab, setTab] = useState<string>(RECEIPT_LIST[0].name);
    const [period, setPeriod] = useState<string>("조회 기간");
    const [state, setState] = useState<string[]>([]);
    const today = new Date();
    const [startDate, setStartDate] = useState(() => {
        return format(subMonths(today, 1), "yyyy년 MM월 dd일");
    });
    const [endDate, setEndDate] = useState(() => {
        return format(today, "yyyy년 MM월 dd일");
    });

    const rollback = period !== "조회 기간" || state.length !== 0;
    const openName = useModalStore((state) => state.openName);
    const { openModal } = useModalStore();

    const filterRollbackHandler = () => {
        setPeriod("조회 기간");
        setStartDate(format(subMonths(today, 1), "yyyy년 MM월 dd일"));
        setEndDate(format(today, "yyyy년 MM월 dd일"));
        setState([]);
    };

    return (
        <>
            <Header cart>주문내역</Header>
            <Tab select={tab} setSelect={setTab} />
            <div className="relative top-15.5 w-full flex flex-col gap-3 max-w-md min-h-20 bg-white px-5 py-3 border-b border-gray200">
                <SearchBar>
                    {RECEIPT_LIST.find((i) => i.name === tab)?.placeholder ??
                        ""}
                </SearchBar>
                <div className="flex gap-3 flex-wrap">
                    {rollback && (
                        <button
                            className="h-10 flex items-center text-sm border border-gray400 rounded-full px-4 duration-200 hover:bg-gray100 active:bg-gray100"
                            onClick={() => filterRollbackHandler()}
                        >
                            <RotateCcw strokeWidth={1.5} size={16} />
                        </button>
                    )}
                    <button
                        className={`h-10 flex items-center text-sm border border-gray400 rounded-full pl-4 pr-3 duration-200 ${
                            period !== "조회 기간"
                                ? "bg-gray1000 text-white"
                                : "hover:bg-gray100 active:bg-gray100"
                        }`}
                        onClick={() => openModal("조회 기간")}
                    >
                        {period === "직접 설정"
                            ? `${startDate} - ${endDate}`
                            : period}
                        <ChevronDown strokeWidth={1.5} size={20} />
                    </button>
                    <button
                        className={`h-10 flex items-center text-sm border border-gray400 rounded-full pl-4 pr-3 duration-200 ${
                            state.length !== 0
                                ? "bg-gray1000 text-white"
                                : "hover:bg-gray100 active:bg-gray100"
                        }`}
                        onClick={() => openModal("주문 상태")}
                    >
                        {state.length === 0
                            ? "주문 상태"
                            : state.length === 1
                            ? state[0]
                            : state[0] + ` 외 ${state.length - 1}`}
                        <ChevronDown strokeWidth={1.5} size={20} />
                    </button>
                </div>
            </div>

            <div className="full bg-gray100 p-5 pt-20.5 pb-23 flex flex-col gap-3">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <Gnb />
            <TopButton />
            {openName === "조회 기간" && (
                <PeriodSheet
                    select={period}
                    setSelect={setPeriod}
                    startDate={startDate}
                    endDate={endDate}
                />
            )}
            {openName === "주문 상태" && (
                <StateSheet select={state} setSelect={setState} />
            )}
            {openName === "startDate" && (
                <DateModal value={startDate} setValue={setStartDate} />
            )}
            {openName === "endDate" && (
                <DateModal value={endDate} setValue={setEndDate} />
            )}
        </>
    );
}
