import React from "react";
import styles from "@styles/landing/Categories.module.css";
import classnames from "classnames";
import { useRouter } from "next/router";

function Categories() {
    const router = useRouter();
    const handleClick = (type) => {
        router.push(`/products/category/${type}`);
    };
    return (
        <div className={styles.category_container}>
            <div
                className={classnames(styles.category, styles.top)}
                onClick={() => handleClick("top")}
            >
                <div className={styles.category_title}>상의</div>
            </div>
            <div
                className={classnames(styles.category, styles.bottom)}
                onClick={() => handleClick("pants")}
            >
                <div className={styles.category_title}>하의</div>
            </div>
            <div
                className={classnames(styles.category, styles.outer)}
                onClick={() => handleClick("outer")}
            >
                {/* <img src="/outer.jpg" alt="outer" /> */}
                <div className={styles.category_title}>아우터</div>
            </div>
        </div>
    );
}

export default Categories;
