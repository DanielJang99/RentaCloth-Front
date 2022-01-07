import React, {
    createContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    useContext,
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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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

export const useAuth = () => {
    const [authState, authActions] = useContext(AuthContext);
    if (!authState || !authActions) throw new Error("Cannot find AuthContext");
    const { logined } = authState;
    const { setAuthState } = authActions;
    return { logined, setAuthState };
};

export default AuthContext;
