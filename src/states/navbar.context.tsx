import React, {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useContext,
} from "react";

type NavbarType = [
    { header: string },
    { setHeader: Dispatch<SetStateAction<string>> | (() => void) },
];

const NavbarContext = createContext<NavbarType>([
    { header: "" },
    { setHeader: () => {} },
]);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [header, setHeader] = useState("RentaCloth");
    const value = {
        state: { header },
        actions: { setHeader },
    };

    return (
        <NavbarContext.Provider value={[value.state, value.actions]}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => {
    const [navState, navActions] = useContext(NavbarContext);
    if (!navState || !navActions) throw new Error("Cannot find NavbarContext");
    const { header } = navState;
    const { setHeader } = navActions;
    return {
        header,
        setHeader,
    };
};

export default NavbarContext;
