import React, {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

type NavbarType = [
    { header: string },
    { setHeader?: Dispatch<SetStateAction<string>> },
];

const NavbarContext = createContext<NavbarType>([
    { header: "" },
    { setHeader: undefined },
]);

const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
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

export { NavbarProvider };
export default NavbarContext;
