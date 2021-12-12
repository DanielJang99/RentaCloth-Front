import React from "react";
import styles from "@styles/commons/Modal.module.css";
import { useRouter } from "next/router";

function LoginRequriedModal({ closeModal }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/login?next=${window.location.pathname}`);
    };
    return (
        <div className={styles.login_required_btn_container}>
            <div className={styles.login_required_msg}>
                로그인이 필요한 기능입니다. <br />
                로그인하시겠습니까?
            </div>
            <div className={styles.btns}>
                <div onClick={() => closeModal()} className={styles.close_btn}>
                    취소
                </div>
                <div onClick={() => handleClick()} className={styles.login_btn}>
                    로그인 하기
                </div>
            </div>
        </div>
    );
}

export default LoginRequriedModal;
