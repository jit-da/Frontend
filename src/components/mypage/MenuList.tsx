import {
    CreditCard,
    FileText,
    Headset,
    Info,
    LogOut,
    MapPinPen,
    MessageCircleQuestionMark,
    Repeat,
} from "lucide-react";
import MenuListItem from "./MenuListItem";
import { useModalStore } from "@/stores/useModal";

export default function MenuList() {
    const { openModal } = useModalStore();

    return (
        <ul className="pt-2 pb-3 flex flex-col">
            <MenuListItem>
                <MapPinPen strokeWidth={1.5} size={20} />
                주소 관리
            </MenuListItem>
            <MenuListItem>
                <CreditCard strokeWidth={1.5} size={20} />
                결제수단 관리
            </MenuListItem>
            <MenuListItem>
                <Repeat strokeWidth={1.5} size={20} />
                취소/반품/교환 내역
            </MenuListItem>
            <MenuListItem>
                <MessageCircleQuestionMark strokeWidth={1.5} size={20} />
                자주 묻는 질문
            </MenuListItem>
            <MenuListItem>
                <Headset strokeWidth={1.5} size={20} />
                고객센터
            </MenuListItem>
            <MenuListItem>
                <FileText strokeWidth={1.5} size={20} />
                약관 및 정책
            </MenuListItem>
            <MenuListItem>
                <Info strokeWidth={1.5} size={20} />앱 버전{" "}
                <span className="text-gray600">1.0.0</span>
            </MenuListItem>
            <MenuListItem onClick={() => openModal("logout")}>
                <LogOut strokeWidth={1.5} size={20} />
                로그아웃
            </MenuListItem>
        </ul>
    );
}
