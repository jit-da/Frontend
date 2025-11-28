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
    return (
        <>
            <div className="fixed w-full bottom-40">
                <div className="relative z-2 w-full max-w-md">
                    <button
                        className="floating-btn duration-100 flex flex-col bg-gray1000 hover:bg-gray900 ease-out active:bg-gray900 text-white"
                        onClick={onClick}
                    >
                        {icon}
                        <span className="text-xs pretendard-light mt-1">
                            {children}
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
