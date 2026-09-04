import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";


const WishlistContext = createContext();


export function WishlistProvider({ children }) {

    // Get saved wishlist from localStorage
    const [wishlist, setWishlist] = useState(() => {

        const savedWishlist =
            localStorage.getItem(
                "lizzy-perfumes-wishlist"
            );

        return savedWishlist
            ? JSON.parse(savedWishlist)
            : [];
    });


    // Save wishlist whenever it changes
    useEffect(() => {

        localStorage.setItem(
            "lizzy-perfumes-wishlist",
            JSON.stringify(wishlist)
        );

    }, [wishlist]);


    // ==============================
    // ADD / REMOVE WISHLIST
    // ==============================

    const toggleWishlist = (product) => {

        setWishlist((currentWishlist) => {

            const exists = currentWishlist.some(
                (item) => item.id === product.id
            );


            if (exists) {

                return currentWishlist.filter(
                    (item) => item.id !== product.id
                );

            }


            return [
                ...currentWishlist,
                product,
            ];
        });
    };


    // ==============================
    // CHECK IF PRODUCT IS WISHLISTED
    // ==============================

    const isInWishlist = (productId) => {

        return wishlist.some(
            (item) => item.id === productId
        );

    };


    // ==============================
    // REMOVE PRODUCT
    // ==============================

    const removeFromWishlist = (productId) => {

        setWishlist((currentWishlist) =>
            currentWishlist.filter(
                (item) => item.id !== productId
            )
        );

    };


    // ==============================
    // CLEAR WISHLIST
    // ==============================

    const clearWishlist = () => {

        setWishlist([]);

    };


    return (

        <WishlistContext.Provider
            value={{
                wishlist,
                toggleWishlist,
                isInWishlist,
                removeFromWishlist,
                clearWishlist,
                wishlistCount: wishlist.length,
            }}
        >

            {children}

        </WishlistContext.Provider>

    );
}


// Custom Hook

export function useWishlist() {

    const context = useContext(
        WishlistContext
    );


    if (!context) {

        throw new Error(
            "useWishlist must be used inside WishlistProvider"
        );

    }


    return context;

}