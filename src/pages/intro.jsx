import React, { useEffect } from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/intro/Intro.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Aos from "aos";
import "aos/dist/aos.css";

function Intro() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={commons.section_container}>
            <div className={styles.intro_section}>
                <div className={commons.desc_title} data-aos="fade-right">
                    | 소개
                </div>
                <div className={styles.desc} data-aos="fade-up">
                    렌타클로스는
                    <span className={styles.green}> 남성 패션 렌탈 서비스</span>
                    예요.
                    <b> 언제든 원하는 옷을 예약</b>하면{" "}
                    <span className={styles.green}>택배 배송</span> 혹은 근처{" "}
                    <span className={styles.green}>무인 보관함에서 즉시 </span>
                    제품을 받아보실 수 있어요.
                </div>
            </div>
            <div className={styles.intro_section}>
                <div className={styles.quote_container} data-aos="fade-up">
                    <div className={styles.quote_mark}>"</div>
                    <div className={styles.quote}>
                        어떤 <b>의류 상품</b>들을 <br />
                        대여할 수 있나요?
                    </div>
                    <div className={styles.quote_mark}>"</div>
                </div>
                <div className={styles.desc} data-aos="fade-up">
                    렌타클로스에서 제공하는 제품들은 <b>20</b>대 남성들이{" "}
                    <span className={styles.green}>
                        가장 선호하는 인기 편집숍의 베스트 브랜드 제품
                    </span>
                    들로 <span className={styles.green}>무신사</span> 등에서
                    직접 사입하고 있어요.
                </div>
            </div>
            <div className={styles.intro_section}>
                <div className={styles.quote_container} data-aos="fade-up">
                    <div className={styles.quote_mark}>"</div>
                    <div className={styles.quote}>
                        <b>얼마 동안</b>
                        <br />
                        대여할 수 있나요?
                    </div>
                    <div className={styles.quote_mark}>"</div>
                </div>
                <div className={styles.desc} data-aos="fade-up">
                    제품은 수령일로부터
                    <span className={styles.green}> 최소 2일 ~ 최대 14일</span>
                    까지 이용하실 수 있어요.{" "}
                    <span className={styles.green}>
                        대여 일수가 길어질수록 하루 평균 대여비가 저렴
                    </span>
                    해져요!
                </div>
                <div className={styles.image_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/7c0f4ebe48931.png"
                        alt=""
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.intro_section}>
                <div className={commons.desc_title} data-aos="fade-right">
                    | 의류 관리 방법
                </div>
                <div className={styles.desc} data-aos="fade-up">
                    렌타클로스의 모든 의류는{" "}
                    <span className={styles.green}>
                        국내 세탁 업계 1위 크린토피아 청량리한신점
                    </span>
                    과의 <b>제휴</b>를 통해{" "}
                    <span className={styles.green}>고품질의 세탁</span> 과정을
                    거쳐요.
                </div>
            </div>
            <div className={styles.intro_section}>
                <div
                    className={styles.checkbox_container}
                    data-aos="fade-right"
                >
                    <CheckBoxIcon />
                    <div className={styles.checkbox_label}>상품 검수</div>
                </div>
                <div className={styles.checkbox_desc} data-aos="fade-up">
                    모든 제품은 꼼꼼하게 검수를 진행해요.
                </div>
                <div className={styles.image_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/4395e87836165.png"
                        alt=""
                        className={styles.image}
                    />
                    <div className={styles.image_label}>
                        섬세하게 진행되는 크린토피아의 상품 검수과정
                    </div>
                </div>
            </div>
            <div className={styles.intro_section}>
                <div
                    className={styles.checkbox_container}
                    data-aos="fade-right"
                >
                    <CheckBoxIcon />
                    <div className={styles.checkbox_label}>제품 관리</div>
                </div>
                <div className={styles.checkbox_desc} data-aos="fade-up">
                    제품의 작은 오염도 전문가가 직접 관리하여 새제품같이
                    준비돼요.
                </div>
                <div className={styles.image_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/1a975cd1065e3.png"
                        alt=""
                        className={styles.image}
                    />
                    <div className={styles.image_label}>
                        크린토피아 R&D 연구센터를 통해 검증된 오염 특화 세탁
                        용제
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/d5a69fc5f7a7b.png"
                        alt=""
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.intro_section}>
                <div
                    className={styles.checkbox_container}
                    data-aos="fade-right"
                >
                    <CheckBoxIcon />
                    <div className={styles.checkbox_label}>
                        드라이클리닝 및 재포장
                    </div>
                </div>
                <div className={styles.checkbox_desc} data-aos="fade-up">
                    검수가 끝난 제품들은 최첨단 자동화 설비를 통해 세탁 후
                    포장돼요.
                </div>
                <div className={styles.image_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/cd6e2c007a764.png"
                        alt=""
                        className={styles.image}
                    />
                </div>
                <div className={styles.image_wrapper}>
                    <img
                        src="https://cdn.imweb.me/upload/S2021070487de368c7e8b8/33fcd2e761dc4.png"
                        alt=""
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
}

export default Intro;
