import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
import shopRoutes from "shop/Router";
import adminRoutes from "admin/Router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...adminRoutes, ...shopRoutes],
  },
]);
