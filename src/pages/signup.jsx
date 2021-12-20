import React, { useState, useEffect, useContext } from "react";
import api from "@src/_axios/index";
import { useRouter } from "next/router";
import AuthContext from "@src/states/AuthContext";
import NavbarContext from "@src/states/NavbarContext";
import UserInfoForm from "@src/components/signup/UserInfoForm";
import TermsAndConditions from "@src/components/signup/TermsAndConditions";
import Modal from "@components/commons/Modal";
import CompletionMessage from "@components/signup/CompletionMessage";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/signup/Signup.module.css";
import classNames from "classnames";

function Signup() {
    const router = useRouter();

    const [authState, authActions] = useContext(AuthContext);
    const [navState, navActions] = useContext(NavbarContext);
    useEffect(() => {
        navActions.setHeader("회원 가입");
    }, []);

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [modalMessage, setModalMessage] = useState(null);
    const [inputs, setInputs] = useState({
        name: "",
        password: "",
        checkPassword: "",
        phone: "",
        email: "",
    });
    const [terms, setTerms] = useState({
        all: false,
        personalInfoCollection: false,
        rentaClothTermsAndConditions: false,
        minAge: false,
        marketing: false,
    });
    const [inputsValidate, setInputsValidate] = useState(false);
    const [termsValidate, setTermsValidate] = useState(false);

    const { name, password, checkPassword, phone, email } = inputs;
    const { marketing } = terms;

    const handleSubmit = async () => {
        const res = await api.post(`/users`, {
            name: name,
            password: password,
            email: email,
            phone: phone,
            isMarketing: marketing,
        });
        if (res.status == 201) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.user._id);
            authActions.setAuthState({
                logined: true,
            });
            setModalMessage(<CompletionMessage goNext={goNext} />);
        } else {
            setModalMessage(<div>{res.data.error}</div>);
        }
        return handleOpen();
    };

    const goNext = async () => {
        const { next } = router.query;
        return next && next !== "undefined"
            ? router.push(router.query.next)
            : router.push("/");
    };

    return (
        <>
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
                <UserInfoForm
                    inputs={inputs}
                    setInputs={setInputs}
                    setInputsValidate={setInputsValidate}
                />
                <div className={styles.login_btn_wrapper}>
                    <span>이미 회원이신가요? </span>
                    <span
                        className={styles.login_btn}
                        onClick={() =>
                            router.query.next
                                ? router.push(
                                      `/login?next=${router.query.next}`,
                                  )
                                : router.push("/login")
                        }
                    >
                        로그인하러 가기
                    </span>
                </div>
                <TermsAndConditions
                    terms={terms}
                    setTerms={setTerms}
                    setTermsValidate={setTermsValidate}
                />
                <Modal
                    content={modalMessage}
                    isOpen={openModal}
                    handleClose={handleClose}
                />
            </div>
            <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={!inputsValidate || !termsValidate}
                className={styles.signup_btn}
            >
                회원가입
            </button>
        </>
    );
}

export default Signup;
