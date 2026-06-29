import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/routes/__root";
import HomePage from "@/routes/index";
import ApartmanElenaPage from "@/routes/apartman-elena";
import ApartmanLaCasaDiElenaPage from "@/routes/apartman-la-casa-di-elena";
import ApartmanPrimaveraPage from "@/routes/apartman-primavera";

const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "apartman-elena", element: <ApartmanElenaPage /> },
      {
        path: "apartman-la-casa-di-elena",
        element: <ApartmanLaCasaDiElenaPage />,
      },
      { path: "apartman-primavera", element: <ApartmanPrimaveraPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
