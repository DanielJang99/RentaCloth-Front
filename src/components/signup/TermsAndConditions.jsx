import React, { useEffect, useState } from "react";
import styles from "@styles/signup/TermsAndConditions.module.css";
import TermDetail from "./TermDetail";

function TermsAndConditions({ terms, setTerms, setTermsValidate }) {
    const details =
        "약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다.약관입니다. 약관입니다. 약관입니다. 약관입니다. 약관입니다. ";

    const {
        personalInfoCollection,
        rentaClothTermsAndConditions,
        minAge,
        marketing,
    } = terms;

    useEffect(() => {
        if (personalInfoCollection && rentaClothTermsAndConditions && minAge) {
            setTermsValidate(true);
            if (marketing) {
                checkAll(true);
            } else {
                setTerms({
                    ...terms,
                    all: false,
                });
            }
        } else {
            setTermsValidate(false);
            setTerms({
                ...terms,
                all: false,
            });
        }
    }, [
        personalInfoCollection,
        rentaClothTermsAndConditions,
        minAge,
        marketing,
    ]);

    const checkAll = (type) => {
        setTerms({
            all: type,
            personalInfoCollection: type,
            rentaClothTermsAndConditions: type,
            minAge: type,
            marketing: type,
        });
    };

    const checkTerm = (name) => {
        setTerms({
            ...terms,
            [name]: !terms[name],
        });
    };

    return (
        <div className={styles.terms_container}>
            <div className={styles.checks_container}>
                <div className={styles.checkbox_wrapper}>
                    <input
                        type="checkbox"
                        checked={terms.all}
                        onChange={() => checkAll(!terms.all)}
                        className={styles.checkbox}
                    />
                    <label className={styles.checkbox_label}>
                        약관 전체 동의
                    </label>
                </div>
            </div>
            <div className={styles.checks_container}>
                <div className={styles.checkbox_wrapper}>
                    <input
                        name="personalInfoCollection"
                        type="checkbox"
                        checked={terms.personalInfoCollection}
                        onChange={() => checkTerm("personalInfoCollection")}
                        className={styles.checkbox}
                    />
                    <label className={styles.checkbox_label}>
                        개인정보 수집 이용동의(필수)
                    </label>
                </div>
                <div className={styles.terms_modal_container}>
                    <TermDetail detail={details} />
                </div>
            </div>
            <div className={styles.checks_container}>
                <div className={styles.checkbox_wrapper}>
                    <input
                        name="rentaClothTermsAndConditions"
                        type="checkbox"
                        checked={terms.rentaClothTermsAndConditions}
                        onChange={() =>
                            checkTerm("rentaClothTermsAndConditions")
                        }
                        className={styles.checkbox}
                    />
                    <label className={styles.checkbox_label}>
                        renta-cloth 이용약관(필수)
                    </label>
                </div>
                <div className={styles.terms_modal_container}>
                    <TermDetail detail={details} />
                </div>
            </div>
            <div className={styles.checks_container}>
                <div className={styles.checkbox_wrapper}>
                    <input
                        name="minAge"
                        type="checkbox"
                        checked={terms.minAge}
                        onChange={() => checkTerm("minAge")}
                        className={styles.checkbox}
                    />
                    <label className={styles.checkbox_label}>
                        만 14세 미만 가입 제한(필수)
                    </label>
                </div>
                <div className={styles.terms_modal_container}>
                    <TermDetail detail={details} />
                </div>
            </div>
            <div className={styles.checks_container}>
                <div className={styles.checkbox_wrapper}>
                    <input
                        name="marketing"
                        type="checkbox"
                        checked={terms.marketing}
                        onChange={() => checkTerm("marketing")}
                        className={styles.checkbox}
                    />
                    <label className={styles.checkbox_label}>
                        마케팅 활용 및 광고성 정부 수신 동의 (선택)
                    </label>
                </div>
                <div className={styles.terms_modal_container}>
                    <TermDetail detail={details} />
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
