export default function Icon({
    children,
    icon,
}: {
    children: string;
    icon: string;
}) {
    return (
        <>
            <button className="full flex flex-col gap-1 items-center hover:bg-gray100 active:bg-gray100 duration-100 ease-out rounded-xl py-2">
                <img src={icon} alt={children} className="w-13 h-13" />
                <span className="text-xs">{children}</span>
            </button>
        </>
    );
}
