import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";


const AuthContext = createContext();


export function AuthProvider({ children }) {

    // ==============================
    // CURRENT USER
    // ==============================

    const [user, setUser] = useState(() => {

        const savedUser =
            localStorage.getItem(
                "lizzy-perfumes-user"
            );

        return savedUser
            ? JSON.parse(savedUser)
            : null;
    });


    // ==============================
    // SAVE USER
    // ==============================

    useEffect(() => {

        if (user) {

            localStorage.setItem(
                "lizzy-perfumes-user",
                JSON.stringify(user)
            );

        } else {

            localStorage.removeItem(
                "lizzy-perfumes-user"
            );

        }

    }, [user]);


    // ==============================
    // REGISTER
    // ==============================

    const register = (userData) => {

        const existingUsers =
            JSON.parse(
                localStorage.getItem(
                    "lizzy-perfumes-users"
                )
            ) || [];


        // Check if email already exists

        const userExists =
            existingUsers.some(
                (existingUser) =>
                    existingUser.email.toLowerCase() ===
                    userData.email.toLowerCase()
            );


        if (userExists) {

            return {
                success: false,
                message:
                    "An account with this email already exists.",
            };

        }


        // Create new user

        const newUser = {

            id: Date.now(),

            name: userData.name,

            email: userData.email,

            password: userData.password,

        };


        // Save user to users list

        const updatedUsers = [
            ...existingUsers,
            newUser,
        ];


        localStorage.setItem(
            "lizzy-perfumes-users",
            JSON.stringify(updatedUsers)
        );


        // Automatically login user

        setUser(newUser);


        return {
            success: true,
            message:
                "Account created successfully.",
        };

    };


    // ==============================
    // LOGIN
    // ==============================

    const login = (email, password) => {

        const existingUsers =
            JSON.parse(
                localStorage.getItem(
                    "lizzy-perfumes-users"
                )
            ) || [];


        const foundUser =
            existingUsers.find(
                (existingUser) =>
                    existingUser.email.toLowerCase() ===
                    email.toLowerCase() &&
                    existingUser.password ===
                    password
            );


        if (!foundUser) {

            return {
                success: false,
                message:
                    "Invalid email or password.",
            };

        }


        setUser(foundUser);


        return {
            success: true,
            message:
                "Login successful.",
        };

    };


    // ==============================
    // LOGOUT
    // ==============================

    const logout = () => {

        setUser(null);

    };


    return (

        <AuthContext.Provider
            value={{
                user,
                register,
                login,
                logout,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}


// ==============================
// CUSTOM AUTH HOOK
// ==============================

export function useAuth() {

    const context =
        useContext(AuthContext);


    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider"
        );

    }


    return context;

}