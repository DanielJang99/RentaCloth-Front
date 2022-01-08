import ProductPrice from "./product_price.type";

export interface calendarProps {
    product_id: string;
    handleCloseModal: () => void;
}

export interface calendarRange {
    start?: Date;
    end?: Date;
    currentSelection: "startDate" | "endDate";
}

export interface productPriceData {
    prices: ProductPrice[];
    retail_price: number;
}
