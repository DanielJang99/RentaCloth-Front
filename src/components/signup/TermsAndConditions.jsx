import React, { useEffect, useState } from "react";
import styles from "@styles/signup/TermsAndConditions.module.css";
import TermDetail from "./TermDetail";

function TermsAndConditions({ terms, setTerms, setTermsValidate }) {
    const { personalInfoCollection, rentaClothTermsAndConditions } = terms;

    useEffect(() => {
        if (personalInfoCollection && rentaClothTermsAndConditions) {
            setTermsValidate(true);
            checkAll(true);
        } else {
            setTermsValidate(false);
            setTerms({
                ...terms,
                all: false,
            });
        }
    }, [personalInfoCollection, rentaClothTermsAndConditions]);

    const checkAll = (type) => {
        setTerms({
            all: type,
            personalInfoCollection: type,
            rentaClothTermsAndConditions: type,
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
                        name="rentaClothTermsAndConditions"
                        type="checkbox"
                        checked={terms.rentaClothTermsAndConditions}
                        onChange={() =>
                            checkTerm("rentaClothTermsAndConditions")
                        }
                        className={styles.checkbox}
                    />
                    <label className={styles.checkbox_label}>
                        이용약관 동의(필수)
                    </label>
                </div>
                <div className={styles.terms_modal_container}>
                    <TermDetail term={"termsOfUse"} />
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
                        개인정보 수집 및 이용동의(필수)
                    </label>
                </div>
                <div className={styles.terms_modal_container}>
                    <TermDetail term={"termsOfPersonalInfo"} />
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
