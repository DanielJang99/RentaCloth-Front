import React, { createContext, useEffect, useState } from "react";
import api from "@src/_axios/index";

const AuthContext = createContext({
    state: {},
    actions: {
        setAuth: () => {},
    },
});

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        logined: false,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.getItem("token") &&
                localStorage.getItem("user_id") &&
                setAuthState({ logined: true });
        }
    }, [typeof window]);

    const value = {
        state: authState,
        actions: { setAuthState },
    };

    return (
        <AuthContext.Provider value={[value.state, value.actions]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
