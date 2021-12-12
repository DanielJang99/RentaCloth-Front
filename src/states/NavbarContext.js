import React, { createContext, useState } from "react";

const NavbarContext = createContext({
    state: {
        header: "",
    },
    actions: {
        setNavbarHeader: () => {},
    },
});

const NavbarProvider = ({ children }) => {
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
