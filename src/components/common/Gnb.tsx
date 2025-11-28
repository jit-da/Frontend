import { House, Menu, Heart, ReceiptText, User } from "lucide-react";
import GnbItem from "./GnbItem";

export default function Gnb() {
    return (
        <>
            <nav className="z-1 fixed w-full max-w-md h-18 bottom-0 grid grid-cols-5 bg-white border-t border-gray200">
                <GnbItem to="/">
                    <House strokeWidth={1.5} />홈
                </GnbItem>
                <GnbItem to="/category">
                    <Menu strokeWidth={1.5} />
                    카테고리
                </GnbItem>
                <GnbItem to="/like">
                    <Heart strokeWidth={1.5} />
                    좋아요
                </GnbItem>
                <GnbItem to="/receipt">
                    <ReceiptText strokeWidth={1.5} />
                    주문내역
                </GnbItem>
                <GnbItem to="/mypage">
                    <User strokeWidth={1.5} />
                    내정보
                </GnbItem>
            </nav>
        </>
    );
}
