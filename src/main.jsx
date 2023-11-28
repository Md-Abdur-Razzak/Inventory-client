import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Route, RouterProvider } from "react-router-dom";
import { myRoute } from "./Route/Route";
import AuthProvider from "./Route/AuthProvider";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={myRoute}></RouterProvider>
        </AuthProvider>
        <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
