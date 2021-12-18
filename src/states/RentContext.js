import React, { createContext, useState } from "react";

const RentContext = createContext({
    state: {},
    actions: {
        setRent: () => {},
    },
});

const RentProvider = ({ children }) => {
    const [rent, setRent] = useState({
        product_id: "",
        color: "",
        size: "",
        days: 0,
        price: "",
        receival_station: {},
        return_station: {},
        start_date: "",
        end_date: "",
    });
    const resetRent = () => {
        setRent({
            product_id: "",
            color: "",
            size: "",
            days: 0,
            price: "",
            receival_station: {},
            return_station: {},
            start_date: "",
            end_date: "",
        });
    };
    const value = {
        state: { rent },
        actions: { setRent, resetRent },
    };
    return (
        <RentContext.Provider value={[value.state, value.actions]}>
            {children}
        </RentContext.Provider>
    );
};

export { RentProvider };
export default RentContext;
