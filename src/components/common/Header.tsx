import { ChevronLeft, Search, Handbag } from "lucide-react";

export default function Header({
    children,
    back,
    logo,
    search,
    cart,
}: {
    children?: React.ReactNode;
    back?: boolean;
    logo?: boolean;
    search?: boolean;
    cart?: boolean;
}) {
    return (
        <>
            <header className="z-2 fixed w-full max-w-md h-15.5 flex justify-center items-center bg-white/85 backdrop-blur-[2px]">
                <div className="absolute left-5">
                    {back && <ChevronLeft size={28} strokeWidth={1.5} />}
                    {logo && (
                        <span className="gmarket-sans text-[32px] text-main500">
                            ㅈㄷ
                        </span>
                    )}
                </div>
                <h1>{children}</h1>
                <div className="absolute right-3 flex">
                    {search && (
                        <button className="w-10 h-10 flex justify-center items-center hover:bg-gray100 active:bg-gray100 duration-100 ease-out rounded-lg">
                            <Search strokeWidth={1.5} />
                        </button>
                    )}
                    {cart && (
                        <button className="w-10 h-10 flex justify-center items-center hover:bg-gray100 active:bg-gray100 duration-100 ease-out rounded-lg">
                            <Handbag strokeWidth={1.5} />
                        </button>
                    )}
                </div>
            </header>
        </>
    );
}
