import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router";
import { getCurrentUser } from "admin/Utils";

const user = getCurrentUser();
console.log("user", user);

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
