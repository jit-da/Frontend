export default function MenuListItem({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <li>
            <button
                className="w-[calc(100%-20px)] flex gap-2 items-center mx-2 p-3 rounded-lg hover:bg-gray100 active:bg-gray100 duration-100 ease-out"
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    );
}
