import { NavLink, useNavigate } from "react-router";

export default function GnbItem({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) {
    const navigate = useNavigate();

    const linkHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <NavLink
                to={to}
                onClick={linkHandler}
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
