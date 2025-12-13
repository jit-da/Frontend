import { MATERIAL_CATEGORY } from "@/constants/home";
import CategoryListItem from "./CategoryListItem";

export default function CategoryList({
    select,
    setSelect,
}: {
    select: string;
    setSelect: (s: string) => void;
}) {
    return (
        <div className="fixed w-30 h-full bg-gray200 flex flex-col">
            {MATERIAL_CATEGORY.slice(1).map((v, i) => (
                <CategoryListItem key={i} select={select} setSelect={setSelect}>
                    {v.middle_category}
                </CategoryListItem>
            ))}
        </div>
    );
}
