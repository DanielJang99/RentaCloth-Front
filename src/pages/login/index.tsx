import React, { useState, useEffect } from "react";
import { useNavbar } from "@src/states/navbar.context";
import { useAuth } from "@src/states/auth.context";
import api from "@src/_axios/index";
import { useRouter } from "next/router";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/login/Login.module.css";
import classNames from "classnames";

function Login() {
    const router = useRouter();
    const { setAuthState } = useAuth();

    const { setHeader } = useNavbar();
    useEffect(() => {
        setHeader("로그인");
    }, []);

    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        const res = await api.post(`/users/login`, {
            email: email,
            password: password,
        });
        if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.user._id);
            setAuthState({
                logined: true,
            });
            return goNext();
        } else {
            return setErrorMessage(true);
        }
    };

    const goNext = () => {
        const { next } = router.query;
        return next && next !== "undefined"
            ? router.push(next.toString())
            : router.push("/");
    };

    const goToSignup = () => {
        return router.push(`/signup?next=${router.query.next}`);
    };

    return (
        <div
            className={classNames(
                commons.section_container,
                commons.slide_from_right,
            )}
        >
            <div className={styles.image_wrapper}>
                <img
                    src="/rentacloth_icon.png"
                    alt="rentacloth icon"
                    style={{ width: "100%" }}
                />
            </div>
            <input
                className={styles.text_input}
                name="email"
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={onChange}
                value={email}
            />
            <input
                className={styles.text_input}
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChange}
                value={password}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />
            {errorMessage && (
                <div className={styles.error_msg}>
                    로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.
                </div>
            )}
            <button
                type="button"
                onClick={() => handleSubmit()}
                className={styles.login_btn}
            >
                로그인
            </button>
            <div className={styles.signup_btn_wrapper}>
                아직 회원이 아니신가요?&nbsp;
                <span
                    onClick={() => goToSignup()}
                    className={styles.signup_btn}
                >
                    회원가입하러 가기
                </span>
            </div>
        </div>
    );
}

export default Login;
