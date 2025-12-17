export default function CategoryListItem({
    children,
    select,
    setSelect,
}: {
    children: string;
    select: string;
    setSelect: (s: string) => void;
}) {
    return (
        <>
            <button
                className={`w-full text-start pl-5 py-2 duration-200 ${
                    select === children
                        ? "bg-white"
                        : "hover:bg-gray100 active:bg-gray100"
                }`}
                onClick={() => setSelect(children)}
            >
                {children}
            </button>
        </>
    );
}
