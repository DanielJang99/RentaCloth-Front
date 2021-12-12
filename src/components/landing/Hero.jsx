import React from "react";
import styles from "@styles/landing/Hero.module.css";
import { useRouter } from "next/router";

function Hero() {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/intro`);
    };
    return (
        <div className={styles.hero_container}>
            <img
                src="/rentacloth_icon.png"
                alt="santa icon"
                className={styles.santa}
            />
            <div
                className={styles.service_desc_btn}
                onClick={() => handleClick()}
            >
                {"서비스 소개 >"}
            </div>
        </div>
    );
}

export default Hero;
