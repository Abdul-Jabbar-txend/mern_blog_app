import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Write from "./pages/Write.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import MainLayouts from "./layouts/MainLayouts.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/:write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
