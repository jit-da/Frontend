import CategoryBox from "@/components/category/CategoryBox";
import CategoryList from "@/components/category/CategoryList";
import Header from "@/components/common/Header";
import Tab from "@/components/receipt/Tab";
import { useEffect, useRef, useState } from "react";
import { MATERIAL_CATEGORY } from "@/constants/home";
import TopButton from "@/components/common/TopButton";

export default function Category() {
    const [tab, setTab] = useState<string>("자재");
    const [category, setCategory] = useState<string>(
        MATERIAL_CATEGORY[1].middle_category
    );
    const categoryRefs = useRef<Record<string, HTMLLIElement | null>>({});

    useEffect(() => {
        const target = categoryRefs.current[category];

        target?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [category]);

    return (
        <>
            <Header search cart white>
                카테고리
            </Header>
            <Tab
                tabList={["자재", "마감재", "페인트"]}
                select={tab}
                setSelect={setTab}
                className="fixed top-15.5"
            />
            <CategoryList select={category} setSelect={setCategory} />
            <ul className="ml-30 mt-25.5 pb-16 flex flex-col pt-2">
                {MATERIAL_CATEGORY.slice(1).map((v, i) => (
                    <CategoryBox
                        key={i}
                        category={v}
                        ref={(el) => {
                            categoryRefs.current[v.middle_category] = el;
                        }}
                    />
                ))}
            </ul>
            <TopButton />
        </>
    );
}
