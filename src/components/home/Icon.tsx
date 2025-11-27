import type React from "react";

export default function Icon({
    children,
    icon,
}: {
    children: React.ReactNode;
    icon: string;
}) {
    return (
        <>
            <button className="full flex flex-col gap-1 items-center hover:bg-gray100 active:bg-gray100 rounded-xl py-2">
                <img src={icon} className="w-13 h-13" />
                <span className="text-xs">{children}</span>
            </button>
        </>
    );
}
