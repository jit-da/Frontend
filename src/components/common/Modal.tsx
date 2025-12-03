import { useModalStore } from "@/stores/useModal";
import { twMerge } from "tailwind-merge";

export default function Modal({
    children,
    className,
    onClose,
}: {
    children: React.ReactNode;
    className: string;
    onClose?: () => void;
}) {
    const { closeModal } = useModalStore();
    const isMounted = useModalStore((state) => state.isMounted);

    return (
        <>
            <div
                className={`fixed top-0 w-full max-w-md h-screen z-9 duration-300 ${
                    isMounted ? "bg-black/50" : "bg-clear"
                }`}
                onClick={onClose ?? closeModal}
            >
                <div
                    className={twMerge(
                        `z-10 fixed top-1/2 w-[calc(100%-40px)] min-h-50 m-auto inset-x-0 max-w-[408px] translate-y-[-50%] bg-white justify-center rounded-2xl p-5 ease-in-out duration-300
                        ${
                            isMounted
                                ? "opacity-100"
                                : "translate-y-[1%] opacity-0"
                        }`,
                        className
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>
    );
}
