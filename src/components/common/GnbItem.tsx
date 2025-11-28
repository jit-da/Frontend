import { NavLink } from "react-router";

export default function GnbItem({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `mx-5 flex flex-col items-center justify-center text-xs ease-out duration-100 ${
                        !isActive &&
                        "text-gray600 hover:text-gray700 active:text-gray700 pretendard-light"
                    }`
                }
            >
                {children}
            </NavLink>
        </>
    );
}
