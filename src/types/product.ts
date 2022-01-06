export default interface Product {
    _id: string;
    name: string;
    category: string;
    brand: string;
    isAvailable: boolean;
    daily_price: number;
    retail_price: number;
    createdAt: string;
    updatedAt: string;
    image_urls: string[];
    is_rental?: boolean;
    sizes?: string[];
    colors?: string[];
    thumbnail: string;
}
