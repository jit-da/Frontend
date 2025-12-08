export default function ButtonListItem({
    name,
    amount,
    children,
}: {
    name: string;
    amount: string;
    children: React.ReactNode;
}) {
    return (
        <li className="flex-1">
            <button className="w-full flex flex-col items-center hover:bg-gray100 active:bg-gray100 rounded-xl py-2 duration-100 ease-out">
                {children}
                <p className="pretendard-light text-sm mt-1">{name}</p>
                <span className="pretendard-medium text-sm text-main600">
                    {amount}
                </span>
            </button>
        </li>
    );
}
