import React from "react";
import commons from "@styles/commons/Commons.module.css";
import Link from "next/link";

function ProductGrid({ products }) {
    if (products && products.length > 0) {
        return (
            <div className={commons.products}>
                {products.map((product, index) => {
                    return (
                        <Link
                            href="/products/[_id]"
                            as={`/products/${product._id}`}
                            key={index}
                        >
                            <div className={commons.product}>
                                <img
                                    src={product.image_urls[0]}
                                    alt="제품 이미지"
                                    className={commons.product_img}
                                />
                                <div className={commons.product_details}>
                                    <div className={commons.product_brand}>
                                        {product.brand}
                                    </div>
                                    <div className={commons.product_name}>
                                        {product.name}
                                    </div>
                                    <div
                                        className={commons.product_daily_price}
                                    >
                                        <span>일 </span>
                                        {product.daily_price}원
                                    </div>
                                    <div
                                        className={commons.product_retail_price}
                                    >
                                        <span>정가 </span>
                                        {product.retail_price}원
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
    return <></>;
}

export default ProductGrid;
