import { format } from "date-fns";
import Button from "../common/Button";
import { ChevronUp, EllipsisVertical } from "lucide-react";
import { useState } from "react";

interface Product {
    name: string;
    sub: string;
    option: string[];
    price: number;
    sale: number;
    amount: number;
}

export default function Card({
    date,
    state,
    products,
    price,
    sale,
}: {
    date: Date;
    state: string;
    products: Product[];
    price: number;
    sale: number;
}) {
    const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);

    return (
        <>
            <div className="w-full bg-white rounded-xl p-5 shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
                <div className="w-full flex justify-between text-xs">
                    <span className="text-gray700 pretendard-medium">
                        {format(date, "yyyy년 MM월 dd일")}
                    </span>
                    <div
                        className={`px-2 py-1 text-white pretendard-light rounded-lg ${
                            state === "주문취소"
                                ? "bg-gray600"
                                : state === "배송완료" || state === "픽업완료"
                                ? "bg-main600"
                                : "bg-main500"
                        }`}
                    >
                        {state}
                    </div>
                </div>
                <ul className="flex flex-col gap-1">
                    {products.slice(0, 4).map((v, i) => (
                        <li key={i}>
                            <div className="-mb-2">
                                {v.name}{" "}
                                <span className="text-gray500">
                                    {v.amount}개
                                </span>
                            </div>
                            <span className="text-xs pretendard-light text-gray600">
                                {v.sub}
                                {v.option.length !== 0 &&
                                    " / " + v.option.join("/")}
                            </span>
                        </li>
                    ))}
                    {products.length > 4 && (
                        <>
                            <div
                                className={`overflow-hidden duration-200 ${
                                    isBoxOpen
                                        ? "max-h-100 opacity-100 ease-in"
                                        : "max-h-0 opacity-0 ease-out"
                                }`}
                            >
                                {products.slice(4).map((v, i) => (
                                    <li key={i}>
                                        <div className="-mb-2">
                                            {v.name}{" "}
                                            <span className="text-gray500">
                                                {v.amount}개
                                            </span>
                                        </div>
                                        <span className="text-xs pretendard-light text-gray600">
                                            {v.sub}
                                            {v.option.length !== 0 &&
                                                " / " + v.option.join("/")}
                                        </span>
                                    </li>
                                ))}
                            </div>
                            <button
                                className="w-full h-10 flex items-center justify-center text-gray500 hover:bg-gray100 active:bg-gray100 rounded-xl duration-100 ease-out"
                                onClick={() => setIsBoxOpen(!isBoxOpen)}
                            >
                                {isBoxOpen ? (
                                    <ChevronUp size={28} strokeWidth={1.5} />
                                ) : (
                                    <EllipsisVertical strokeWidth={1.5} />
                                )}
                            </button>
                        </>
                    )}
                </ul>
                <div className="w-full flex justify-between border-t border-gray1000 py-2 my-2">
                    <span className="text-xs pretendard-medium">결제 금액</span>
                    <div className="flex gap-1">
                        {price !== sale && state !== "주문취소" && (
                            <span className="text-xs text-gray500 line-through">
                                {price.toLocaleString("ko-KR")}원
                            </span>
                        )}
                        <span
                            className={`text-lg pretendard-semibold -mt-1.5 ${
                                state === "주문취소" && "line-through"
                            }`}
                        >
                            {sale.toLocaleString("ko-KR")}원
                        </span>
                    </div>
                </div>
                <Button>상세보기</Button>
            </div>
        </>
    );
}
