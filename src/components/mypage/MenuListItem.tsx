export default function MenuListItem({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <li>
            <button className="w-[calc(100%-20px)] flex gap-2 items-center mx-2 px-3 py-2 rounded-lg hover:bg-gray100 active:bg-gray100 duration-100 ease-out">
                {children}
            </button>
        </li>
    );
}
