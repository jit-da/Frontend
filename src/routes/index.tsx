import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";
import Like from "./pages/Like";
import Mypage from "./pages/Mypage";
import Material from "./pages/Material";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Category from "./pages/Category";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, element: <Home /> },
            { path: "category", element: <Category /> },
            { path: "like", element: <Like /> },
            { path: "receipt", element: <Receipt /> },
            { path: "mypage", element: <Mypage /> },
        ],
    },
    {
        path: "/login",
        element: <Login />,
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
