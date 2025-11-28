import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function HorizontalScroller({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const target = ref.current;
        if (!target) return;

        let isDown = false,
            startX = 0,
            scrollLeft = 0;

        const onWheel = (e: WheelEvent) => {
            target.scrollLeft += e.deltaY;
            e.preventDefault();
        };
        const onDown = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX;
            scrollLeft = target.scrollLeft;
            target.style.cursor = "grabbing";
        };
        const onMove = (e: MouseEvent) => {
            if (isDown) target.scrollLeft = scrollLeft - (e.pageX - startX);
        };
        const onUp = () => {
            isDown = false;
            target.style.cursor = "grab";
        };

        target.addEventListener("wheel", onWheel, { passive: false });
        target.addEventListener("mousedown", onDown);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);

        return () => {
            target.removeEventListener("wheel", onWheel);
            target.removeEventListener("mousedown", onDown);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={twMerge("flex overflow-x-auto touch-pan-x", className)}
            style={{ WebkitOverflowScrolling: "touch" }}
        >
            {children}
        </div>
    );
}
