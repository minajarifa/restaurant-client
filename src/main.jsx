import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routers/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
