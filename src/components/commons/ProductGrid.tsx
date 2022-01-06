import React from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/product/ProductGrid.module.css";
import Link from "next/link";
import classNames from "classnames";
import { getFormattedPrice } from "@src/utils/price";
import Product from "@src/types/product";

interface ProductGridProps {
    products: Product[];
}

function ProductGrid({ products }: ProductGridProps): React.ReactElement {
    if (products && products.length > 0) {
        return (
            <div
                className={classNames(
                    commons.products,
                    commons.slide_from_right,
                )}
            >
                {products.map((product, index) => {
                    return (
                        <Link
                            href="/products/[_id]"
                            as={`/products/${product._id}`}
                            key={index}
                        >
                            <div className={commons.product}>
                                <img
                                    src={product.thumbnail}
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
                                        <span>4일 </span>
                                        {getFormattedPrice(product.daily_price)}
                                        원
                                    </div>
                                    <div
                                        className={commons.product_retail_price}
                                    >
                                        <span>정가 </span>
                                        {getFormattedPrice(
                                            product.retail_price,
                                        )}
                                        원
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                <div className={commons.product}>
                    <a href="http://pf.kakao.com/_qdxgQK/chat" target="_blank">
                        <div
                            className={classNames(
                                commons.product_img,
                                commons.navy_bg,
                            )}
                            style={{ height: "95%" }}
                        >
                            <div className={styles.musinsa_header}>
                                원하시는 상품이 없으신가요?
                            </div>
                            <div className={styles.musinsa_logo_wrapper}>
                                <img
                                    src="/musinsa_icon.png"
                                    alt="musinsa logo"
                                    className={styles.musinsa_logo}
                                />
                            </div>
                            <div className={styles.musinsa_subheader}>
                                무신사 인기 상품은 신청만 하면 즉시 대여 가능!
                            </div>
                        </div>
                    </a>
                    <div className={commons.product_name}>
                        상품 입고 신청하기
                    </div>
                </div>
            </div>
        );
    }
    return <></>;
}

export default ProductGrid;
