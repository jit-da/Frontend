import { ChevronRight } from "lucide-react";

export default function Progress() {
    return (
        <div className="px-5 py-3">
            <div className="flex justify-between">
                주문/배송 조회
                <button className="text-sm text-gray600">전체보기</button>
            </div>
            <ul className="w-full flex justify-between items-center text-gray500 my-2 px-2">
                <li className="flex flex-col items-center">
                    <p className="pretendard-semibold text-xl">0</p>
                    <span className="text-xs">주문접수</span>
                </li>
                <li>
                    <ChevronRight strokeWidth={1.5} />
                </li>
                <li className="flex flex-col items-center">
                    <p className="pretendard-semibold text-xl">0</p>
                    <span className="text-xs">결제완료</span>
                </li>
                <li>
                    <ChevronRight strokeWidth={1.5} />
                </li>
                <li className="flex flex-col items-center">
                    <p className="pretendard-semibold text-xl">0</p>
                    <span className="text-xs">상품준비중</span>
                </li>
                <li>
                    <ChevronRight strokeWidth={1.5} />
                </li>
                <li className="flex flex-col items-center">
                    <p className="pretendard-semibold text-xl">0</p>
                    <span className="text-xs">배송·픽업중</span>
                </li>
                <li>
                    <ChevronRight strokeWidth={1.5} />
                </li>
                <li className="flex flex-col items-center text-gray1000">
                    <p className="pretendard-semibold text-xl">3</p>
                    <span className="text-xs">인수완료</span>
                </li>
            </ul>
        </div>
    );
}
