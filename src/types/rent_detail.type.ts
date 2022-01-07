import Product from "./product.type";
import Rent from "./rent.type";

export default interface RentDetail extends Rent {
    product: Product;
}
