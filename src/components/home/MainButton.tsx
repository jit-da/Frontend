import { twMerge } from "tailwind-merge";

export default function MainButton({
    title,
    sub,
    img,
    className,
}: {
    title: string;
    sub: string;
    img: string;
    className?: string;
}) {
    return (
        <>
            <button
                className={twMerge(
                    "w-full h-50 bg-gray100 hover:bg-gray200 active:bg-gray200 rounded-2xl duration-100 ease-out flex flex-col justify-between text-left pb-1",
                    className
                )}
            >
                <div className="p-5 pb-0">
                    <h1 className="text-xl pretendard-semibold">{title}</h1>
                    <h2 className="text-xs text-gray600">{sub}</h2>
                </div>
                <img src={img} className="opacity-85" />
            </button>
        </>
    );
}
