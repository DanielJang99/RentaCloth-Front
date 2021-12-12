import React, { useEffect, useState } from "react";
import styles from "@styles/signup/UserInfoForm.module.css";

function UserInfoForm({ inputs, setInputs, setInputsValidate }) {
    const [passwordMsg, setPasswordMsg] = useState("");
    const { name, password, checkPassword, phone, email } = inputs;

    useEffect(() => {
        setInputsValidate(validateInputs());
    }, [name, password, checkPassword, phone, email]);

    const validateInputs = () => {
        return (
            name &&
            password &&
            checkPassword &&
            phone &&
            email &&
            password === checkPassword
        );
    };

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
        if (name === "checkPassword") {
            if (value.length > 0 && value !== password) {
                return setPasswordMsg("비밀번호가 일치하지 않습니다");
            } else {
                setPasswordMsg("");
            }
        }
    };

    return (
        <>
            <div className={styles.input_wrapper}>
                <div className={styles.input_label}>이름*</div>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={onChange}
                    value={name}
                    className={styles.text_input}
                />
            </div>
            <div className={styles.input_wrapper}>
                <div className={styles.input_label}>이메일*</div>
                <input
                    name="email"
                    placeholder="이메일"
                    type="email"
                    onChange={onChange}
                    value={email}
                    className={styles.text_input}
                />
            </div>
            <div className={styles.input_wrapper}>
                <div className={styles.input_label}>비밀번호*</div>
                <input
                    name="password"
                    placeholder="비밀번호"
                    // placeholder="비밀번호(숫자, 영문, 특수문자 조합 최소 8자)"
                    type="password"
                    onChange={onChange}
                    value={password}
                    className={styles.text_input}
                />
                <input
                    name="checkPassword"
                    placeholder="비밀번호 확인"
                    type="password"
                    onChange={onChange}
                    value={checkPassword}
                    className={styles.text_input}
                />
                <div className={styles.password_error_msg}>{passwordMsg}</div>
            </div>
            <div className={styles.input_wrapper}>
                <div className={styles.input_label}>전화번호*</div>
                <input
                    name="phone"
                    placeholder="전화번호"
                    type="email"
                    onChange={onChange}
                    value={phone}
                    className={styles.text_input}
                />
            </div>
        </>
    );
}

export default UserInfoForm;
