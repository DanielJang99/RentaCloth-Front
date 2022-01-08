import React, {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useContext,
} from "react";
import Rent from "@src/types/rent.type";

type RentType = [
    { rent: Rent },
    {
        setRent: Dispatch<SetStateAction<Rent>>;
        resetRent: () => void;
    },
];

const initRent = {
    product_id: "",
    color: "",
    size: "",
    days: 0,
    price: "",
    receival_station: "",
    return_station: "",
};

const RentContext = createContext<RentType>([
    { rent: initRent },
    {
        setRent: () => {},
        resetRent: () => {},
    },
]);

export const RentProvider = ({ children }: { children: React.ReactNode }) => {
    const [rent, setRent] = useState(initRent);
    const resetRent = () => {
        setRent(initRent);
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

export const useRent = () => {
    const [rentState, rentActions] = useContext(RentContext);
    if (!rentState || !rentActions) throw new Error("Cannot find rentContext");
    const { rent } = rentState;
    const { setRent, resetRent } = rentActions;
    return {
        rent,
        setRent,
        resetRent,
    };
};

export default RentContext;
