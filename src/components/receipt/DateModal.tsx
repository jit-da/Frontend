import Modal from "../common/Modal";
import { DayPicker } from "react-day-picker";
import { parse, format } from "date-fns";
import "react-day-picker/dist/style.css";
import { ko } from "date-fns/locale";
import { useModalStore } from "@/stores/useModal";

export default function DateModal({
    value,
    setValue,
}: {
    value: string;
    setValue: (value: string) => void;
}) {
    const { openModal } = useModalStore();
    const selectedDate = parse(value, "yyyy년 MM월 dd일", new Date());

    const selectHandler = (date: Date | undefined) => {
        if (!date) return;
        setValue(format(date, "yyyy년 MM월 dd일"));
        openModal("조회 기간");
    };

    return (
        <>
            <Modal className="flex" onClose={() => openModal("조회 기간")}>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    defaultMonth={selectedDate}
                    onSelect={selectHandler}
                    captionLayout="dropdown"
                    fromYear={2025}
                    toYear={new Date().getFullYear()}
                    locale={ko}
                    navLayout="around"
                    classNames={{
                        selected: "bg-main500 text-white rounded-[10px]",
                        today: "text-main500 font-semibold",
                    }}
                    style={
                        {
                            "--rdp-accent-color": "var(--color-main500)",
                        } as React.CSSProperties
                    }
                />
            </Modal>
        </>
    );
}
