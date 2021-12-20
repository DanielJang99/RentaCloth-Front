import React from "react";
import styles from "@styles/howto/HowTo.module.css";
import commons from "@styles/commons/Commons.module.css";

function HowTo() {
    return (
        <div className={commons.section_container}>
            <div className={styles.page_container}>
                <div className={styles.step_title}>| STEP 1. 예약하기</div>
                <div className={styles.step_details}>
                    <div className={styles.step_detail}>
                        <div className={styles.step_detail_header}>
                            대여 상품 선택
                        </div>
                        <div className={styles.step_detail_img}>
                            <img
                                src="/step1_1.png"
                                alt="step1-1"
                                className={styles.step_img}
                            />
                        </div>
                    </div>
                    <div className={styles.step_detail}>
                        <div className={styles.step_detail_header}>
                            대여 일정 선택
                        </div>
                        <div className={styles.step_detail_img}>
                            <img
                                src="/step1_2.png"
                                alt="step1-2"
                                className={styles.step_img}
                            />
                        </div>
                    </div>
                    <div className={styles.step_detail}>
                        <div className={styles.step_detail_header}>
                            대여 장소 선택
                        </div>
                        <div className={styles.step_detail_img}>
                            <img
                                src="/step1_3.png"
                                alt="step1-3"
                                className={styles.step_img}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.step_title}>| STEP 2. 결제하기</div>
                <div className={styles.step_details}>
                    <div className={styles.step_d}>
                        <div className={styles.step_detail_header}>
                            예약 접수
                        </div>
                        <div className={styles.step_detail_img}>
                            <img
                                src="/step2_1.png"
                                alt="step2-1"
                                className={styles.step_img}
                            />
                        </div>
                    </div>
                    <div className={styles.step_detail}>
                        <div className={styles.step_detail_header}>
                            계좌 이체
                        </div>
                        <div className={styles.step_detail_img}>
                            <img
                                src="/step2_2.png"
                                alt="step2-2"
                                className={styles.step_img}
                            />
                        </div>
                    </div>
                    <div className={styles.step_detail}>
                        <div className={styles.step_detail_header}>
                            주문 승인
                        </div>
                        <div className={styles.step_detail_img}>
                            <img
                                src="/step2_3.png"
                                alt="step2-3"
                                className={styles.step_img}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.step_title}>| STEP 3. 수령하기</div>
                <div className={styles.step_desc}>
                    배정된 물품 보관함에
                    <span className={styles.green}> 제품과 대여 가방</span>을
                    수령하세요.
                </div>
                <div className={styles.gif_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/be423091518b9.gif"
                        alt="수령 gif"
                    />
                </div>

                <div className={styles.step_title}>| STEP 4. 반납하기</div>
                <div className={styles.step_desc}>
                    배정된 물품 보관함에 제품을
                    <span className={styles.green}> 대여 가방에 넣어 반납</span>
                    해주세요.
                </div>
                <div className={styles.gif_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/c01655bdd78d8.gif"
                        alt="택배 배송 gif"
                    />
                </div>
            </div>
        </div>
    );
}

export default HowTo;
