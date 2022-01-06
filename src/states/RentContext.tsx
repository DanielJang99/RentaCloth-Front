import React, {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import Rent from "@src/types/rent";

type RentType = [
    { rent: Rent | {} },
    {
        setRent?: Dispatch<SetStateAction<Rent>>;
        resetRent?: () => void;
    },
];

const RentContext = createContext<RentType>([
    { rent: {} },
    {
        setRent: () => {},
        resetRent: () => {},
    },
]);

const RentProvider = ({ children }: { children: React.ReactNode }) => {
    const [rent, setRent] = useState({
        product_id: "",
        color: "",
        size: "",
        days: 0,
        price: "",
        receival_station: "",
        return_station: "",
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
            receival_station: "",
            return_station: "",
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
