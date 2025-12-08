import profile from "@/assets/images/profile.png";
import { ChevronRight } from "lucide-react";

export default function Profile() {
    return (
        <button className="relative w-[calc(100%-20px)] flex mx-2 px-3 py-5 rounded-2xl active:bg-gray100 duration-200">
            <img src={profile} className="w-13 h-13 rounded-full" />
            <div className="flex flex-col text-start ml-2">
                <h2 className="text-xl pretendard-semibold mt-1">강병찬</h2>
                <span className="text-sm text-gray600 -mt-1">B&S파트너즈</span>
            </div>
            <ChevronRight
                className="absolute right-1 top-8 text-gray500"
                size={28}
                strokeWidth={1.5}
            />
        </button>
    );
}
