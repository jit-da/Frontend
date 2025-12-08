import { Handbag, Heart } from "lucide-react";

export default function Card({
    title,
    sub,
    price,
    sale = 0,
    like = false,
}: {
    title: string;
    sub: string;
    price: number;
    sale: number;
    like?: boolean;
}) {
    return (
        <>
            <button className="w-full flex flex-row gap-3 items-center text-start">
                <div className="w-30 h-30 min-w-30 border border-gray200 rounded-xl mb-1" />
                <div className="w-full">
                    <h4>{title}</h4>
                    <h5 className="text-sm text-gray600 -mt-1">{sub}</h5>
                    <p className="pretendard-semibold">
                        <span className="text-red-500">
                            {sale !== 0 && sale.toString() + "% "}
                        </span>
                        {(price * (1 - sale / 100)).toLocaleString("ko-KR")}원
                        {sale !== 0 && (
                            <del className="ml-1 text-gray500 pretendard-regular text-xs">
                                {price}원
                            </del>
                        )}
                    </p>
                    <div className="w-full mt-1 flex gap-3 justify-end">
                        <Handbag strokeWidth={1.5} />
                        <Heart
                            strokeWidth={1.5}
                            className={like ? "text-red-500 fill-current" : ""}
                        />
                    </div>
                </div>
            </button>
        </>
    );
}
