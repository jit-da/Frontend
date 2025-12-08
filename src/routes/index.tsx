import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";
import Like from "./pages/Like";
import Mypage from "./pages/Mypage";
import Material from "./pages/Material";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/like",
        element: <Like />,
    },
    {
        path: "/receipt",
        element: <Receipt />,
    },
    {
        path: "/mypage",
        element: <Mypage />,
    },
    {
        path: "/material",
        element: <Material />,
    },
]);

export default function Router() {
    return (
        <div className="max-w-md h-screen m-auto select-none whitespace-nowrap">
            <RouterProvider router={router} />
        </div>
    );
}
