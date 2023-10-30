import React from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Template from "./organisms/template";

import { Provider } from "react-redux";
import { store } from "./stores/main";

import Products from "./pages/products";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import HomePage from "./pages/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/cd/:id",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
