import { Search } from "lucide-react";

export default function SearchBar({ children }: { children: string }) {
    return (
        <>
            <input
                className="relative w-full h-10 pl-5 rounded-full bg-gray200 text-sm placeholder:text-gray600 focus:outline-none"
                placeholder={children}
            />
            <Search
                className="absolute top-[21px] right-9 text-gray600"
                size={20}
            />
        </>
    );
}
