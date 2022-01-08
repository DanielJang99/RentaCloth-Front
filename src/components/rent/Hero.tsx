import React from "react";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import Product from "@src/types/product.type";

function Hero({ product }: { product: Product }): React.ReactElement {
    return (
        <>
            <div className={commons.section_container}>
                <div className={styles.header}>선택 옵션</div>
            </div>
            <div className={commons.white_bg}>
                <div className={styles.section_container}>
                    {product && (
                        <div className={styles.rent_hero}>
                            <div className={styles.product_image_wrapper}>
                                <img
                                    src={product.image_urls[0]}
                                    alt=""
                                    className={styles.product_image}
                                />
                            </div>
                            <div className={styles.product_title}>
                                <div className={styles.product_brand}>
                                    {product.brand}
                                </div>
                                <div className={styles.product_name}>
                                    {product.name}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Hero;
