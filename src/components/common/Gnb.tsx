import { NavLink } from "react-router";
import { House, Menu, Heart, ReceiptText, User } from "lucide-react";

export default function Gnb() {
    return (
        <>
            <nav className="z-1 fixed w-full max-w-md h-[72px] bottom-0 grid grid-cols-5 bg-white border-t border-gray200">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 hover:text-gray700 ${
                            !isActive && "text-gray600 pretendard-light"
                        }`
                    }
                >
                    <House strokeWidth={1.5} />홈
                </NavLink>
                <NavLink
                    to="/category"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 hover:text-gray700 ${
                            !isActive && "text-gray600 pretendard-light"
                        }`
                    }
                >
                    <Menu strokeWidth={1.5} />
                    카테고리
                </NavLink>
                <NavLink
                    to="/like"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 hover:text-gray700 ${
                            !isActive && "text-gray600 pretendard-light"
                        }`
                    }
                >
                    <Heart strokeWidth={1.5} />
                    좋아요
                </NavLink>
                <NavLink
                    to="/receipt"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 hover:text-gray700 ${
                            !isActive && "text-gray600 pretendard-light"
                        }`
                    }
                >
                    <ReceiptText strokeWidth={1.5} />
                    주문내역
                </NavLink>
                <NavLink
                    to="/mypage"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 hover:text-gray700 ${
                            !isActive && "text-gray600 pretendard-light"
                        }`
                    }
                >
                    <User strokeWidth={1.5} />
                    내정보
                </NavLink>
            </nav>
        </>
    );
}
