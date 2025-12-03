import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/receipt",
        element: <Receipt />,
    },
]);

export default function Router() {
    return (
        <div className="max-w-md h-screen m-auto select-none whitespace-nowrap">
            <RouterProvider router={router} />
        </div>
    );
}
