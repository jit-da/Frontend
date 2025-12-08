import { GRADE_LIST } from "@/constants/mypage";

export default function Grade({ grade }: { grade: string }) {
    return (
        <button
            className={`relative mx-5 px-5 py-8 flex justify-between items-center rounded-2xl
                ${GRADE_LIST.find((i) => i.grade === grade)?.color}`}
        >
            <p className="absolute top-4 text-xs pretendard-light text-white">
                회원님의 등급은
            </p>
            <h3
                className={`text-xl pretendard-semibold ${
                    grade === "VVIP"
                        ? "bg-linear-to-b bg-clip-text from-[#ffdd6d] to-[#dd8500] text-transparent"
                        : "text-white"
                }`}
            >
                {grade}
            </h3>
            <p className="text-sm text-white">
                {GRADE_LIST.find((i) => i.grade === grade)?.benefit}
            </p>
            <div className="absolute bottom-4 w-[calc(100%-40px)] h-1 rounded-full bg-white/50" />
            <div className="absolute bottom-4 w-[calc((100%-40px)/100*65)] h-1 rounded-full bg-white" />
        </button>
    );
}
