import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "black" | "main" | "yellow" | "white" | "gray";
    icon?: string;
    className?: string;
}

export default function Button({
    color = "black",
    icon,
    children,
    disabled,
    className,
    ...props
}: ButtonProps) {
    return (
        <>
            <button
                className={twMerge(
                    `h-13 w-full rounded-xl duration-200 ease-in-out ${
                        disabled
                            ? "bg-gray200 text-gray500 cursor-default"
                            : color === "black"
                            ? "bg-gray1000 hover:bg-gray900 active:bg-gray900 text-white"
                            : color === "main"
                            ? "bg-main500 hover:bg-main600 active:bg-main600 text-white"
                            : color === "yellow"
                            ? "cursor-pointer bg-[#F9E95A] hover:bg-[#EFDE3E] active:bg-[#EFDE3E]"
                            : color === "white"
                            ? "border-gray300 hover:bg-gray100 active:bg-gray100 border bg-white"
                            : "bg-gray200 text-gray1000 hover:bg-gray300 active:bg-gray300"
                    } `,
                    className
                )}
                {...props}
            >
                <div className="flex items-center justify-center gap-2">
                    {icon && <img src={icon} alt="" />}
                    {children}
                </div>
            </button>
        </>
    );
}
