import React, { useState } from "react";
import logoimg from "../assets/logo.jpeg";
import { Link, NavLink, } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useAuth } from "../Context/AuthContext";

function Navbar({ user, onLogin, onRegister, onLogout, }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);

    const { cartCount } = useCart()

    const { wishlistCount } = useWishlist();

    // const { user, logout, } = useAuth();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "New Arrivals", path: "/new-arrivals" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#0d101b]/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">

                    {/*LOGO*/}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logoimg}
                            alt="Perfume Store Logo"
                            className="h-11 sm:h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden lg:flex items-center gap-8">

                        {navLinks.map((link) => {

                            if (link.name !== "Shop") {
                                return (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `relative text-sm font-medium transition-all duration-300 ${isActive
                                                ? "text-[#e7c27d]"
                                                : "text-white/80 hover:text-[#e7c27d]"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                );
                            }

                            return (
                                <div
                                    key={link.path}
                                    className="relative"
                                    onMouseEnter={() => setIsShopOpen(true)}
                                    onMouseLeave={() => setIsShopOpen(false)}
                                >

                                    <NavLink
                                        to="/shop"
                                        className={({ isActive }) =>
                                            `flex items-center gap-1 text-sm font-medium transition ${isActive
                                                ? "text-[#e7c27d]"
                                                : "text-white/80 hover:text-[#e7c27d]"
                                            }`
                                        }
                                    >
                                        Shop

                                    </NavLink>


                                    {/* SHOP DROPDOWN */}
                                    {isShopOpen && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">

                                            <div className="w-52 bg-[#111522] border border-white/10 rounded-lg shadow-xl overflow-hidden">

                                                <NavLink
                                                    to="/shop"
                                                    className="block px-5 py-3 text-sm text-white/80 hover:bg-[#e7c27d] hover:text-[#0d101b] transition"
                                                >
                                                    All Fragrances
                                                </NavLink>

                                                <NavLink
                                                    to="/shop/men"
                                                    className="block px-5 py-3 text-sm text-white/80 hover:bg-[#e7c27d] hover:text-[#0d101b] transition"
                                                >
                                                    Men's Fragrances
                                                </NavLink>

                                                <NavLink
                                                    to="/shop/women"
                                                    className="block px-5 py-3 text-sm text-white/80 hover:bg-[#e7c27d] hover:text-[#0d101b] transition"
                                                >
                                                    Women's Fragrances
                                                </NavLink>

                                                <NavLink
                                                    to="/shop/unisex"
                                                    className="block px-5 py-3 text-sm text-white/80 hover:bg-[#e7c27d] hover:text-[#0d101b] transition"
                                                >
                                                    Unisex Fragrances
                                                </NavLink>

                                            </div>

                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </nav>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="flex items-center gap-3 sm:gap-5">

                        {/* Search */}
                        <Link
                            to="/shop"
                            className="hidden sm:block text-white/80 hover:text-[#e7c27d] transition"
                            aria-label="Search"
                        >
                            <Search size={18} />
                        </Link>

                        {/* User */}
                        {user ? (
                            <div className="hidden md:flex items-center gap-3">
                                <Link
                                    to="/profile"
                                    className="text-sm text-white/80 hover:text-[#e7c27d] transition"
                                >
                                    👤 {user.name}
                                </Link>

                                <button
                                    onClick={logout}
                                    className="text-sm text-white/70 hover:text-red-400 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center gap-2">
                                <button
                                    onClick={onLogin}
                                    className="px-4 py-2 text-sm text-white border border-[#e7c27d]/60 hover:bg-[#e7c27d] hover:text-[#0d101b] transition duration-300"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={onRegister}
                                    className="px-4 py-2 text-sm bg-[#e7c27d] text-[#0d101b] hover:bg-[#f2d89e] transition duration-300"
                                >
                                    Register
                                </button>
                            </div>
                        )}

                        {/* ================= CART ================= */}
                        <Link
                            to="/cart"
                            className="relative text-white/80 hover:text-[#e7c27d] transition"
                            aria-label="Shopping cart"
                        >
                            🛒

                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#e7c27d] text-[#0d101b] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* ================= WISHLIST ================= */}
                        <Link
                            to="/wishlist"
                            className="relative hidden sm:block text-white/80 hover:text-[#e7c27d] transition"
                            aria-label="Wishlist"
                        >
                            ♡

                            {wishlistCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#e7c27d] text-[#0d101b] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* ================= MOBILE MENU BUTTON ================= */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-white text-2xl"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-white/10 py-5">

                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition
                                          ${isActive
                                            ? "text-[#e7c27d]"
                                            : "text-white/80 hover:text-[#e7c27d]"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        <nav className="flex flex-col gap-4">

                            {navLinks.map((link) => {

                                if (link.name !== "Shop") {
                                    return (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `text-sm font-medium transition ${isActive
                                                    ? "text-[#e7c27d]"
                                                    : "text-white/80 hover:text-[#e7c27d]"
                                                }`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    );
                                }

                                return (
                                    <div key={link.path}>

                                        <NavLink
                                            to="/shop"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-sm font-medium text-white/80"
                                        >
                                            Shop
                                        </NavLink>

                                        <div className="ml-4 mt-3 flex flex-col gap-3 border-l border-[#e7c27d]/30 pl-4">

                                            <NavLink
                                                to="/shop/men"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-sm text-white/60 hover:text-[#e7c27d]"
                                            >
                                                Men's Fragrances
                                            </NavLink>

                                            <NavLink
                                                to="/shop/women"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-sm text-white/60 hover:text-[#e7c27d]"
                                            >
                                                Women's Fragrances
                                            </NavLink>

                                            <NavLink
                                                to="/shop/unisex"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-sm text-white/60 hover:text-[#e7c27d]"
                                            >
                                                Unisex Fragrances
                                            </NavLink>

                                        </div>

                                    </div>
                                );
                            })}

                        </nav>
                        {/* Mobile Auth */}
                        <div className="flex flex-col gap-3 mt-6 pt-5 border-t border-white/10">
                            {user ? (
                                <>
                                    <Link
                                        to="/profile"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white/80"
                                    >
                                        👤 {user.name}
                                    </Link>

                                    <button
                                        onClick={() => {
                                            onLogout();
                                            setIsMenuOpen(false);
                                        }}
                                        className="text-left text-red-400"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => {
                                            onLogin();
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full py-2 border border-[#e7c27d]/60 text-white"
                                    >
                                        Login
                                    </button>

                                    <button
                                        onClick={() => {
                                            onRegister();
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full py-2 bg-[#e7c27d] text-[#0d101b]"
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;