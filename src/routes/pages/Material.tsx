import Gnb from "@/components/common/Gnb";
import Header from "@/components/common/Header";
import Tab from "@/components/common/Tab";
import { useEffect, useState } from "react";
import { MATERIAL_CATEGORY } from "@/constants/home";
import { LIKE_LIST } from "@/test/like";
import Card from "@/components/common/Card";
import TopButton from "@/components/common/TopButton";

export default function Material() {
    const [middle, setMiddle] = useState("전체");
    const [minor, setMior] = useState("전체");
    const middleList = MATERIAL_CATEGORY.map((i) => i.middle_category);
    const [minorList, setMinorList] = useState<string[]>([]);

    useEffect(() => {
        const next = MATERIAL_CATEGORY.find(
            (i) => i.middle_category === middle
        )!.minor_category;

        if (next.length === 0) {
            const timer = setTimeout(() => setMinorList([]), 200);
            return () => clearTimeout(timer);
        }

        queueMicrotask(() => setMinorList(["전체", ...next]));
    }, [middle]);

    return (
        <>
            <Header back search cart>
                자재
            </Header>
            <div className="full pt-15.5 pb-18">
                <Tab
                    list={middleList}
                    select={middle}
                    setSelect={setMiddle}
                    className="z-1"
                />
                <Tab
                    list={minorList}
                    select={minor}
                    setSelect={setMior}
                    className={`text-sm duration-200 ease-in-out z-0 ${
                        middle === "전체"
                            ? "max-h-0 opacity-0 overflow-hidden -translate-y-full"
                            : "max-h-100 opacity-100 translate-y-0"
                    }`}
                />
                <div className="full min-h-full px-5 py-3 flex flex-col gap-3">
                    <span className="text-sm text-gray700">총 10개</span>
                    {Array(10)
                        .fill(null)
                        .flatMap(() => LIKE_LIST[0])
                        .map((v, i) => (
                            <Card
                                key={i}
                                title={v.name}
                                sub={v.sub}
                                price={v.price}
                                sale={v.sale}
                            />
                        ))}
                </div>
            </div>
            <TopButton />
            <Gnb />
        </>
    );
}
