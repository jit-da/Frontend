import logo from "@/assets/images/logo.svg";
import Button from "@/components/common/Button";
import Input from "@/components/login/Input";
import { useState } from "react";
import kakao from "@/assets/icons/login/kakao.svg";
import google from "@/assets/icons/login/google.svg";
import { Link } from "react-router";

export default function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="full center flex flex-col px-5 gap-3">
                <img src={logo} />
                <Input value={id} onChange={(e) => setId(e.target.value)}>
                    아이디
                </Input>
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                    비밀번호
                </Input>
                <Button className="mt-2">로그인</Button>
                <div className="w-full flex justify-between">
                    <Link to="/">비밀번호 찾기</Link>
                    <Link to="/">회원가입</Link>
                </div>
                <div className="relative flex  justify-center w-full mt-5 mb-8">
                    <hr className="w-full absolute top-3 border-gray300" />
                    <span className="absolute px-5 bg-white text-gray500">
                        간편 로그인
                    </span>
                </div>
                <Button color="yellow" icon={kakao}>
                    카카오톡으로 시작
                </Button>
                <Button color="white" icon={google}>
                    구글로 시작
                </Button>
            </div>
        </>
    );
}
