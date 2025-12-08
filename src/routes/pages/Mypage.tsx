import Gnb from "@/components/common/Gnb";
import Header from "@/components/common/Header";
import Profile from "@/components/mypage/profile";
import Grade from "@/components/mypage/Grade";
import Progress from "@/components/mypage/Progress";
import ButtonList from "@/components/mypage/ButtonList";
import MenuList from "@/components/mypage/MenuList";

export default function Mypage() {
    return (
        <>
            <Header cart>마이페이지</Header>
            <div className="w-full py-15.5 pb-18 flex flex-col gap-2">
                <Profile />
                <Grade grade="BRONZE" />
                <ButtonList />
                <div className="w-full h-3 bg-gray100" />
                <Progress />
                <div className="w-full h-3 bg-gray100" />
                <MenuList />
            </div>
            <Gnb />
        </>
    );
}
