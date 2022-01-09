import React, { useEffect, useState } from "react";
import styles from "@styles/signup/TermsAndConditions.module.css";
import TermDetail from "./TermDetail";
import { Term, Terms } from "@src/types/terms.type";

interface TermsAndConditionsProps {
    terms: Terms;
    setTerms: React.Dispatch<React.SetStateAction<Terms>>;
    setTermsValidate: React.Dispatch<React.SetStateAction<boolean>>;
}

function TermsAndConditions({
    terms,
    setTerms,
    setTermsValidate,
}: TermsAndConditionsProps) {
    const { termsOfUse, termsOfPersonalInfo } = terms;

    useEffect(() => {
        if (termsOfUse && termsOfPersonalInfo) {
            setTermsValidate(true);
            checkAll(true);
        } else {
            setTermsValidate(false);
            setTerms({
                ...terms,
                all: false,
            });
        }
    }, [termsOfUse, termsOfPersonalInfo]);

    const checkAll = (type: boolean) => {
        return setTerms({
            all: type,
            termsOfUse: type,
            termsOfPersonalInfo: type,
        });
    };

    const checkTerm = (name: Term) => {
        return setTerms({
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
                        name="termsOfUse"
                        type="checkbox"
                        checked={termsOfUse}
                        onChange={() => checkTerm("termsOfUse")}
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
                        name="termsOfPersonalInfo"
                        type="checkbox"
                        checked={termsOfPersonalInfo}
                        onChange={() => checkTerm("termsOfPersonalInfo")}
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
