import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default function Router() {
    return (
        <div className="max-w-md h-screen m-auto select-none whitespace-nowrap">
            <RouterProvider router={router} />
        </div>
    );
}
