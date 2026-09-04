import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute/AppRoute";
import { CartProvider } from "./Context/CartContext";
import "./index.css";
import { WishlistProvider } from "./Context/WishlistContext";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <AuthProvider>
        <CartProvider>

          <WishlistProvider>

            <AppRoute />

          </WishlistProvider>

        </CartProvider>

      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>
);