import React from "react";
import styles from "@styles/landing/Hero.module.css";
import { useRouter } from "next/router";

function Hero(): React.ReactElement {
    const router = useRouter();
    const handleClick = (link: string): void => {
        router.push(`/${link}`);
    };
    return (
        <div className={styles.hero_container}>
            <img
                src="/renta_white.png"
                alt="santa icon"
                className={styles.santa}
            />
            <div className={styles.btn_container}>
                <div
                    className={styles.service_desc_btn}
                    onClick={() => handleClick("intro")}
                >
                    {"서비스 소개 >"}
                </div>
                <div
                    className={styles.service_desc_btn}
                    onClick={() => handleClick("howto")}
                >
                    {"이용 방법 >"}
                </div>
            </div>
        </div>
    );
}

export default Hero;
