import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([]);

export default function Router() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
