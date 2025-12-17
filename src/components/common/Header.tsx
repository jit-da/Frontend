import { ChevronLeft, Search, Handbag } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header({
    children,
    back,
    logo,
    search,
    cart,
    white,
}: {
    children?: React.ReactNode;
    back?: boolean;
    logo?: boolean;
    search?: boolean;
    cart?: boolean;
    white?: boolean;
}) {
    const navigate = useNavigate();

    return (
        <>
            <header
                className={`z-2 fixed top-0 w-full max-w-md h-15.5 center backdrop-blur-[2px] ${
                    white ? "bg-white" : "bg-white/85"
                }`}
            >
                <div className="absolute left-5">
                    {back && (
                        <button
                            className="header-btn -ml-2"
                            onClick={() => navigate(-1)}
                        >
                            <ChevronLeft size={28} strokeWidth={1.5} />
                        </button>
                    )}
                    {logo && (
                        <span className="gmarket-sans text-[32px] text-main500">
                            ㅈㄷ
                        </span>
                    )}
                </div>
                <h1 className="pretendard-semibold">{children}</h1>
                <div className="absolute right-3 flex">
                    {search && (
                        <button className="header-btn">
                            <Search strokeWidth={1.5} />
                        </button>
                    )}
                    {cart && (
                        <button className="header-btn">
                            <Handbag strokeWidth={1.5} />
                        </button>
                    )}
                </div>
            </header>
        </>
    );
}
