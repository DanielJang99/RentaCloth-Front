import React, {
    createContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import api from "@src/_axios/index";

type AuthType = [
    { logined: boolean },
    {
        setAuthState?:
            | Dispatch<SetStateAction<{ logined: boolean }>>
            | (() => void);
    },
];

const AuthContext = createContext<AuthType>([
    { logined: false },
    { setAuthState: () => {} },
]);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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
