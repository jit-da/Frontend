import Header from "@/components/common/Header";
import MainButton from "@/components/home/MainButton";
import Icon from "@/components/home/Icon";
import Gnb from "@/components/common/Gnb";
import FloatingButton from "@/components/common/FloatingButton";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useState } from "react";
import Card from "@/components/home/Card";
import HorizontalScroller from "@/components/common/HorizontalScroller";
import {
    MAIN_BUTTON_LIST,
    HEAVY_EQUIPMENT_LIST,
    PHONE_NUMBER,
} from "@/constants/home";
import { RECOMMEND_PRODUCTS_LIST } from "@/test/recommend";
import { Link } from "react-router";

export default function Home() {
    const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);

    return (
        <>
            <Header logo search cart />
            <div className="full pt-15.5 pb-18">
                <div className="grid grid-cols-2 gap-3 px-5 py-2">
                    <Link to="/material">
                        <MainButton
                            title={MAIN_BUTTON_LIST[0].title}
                            sub={MAIN_BUTTON_LIST[0].sub}
                            img={MAIN_BUTTON_LIST[0].src}
                        />
                    </Link>
                    <MainButton
                        title={MAIN_BUTTON_LIST[1].title}
                        sub={MAIN_BUTTON_LIST[1].sub}
                        img={MAIN_BUTTON_LIST[1].src}
                    />
                    <MainButton
                        className="col-span-2 w-full h-22 flex-row"
                        title={MAIN_BUTTON_LIST[2].title}
                        sub={MAIN_BUTTON_LIST[2].sub}
                        img={MAIN_BUTTON_LIST[2].src}
                    />

                    <div className="col-span-2 w-full pt-2">
                        <h3 className="pretendard-medium">중장비 대여</h3>
                        <div className="grid grid-cols-5 mt-1">
                            {HEAVY_EQUIPMENT_LIST.slice(0, 5).map((i) => (
                                <Icon icon={i.src} key={i.id}>
                                    {i.name}
                                </Icon>
                            ))}
                        </div>
                        <div
                            className={`overflow-hidden duration-200 ${
                                isBoxOpen
                                    ? "max-h-100 opacity-100 ease-in"
                                    : "max-h-0 opacity-0 ease-out"
                            }`}
                        >
                            <div className="grid grid-cols-5">
                                {HEAVY_EQUIPMENT_LIST.slice(5, 12).map((i) => (
                                    <Icon icon={i.src} key={i.id}>
                                        {i.name}
                                    </Icon>
                                ))}
                            </div>
                        </div>
                        <button
                            className="w-full h-10 flex items-center justify-center text-gray500 hover:bg-gray100 active:bg-gray100 rounded-xl duration-100 ease-out"
                            onClick={() => setIsBoxOpen(!isBoxOpen)}
                        >
                            {isBoxOpen ? (
                                <ChevronUp size={28} strokeWidth={1.5} />
                            ) : (
                                <ChevronDown size={28} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </div>

                <div className="w-full h-25 bg-gray500" />

                <div className="py-5">
                    <h3 className="pl-5 pretendard-medium">
                        회원님을 위한 추천상품
                    </h3>
                    <HorizontalScroller className="flex flex-row gap-3 mt-2 px-5 pb-2">
                        {RECOMMEND_PRODUCTS_LIST.map((v, i) => (
                            <Card
                                key={i}
                                title={v.name}
                                sub={v.sub}
                                price={v.price}
                                sale={v.sale}
                            />
                        ))}
                    </HorizontalScroller>
                </div>
            </div>
            <FloatingButton
                icon={<Phone size={28} strokeWidth={1.25} />}
                onClick={() => (document.location.href = `tel:${PHONE_NUMBER}`)}
            >
                전화 문의
            </FloatingButton>
            <Gnb />
        </>
    );
}
