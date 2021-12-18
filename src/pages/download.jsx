import React, { useState } from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/intro/Intro.module.css";
import Modal from "@components/commons/Modal";

function Download() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {
        handleOpen();
        navigator.clipboard.writeText("http://rentacloth.net");
    };
    return (
        <div className={commons.section_container}>
            <div className={styles.intro_section}>
                <div className={commons.desc_title}>| Android</div>
                <div className={styles.desc_title}>
                    <div className={styles.desc_step}>
                        1. <b>크롬</b>에서 렌타클로스 홈페이지 주소를
                        입력해주세요.
                        <br />
                        <span
                            style={{
                                color: "blue",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                            onClick={() => handleClick()}
                        >
                            (여기를 눌러서 링크를 복사하세요)
                        </span>
                    </div>
                    <div className={styles.desc_step}>
                        2. 우측 상단 아이콘을 눌러주세요.
                    </div>
                    <div className={styles._wrapper}>
                        <img
                            src="/android1.jpg"
                            alt="ios_3"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.desc_step}>
                        3. [다운로드]를 눌러주세요.
                    </div>
                    <div className={styles._wrapper}>
                        <img
                            src="/android2.jpg"
                            alt="ios_3"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.intro_section}>
                <div className={commons.desc_title}>| iOS</div>
                <div className={styles.desc_title}>
                    <div className={styles.desc_step}>
                        1. <b>사파리</b>에서 렌타클로스 홈페이지 주소를
                        입력해주세요. <br />
                        <span
                            style={{
                                color: "blue",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                            onClick={() => handleClick()}
                        >
                            (여기를 눌러서 링크를 복사하세요)
                        </span>
                    </div>
                    <div className={styles.desc_step}>
                        2. 메뉴 중앙에 위치한 아이콘을 눌러주세요.
                    </div>
                    <div className={styles._wrapper}>
                        <img
                            src="/ios1.jpg"
                            alt="ios_2"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.desc_step}>
                        3. [홈 화면에 추가]를 눌러주세요.
                    </div>
                    <div className={styles._wrapper}>
                        <img
                            src="/ios2.jpg"
                            alt="ios_3"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
            <Modal
                content={<span>URL이 복사되었습니다.</span>}
                isOpen={open}
                handleClose={handleClose}
            />
        </div>
    );
}

export default Download;
