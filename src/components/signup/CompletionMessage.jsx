import React from "react";
import styles from "@styles/signup/Signup.module.css";

function CompletionMessage({ goNext }) {
    return (
        <>
            <div>회원가입을 축하드립니다!</div>
            <div onClick={() => goNext()} className={styles.confirm_btn}>
                확인
            </div>
        </>
    );
}

export default CompletionMessage;
