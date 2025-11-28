export default function Card({
    title,
    sub,
    price,
    sale = 0,
}: {
    title: string;
    sub: string;
    price: number;
    sale: number;
}) {
    return (
        <>
            <div className="w-30 flex flex-col">
                <div className="w-30 h-30 border border-gray200 rounded-xl mb-1"></div>
                <h4 className="w-full text-ellipsis line-clamp-1">{title}</h4>
                <h5 className="text-sm pretendard-light text-gray600 text-ellipsis line-clamp-1">
                    {sub}
                </h5>
                <p className="text-sm pretendard-semibold">
                    <span className="text-red-500">
                        {sale !== 0 && sale.toString() + "% "}
                    </span>
                    {(price * (1 - sale / 100)).toLocaleString("ko-KR")}원
                </p>
            </div>
        </>
    );
}
