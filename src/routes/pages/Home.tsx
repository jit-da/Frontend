import Header from "@/components/common/Header";
import Icon from "@/components/home/Icon";
import home1 from "@/assets/icons/home/1.png";
import home2 from "@/assets/icons/home/2.png";
import home3 from "@/assets/icons/home/3.png";
import home4 from "@/assets/icons/home/4.png";
import home5 from "@/assets/icons/home/5.png";
import home6 from "@/assets/icons/home/6.png";
import home7 from "@/assets/icons/home/7.png";
import home8 from "@/assets/icons/home/8.png";
import home9 from "@/assets/icons/home/9.png";
import home10 from "@/assets/icons/home/10.png";
import home11 from "@/assets/icons/home/11.png";
import home12 from "@/assets/icons/home/12.png";
import jajae from "@/assets/images/jajae.png";
import magamjae from "@/assets/images/magamjae.png";
import paint from "@/assets/images/paint.png";
import Gnb from "@/components/common/Gnb";
import FloatingButton from "@/components/common/FloatingButton";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useState } from "react";
import Card from "@/components/home/Card";
import HorizontalScroller from "@/components/common/HorizontalScroller";

export default function Home() {
    const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);

    return (
        <>
            <Header logo search cart />
            <div className="full pt-15.5 pb-18">
                <div className="grid grid-cols-2 gap-3 px-5 py-2">
                    <button className="w-full h-50 bg-gray100 hover:bg-gray200 active:bg-gray200 rounded-2xl duration-100 ease-out flex flex-col justify-between text-left pb-1">
                        <div className="p-5 pb-0">
                            <h1 className="text-xl pretendard-semibold">
                                자재
                            </h1>
                            <h2 className="text-xs text-gray600">
                                시공에 필요한 기초 자재
                            </h2>
                        </div>
                        <img src={jajae} className="opacity-85" />
                    </button>
                    <button className="w-full h-50 bg-gray100 hover:bg-gray200 active:bg-gray200 rounded-2xl duration-100 ease-out flex flex-col justify-between text-left">
                        <div className="p-5 pb-0">
                            <h1 className="text-xl pretendard-semibold">
                                마감재
                            </h1>
                            <h2 className="text-xs text-gray600">
                                내 공간을 빛내줄 마감재
                            </h2>
                        </div>
                        <img src={magamjae} className="opacity-85" />
                    </button>
                    <button className="col-span-2 w-full h-20 bg-gray100 hover:bg-gray200 active:bg-gray200 rounded-2xl duration-100 ease-out flex flex-row justify-between text-left">
                        <div className="p-5 pb-0">
                            <h1 className="text-xl pretendard-semibold">
                                페인트
                            </h1>
                            <h2 className="text-xs text-gray600">
                                브랜드별 색상 비교 · 쉽고 빠른 주문
                            </h2>
                        </div>
                        <img src={paint} className="opacity-85" />
                    </button>

                    <div className="col-span-2 w-full pt-2">
                        중장비 대여
                        <div className="grid grid-cols-5 mt-1">
                            <Icon icon={home1}>굴삭기</Icon>
                            <Icon icon={home2}>사다리차</Icon>
                            <Icon icon={home3}>스카이</Icon>
                            <Icon icon={home4}>레미콘</Icon>
                            <Icon icon={home5}>펌프카</Icon>
                        </div>
                        <div
                            className={`overflow-hidden duration-200 ${
                                isBoxOpen
                                    ? "max-h-100 opacity-100 ease-in"
                                    : "max-h-0 opacity-0 ease-out"
                            }`}
                        >
                            <div className="grid grid-cols-5">
                                <Icon icon={home6}>지게차</Icon>
                                <Icon icon={home7}>롤러</Icon>
                                <Icon icon={home8}>로더</Icon>
                                <Icon icon={home9}>불도저</Icon>
                                <Icon icon={home10}>피니셔</Icon>
                                <Icon icon={home11}>타워크레인</Icon>
                                <Icon icon={home12}>운반</Icon>
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
                    <h3 className="pl-5">회원님을 위한 추천상품</h3>
                    <HorizontalScroller className="flex flex-row gap-3 mt-2 px-5">
                        <Card
                            title="파이프 원형 롱소켓"
                            sub="20mm"
                            price={2000}
                            sale={10}
                        />
                        <Card
                            title="파이프 원형 롱소켓"
                            sub="25mm"
                            price={2200}
                            sale={10}
                        />
                        <Card
                            title="파이프 원형 롱소켓"
                            sub="30mm"
                            price={2400}
                            sale={10}
                        />
                        <Card
                            title="아이소 핑크"
                            sub="뭐적지"
                            price={4500}
                            sale={0}
                        />
                        <Card
                            title="파이프 원형 롱소켓"
                            sub="20mm"
                            price={2000}
                            sale={10}
                        />
                        <Card
                            title="파이프 원형 롱소켓"
                            sub="25mm"
                            price={2200}
                            sale={10}
                        />
                        <Card
                            title="파이프 원형 롱소켓"
                            sub="30mm"
                            price={2400}
                            sale={10}
                        />
                        <Card
                            title="아이소 핑크"
                            sub="뭐적지"
                            price={4500}
                            sale={0}
                        />
                    </HorizontalScroller>
                </div>
            </div>
            <FloatingButton
                icon={<Phone size={28} strokeWidth={1.25} />}
                onClick={() => (document.location.href = "tel:010-1234-5678")}
            >
                전화 문의
            </FloatingButton>
            <Gnb />
        </>
    );
}
