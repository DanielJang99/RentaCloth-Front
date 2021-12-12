import React from "react";
import styles from "@styles/product/Product.module.css";

function ProductAvailability({ isAvailable }) {
    return isAvailable ? (
        <div className={styles.product_availability_true}>대여 가능</div>
    ) : (
        <div className={styles.product_availability_false}>대여 불가</div>
    );
}

export default ProductAvailability;
