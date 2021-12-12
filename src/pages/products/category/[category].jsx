import React, { useEffect, useContext } from "react";
import axios from "axios";
import styles from "@styles/category/Category.module.css";
import commons from "@styles/commons/Commons.module.css";
import Link from "next/link";
import ProductGrid from "@components/commons/ProductGrid";
import NavbarContext from "src/states/NavbarContext";
import classnames from "classnames";

function ProductsByCategory({ category, products }) {
    const categories = Object.entries({
        popular: "인기",
        top: "상의",
        pants: "하의",
        outer: "아우터",
    });

    const [state, actions] = useContext(NavbarContext);
    useEffect(() => {
        actions.setHeader("카테고리");
    }, []);
    return (
        <div
            className={classnames(
                commons.page_container,
                commons.slide_from_right,
            )}
        >
            <div className={styles.category_menu_container}>
                <div className={styles.category_menus}>
                    {categories.map((c, index) => {
                        const k = c[0];
                        const v = c[1];
                        return (
                            <Link
                                href="/products/category/[category]"
                                as={`/products/category/${k}`}
                                key={index}
                            >
                                <div className={styles.category}>
                                    {v}
                                    {k === category && (
                                        <div className={styles.indicator} />
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={commons.section_container}>
                <ProductGrid products={products} />
            </div>
        </div>
    );
}

export default ProductsByCategory;

export async function getStaticProps({ params }) {
    const category = params.category;
    const apiUrl = process.env.NEXT_PUBLIC_API;
    const res = await axios.get(`${apiUrl}/products?category=${category}`);
    const data = res.data;

    return {
        props: {
            category: category,
            products: data.obj_product,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            // { params: { category: "top" } },
            // { params: { category: "pants" } },
            // { params: { category: "outer" } },
        ],
        fallback: true,
    };
}
