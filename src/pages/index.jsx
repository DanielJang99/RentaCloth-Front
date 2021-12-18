import Head from "next/head";
import Categories from "src/components/landing/Categories";
import Hero from "@components/landing/hero";
import styles from "@styles/Home.module.css";
import Search from "@components/landing/Search";
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
                    {/* <div className={styles.main_item}>
                        <div className={styles.main_item_title}>
                            먼지 쌓일 옷으로 수익내자!
                        </div>
                        <SharingBtn />
                    </div> */}
                </div>
                <div className={styles.main_register}>
                    <div className={styles.main_items}>
                        <div className={styles.main_register_title}>
                            상품 입고 신청
                        </div>
                        <div className={styles.main_register_subtitle}>
                            원하시는 상품이 없으신가요?
                        </div>
                        <div className={styles.musinsa}>
                            <div className={styles.musinsa_icon_wrapper}>
                                <img
                                    src="/musinsa_icon.png"
                                    alt="musinsa"
                                    className={styles.musinsa_icon}
                                />
                            </div>
                            <div className={styles.musinsa_desc}>
                                무신사 인기 상품은 신청만 하면 즉시 입고해
                                대여해 드려요!
                            </div>
                        </div>
                        <div className={styles.register_btn_wrapper}>
                            <a
                                className={styles.register_btn}
                                href="http://pf.kakao.com/_qdxgQK"
                                target="_blank"
                            >
                                {"입고 신청하기 >"}
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
