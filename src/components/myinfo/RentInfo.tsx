import React from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/myinfo/MyInfo.module.css";
import { getFormattedDate } from "@src/utils/date";
import { getFormattedPrice } from "@src/utils/price";
import { useRouter } from "next/router";
import RentDetail from "@src/types/rent_detail.type";

function RentInfo({ rent }: { rent: RentDetail }) {
    const router = useRouter();
    const handleClick = () => {
        return router.push(`/products/${rent.product_id}`);
    };

    return (
        <div className={styles.section_container}>
            <div className={commons.white_bg}>
                <div className={styles.created_date}>
                    {getFormattedDate(rent.createdAt)}
                </div>
                <hr className={styles.divider} />
                <div
                    className={styles.rent_detail_container}
                    onClick={() => handleClick()}
                >
                    <div className={styles.thumb}>
                        <img
                            src={rent.product.thumbnail}
                            alt="thumbnail"
                            className={styles.thumbnail}
                        />
                    </div>
                    <div className={styles.product_detail}>
                        <div className={styles.product_brand}>
                            {rent.product.brand}
                        </div>
                        <div className={styles.product_name}>
                            {rent.product.name}
                        </div>
                        <div className={styles.clothing_detail}>
                            {rent.color}, {rent.size}
                        </div>
                        <div className={styles.price}>
                            {getFormattedPrice(rent.price)}원
                        </div>
                        <div className={styles.rent_date}>
                            {getFormattedDate(rent.start_date)}(
                            {rent.receival_station}) -{" "}
                            {getFormattedDate(rent.end_date)}(
                            {rent.return_station})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RentInfo;
