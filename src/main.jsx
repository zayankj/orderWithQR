import { CartProvider } from "./features/cart/CartContext";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MainMenu from "./features/menu/MainMenu";
import TastyTeasers from "./features/menu/TastyTeasers";
import Burgers from "./features/menu/Burgers";
import Freakshakes from "./features/menu/FreakShakes";
import Pizza from "./features/menu/Pizza.jsx";
import CabinQRCode from "./features/qr/CabinQRCode";
import Milkshake from "./features/menu/MilkShakes.jsx";
import Rolls from "./features/menu/Rolls.jsx";
import Lemonade from "./features/menu/Lemonade";
import Slushy from "./features/menu/Slushy.jsx";
// import Creams from "./features/menu/Creams.jsx";
// import FruitRefreshers from "./features/menu/FruitRefreshers.jsx";
import IceFrappes from "./features/menu/IceFrappes.jsx";
import WafflesNicecreams from "./features/menu/WafflesNicecreams.jsx";
import Pasta from "./features/menu/Pasta.jsx";
import Juice from "./features/menu/Juice";
import Creams from "./features/menu/creams.jsx";
import Cart from "./features/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainMenu /> },
      { path: "/tastyteasers", element: <TastyTeasers /> },
      { path: "/burgers", element: <Burgers /> },
      { path: "/freakshakes", element: <Freakshakes /> },
      { path: "/pizza", element: <Pizza /> },
      { path: "/milkshake", element: <Milkshake /> },
      { path: "/rolls", element: <Rolls /> },
      { path: "/juice", element: <Juice /> },
      { path: "/lemonade", element: <Lemonade /> },
      { path: "/slushy", element: <Slushy /> },
      // { path: "/cream", element: <Creams /> },
      { path: "/juice", element: <Juice /> },
      { path: "/icefrappes", element: <IceFrappes /> },
      { path: "/wafflesNicecreams", element: <WafflesNicecreams /> },
      { path: "/pasta", element: <Pasta /> },
      { path: "/creams", element: <Creams /> },
      { path: "/cart", element: <Cart /> },
      { path: "/qr-code", element: <CabinQRCode /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
