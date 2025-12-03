import Button from "../common/Button";

export default function Card() {
    return (
        <>
            <div className="w-full bg-white rounded-xl p-5 shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
                <div className="w-full flex justify-between text-xs">
                    <span className="text-gray700 pretendard-medium">
                        2025년 11월 18일
                    </span>
                    <div className="px-2 py-1 text-white pretendard-light bg-main600 rounded-lg">
                        픽업완료
                    </div>
                </div>
                <ul className="flex flex-col gap-1">
                    <li>
                        <div className="-mb-2">
                            스텐파이프{" "}
                            <span className="text-gray500">100개</span>
                        </div>
                        <span className="text-xs pretendard-light text-gray600">
                            SUS304/SUS201 (1M)
                        </span>
                    </li>
                    <li>
                        <div className="-mb-2">
                            파이프 원형 롱소켓{" "}
                            <span className="text-gray500">120개</span>
                        </div>
                        <span className="text-xs pretendard-light text-gray600">
                            25mm
                        </span>
                    </li>
                </ul>
                <div className="w-full flex justify-between border-t border-gray1000 py-2 my-2">
                    <span className="text-xs pretendard-medium">결제 금액</span>
                    <span className="text-lg pretendard-semibold">
                        {(1764369).toLocaleString("ko-KR")}원
                    </span>
                </div>
                <Button>상세보기</Button>
            </div>
        </>
    );
}
