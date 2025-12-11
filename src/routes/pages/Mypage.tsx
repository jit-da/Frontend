import Header from "@/components/common/Header";
import Profile from "@/components/mypage/Profile";
import Grade from "@/components/mypage/Grade";
import Progress from "@/components/mypage/Progress";
import ButtonList from "@/components/mypage/ButtonList";
import MenuList from "@/components/mypage/MenuList";
import { useModalStore } from "@/stores/useModal";
import { useNavigate } from "react-router";
import Confirm from "@/components/common/Confirm";

export default function Mypage() {
    const openName = useModalStore((state) => state.openName);
    const navigation = useNavigate();

    return (
        <>
            <Header cart>마이페이지</Header>
            <div className="full py-15.5 pb-18 flex flex-col gap-2">
                <Profile />
                <Grade grade="BRONZE" />
                <ButtonList />
                <div className="w-full h-3 bg-gray100" />
                <Progress />
                <div className="w-full h-3 bg-gray100" />
                <MenuList />
            </div>

            {openName === "logout" && (
                <Confirm onClick={() => navigation("/login")}>
                    로그아웃 하시겠습니까?
                </Confirm>
            )}
        </>
    );
}
