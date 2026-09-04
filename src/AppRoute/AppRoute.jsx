import { Routes, Route } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NewArrivals from "../Pages/NewArrivals";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";
import Checkout from "../Pages/Checkout";
import CategoryPage from "../Pages/CategoryPage";


function AppRoute() {





    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>

                {/* Home */}
                <Route index element={<Home />} />


                {/* New Arrivals */}
                <Route path="/new-arrivals" element={<NewArrivals />} />

                {/* About */}
                <Route path="/about" element={<About />} />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />

                {/* Product Details */}
                {/* <Route path="/product/:id" element={<ProductDetails />} /> */}

                {/* Cart */}
                <Route path="/cart" element={<Cart />} />

                {/* Wishlist */}
                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="login" element={<Login />} />

                <Route path="register" element={<Register />} />

                <Route path="/shop" element={<Shop />} />

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />

                <Route
                    path="/checkout/:id"
                    element={<Checkout />}
                />

                <Route
                    path="/shop/men"
                    element={
                        <CategoryPage
                            category="Men"
                            title="Men's Fragrances"
                            description="Discover bold, refined fragrances created for confidence, character and everyday elegance."
                        />
                    }
                />

                <Route
                    path="/shop/women"
                    element={
                        <CategoryPage
                            category="Women"
                            title="Women's Fragrances"
                            description="Explore elegant floral, sweet and sophisticated fragrances designed to leave a lasting impression."
                        />
                    }
                />

                <Route
                    path="/shop/unisex"
                    element={
                        <CategoryPage
                            category="Unisex"
                            title="Unisex Fragrances"
                            description="Discover versatile fragrances crafted to be enjoyed by everyone."
                        />
                    }
                />



            </Route>
        </Routes >
    );
}

export default AppRoute;