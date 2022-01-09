import React, { useEffect } from "react";
import { useNavbar } from "@src/states/navbar.context";
import axios from "axios";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/product/Product.module.css";
import ProductCarousel from "@components/product/ProductCarousel";
import ProductAvailability from "@components/product/ProductAvailability";
import CircularProgress from "@mui/material/CircularProgress";
import IconShare from "@components/commons/IconShare";
import RentalBtn from "@components/product/RentalBtn";
import classnames from "classnames";
import { useRouter } from "next/router";
import { getFormattedPrice } from "@src/utils/price";
import { default as productType } from "@src/types/product.type";

function Product({ product }: { product: productType }) {
    const router = useRouter();
    const { setHeader } = useNavbar();
    useEffect(() => {
        setHeader("상품 정보");
    }, []);

    const getDiscountPercentage = (
        daily_price: number,
        retail_price: number,
    ) => {
        return Math.floor((1 - daily_price / retail_price) * 100);
    };

    return (
        <div
            className={classnames(
                commons.page_container,
                commons.slide_from_right,
            )}
        >
            {router.isFallback && <CircularProgress />}
            {product && (
                <>
                    <ProductCarousel image_urls={product.image_urls} />
                    <div className={commons.section_container}>
                        {/*                 제품명 및 공유 버튼                     */}
                        <div className={styles.product_detail}>
                            <div className={styles.product_detail_container}>
                                <div className={styles.product_brand}>
                                    {product.brand}
                                </div>
                                <div className={styles.shareIconWrapper}>
                                    {/* <ShareIcon fontSize={"small"} /> */}
                                    <IconShare />
                                </div>
                            </div>
                            <div className={styles.product_detail_container}>
                                <div className={styles.product_name}>
                                    {product.name}
                                </div>
                                <ProductAvailability
                                    isAvailable={product.isAvailable}
                                />
                            </div>
                        </div>
                    </div>

                    {/*                 제품 가격                     */}
                    <div className={styles.white_background}>
                        <div className={styles.price_section}>
                            <div>
                                <div className={styles.daily_price}>
                                    {`4일: ${getFormattedPrice(
                                        product.daily_price,
                                    )}원`}
                                </div>
                                <div className={styles.retail_price}>
                                    {/* 
                                        // @ts-ignore */}
                                    <strike>
                                        {`정가: ${getFormattedPrice(
                                            product.retail_price,
                                        )}원`}
                                        {/* 
                                    // @ts-ignore */}
                                    </strike>
                                </div>
                            </div>
                            {/* <div>
                                <div className={styles.discount_percentage}>
                                    {`${getDiscountPercentage(
                                        product.daily_price,
                                        product.retail_price,
                                    )}% `}
                                    <span className={styles.down_label}>
                                        Down
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/*                렌탈 신청                    */}
                    <RentalBtn
                        product_id={product._id}
                        isAvailable={product.isAvailable}
                        colors={product.colors}
                        sizes={product.sizes}
                    />
                </>
            )}
        </div>
    );
}

export default Product;

export async function getStaticProps({ params }: { params: { _id: string } }) {
    const product_id = params._id;
    const apiUrl = process.env.NEXT_PUBLIC_API;
    const res = await axios.get(`${apiUrl}/products/${product_id}`);
    const productData: productType = res.data.product;
    return {
        props: {
            product: productData,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}
