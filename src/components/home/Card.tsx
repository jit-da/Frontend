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
            <div className="flex flex-col text-sm">
                <div className="w-30 h-30 border border-gray200 rounded-xl"></div>
                <h4>{title}</h4>
                <h5 className="text-xs pretendard-light text-gray600">{sub}</h5>
                <p className="pretendard-semibold">
                    <span className="text-red-500">
                        {sale !== 0 && sale.toString() + "% "}
                    </span>
                    {(price * (1 - sale / 100)).toString()}원
                </p>
            </div>
        </>
    );
}
