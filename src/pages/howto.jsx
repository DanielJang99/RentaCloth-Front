import React from "react";
import styles from "@styles/howto/HowTo.module.css";
import commons from "@styles/commons/Commons.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function HowTo() {
    return (
        <div className={commons.section_container}>
            <div className={styles.page_container}>
                <div className={styles.step_title}>| STEP 1. 예약하기</div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc}>대여 상품 선택</div>
                    </div>
                    <div className={styles.step_desc}>
                        <span className={styles.green}>원하는 상품 </span>
                        선택
                    </div>
                </div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc_checkbox}>
                            대여 일정 선택
                        </div>
                    </div>
                    <div className={styles.step_desc}>
                        <span className={styles.green}>
                            예약 가능 일정 확인 후{" "}
                        </span>
                        대여 날짜 선택
                    </div>
                </div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc_checkbox}>
                            대여 방법 선택
                        </div>
                    </div>
                    <div className={styles.step_desc}>
                        <span className={styles.green}>
                            택배 배송 / 직접 수거{" "}
                        </span>
                        선택
                    </div>
                </div>
                <div className={styles.step_title}>| STEP 2. 수령하기</div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc_checkbox}>
                            택배 선택
                        </div>
                    </div>
                    <div className={styles.step_desc}>
                        박스에서
                        <span className={styles.green}>
                            {" "}
                            제품과 포장용 스티커
                        </span>
                        를 수령하세요.
                    </div>
                </div>
                <div className={styles.gif_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/fddc9518268df.gif"
                        alt="택배 배송 gif"
                    />
                </div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc_checkbox}>
                            직접 수령
                        </div>
                    </div>
                    <div className={styles.step_desc}>
                        <span className={styles.green}>배정된 물품 보관함</span>
                        에서
                        <span className={styles.green}> 제품과 대여 가방</span>
                        을 수령하세요.
                    </div>
                </div>
                <div className={styles.gif_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/be423091518b9.gif"
                        alt="택배 배송 gif"
                    />
                </div>
                <div className={styles.step_title}>| STEP 3. 반납하기</div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc_checkbox}>
                            택배 배송
                        </div>
                    </div>
                    <div className={styles.step_desc}>
                        박스를
                        <span className={styles.green}>
                            {" "}
                            포장용 스티커로 포장해{" "}
                        </span>
                        제품을 반납해 주세요.
                    </div>
                </div>
                <div className={styles.gif_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/4c031785ae729.gif"
                        alt="택배 배송 gif"
                    />
                </div>
                <div className={styles.step_detail}>
                    <div className={styles.step_checkbox}>
                        <div className={styles.checkbox_wrapper}>
                            <CheckBoxIcon />
                        </div>
                        <div className={styles.step_desc_checkbox}>
                            직접 수령
                        </div>
                    </div>
                    <div className={styles.step_desc}>
                        배정된 물품 보관함에
                        <span className={styles.green}>
                            {" "}
                            제품을 대여 가방에 넣어{" "}
                        </span>
                        반납해 주세요.
                    </div>
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
