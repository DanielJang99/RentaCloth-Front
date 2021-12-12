import Head from "next/head";
import Categories from "src/components/landing/Categories";
import Hero from "@components/landing/hero";
import styles from "@styles/Home.module.css";
import Search from "@components/landing/Search";
import SharingBtn from "@components/landing/SharingBtn";
import classnames from "classnames";
import commons from "@styles/commons/Commons.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>렌타클로스</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.main_hero_container}>
                    <Hero />
                </div>
                <div className={styles.main_items}>
                    <div className={styles.main_item}>
                        <div className={styles.main_item_title}>
                            카테고리별 상품
                        </div>
                        <Categories />
                    </div>
                    <div className={styles.main_item}>
                        <div className={styles.main_item_title}>검색</div>
                        <Search />
                    </div>
                    <div className={styles.main_item}>
                        <div className={styles.main_item_title}>
                            먼지 쌓일 옷으로 수익내자!
                        </div>
                        <SharingBtn />
                    </div>
                </div>
            </main>
        </div>
    );
}
