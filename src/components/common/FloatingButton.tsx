import useScroll from "@/hooks/useScroll";
import type React from "react";

export default function FloatingButton({
    icon,
    children,
    onClick,
}: {
    icon: React.ReactNode;
    children: React.ReactNode;
    onClick: () => void;
}) {
    const scroll = useScroll();

    return (
        <>
            <div className="fixed w-full bottom-36">
                <div className="relative z-2 w-full max-w-md">
                    <button
                        className={`floating-btn flex flex-col bg-gray1000 text-white ${
                            scroll > 100 && "-translate-y-17"
                        }`}
                        onClick={onClick}
                    >
                        {icon}
                        <span className="text-[10px] pretendard-light">
                            {children}
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
