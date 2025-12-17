import { ChevronRight } from "lucide-react";

interface Category {
    middle_category: string;
    icon?: string;
    minor_category: string[];
}

export default function CategoryBox({
    category,
    ref,
}: {
    category: Category;
    ref: React.Ref<HTMLLIElement>;
}) {
    return (
        <li ref={ref} className="w-full flex flex-col p-2 mt-1 scroll-mt-28">
            <button className="-mt-3 px-3 py-2 flex gap-2 items-center rounded-xl hover:bg-gray100 active:bg-gray100 duration-100">
                <img src={category.icon} alt={category.middle_category} />
                {category.middle_category}
                <ChevronRight strokeWidth={1.5} className="text-gray500" />
            </button>

            {category.minor_category.map((v, i) => (
                <button
                    key={i}
                    className="text-sm px-3 py-2 flex rounded-lg hover:bg-gray100 active:bg-gray100 duration-100"
                >
                    {v}
                </button>
            ))}

            <hr className="mt-3 w-[calc(100%-20px)] mx-3 border-gray200" />
        </li>
    );
}
