import React, { useContext, useEffect, useState } from "react";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import Hero from "@components/rent/Hero";
import RentStepper from "@components/commons/RentSteps";
import DateSelector from "@components/rent/DateSelector";
import RentContext from "src/states/RentContext";
import classnames from "classnames";
import { useRouter } from "next/router";

function StepOne({ product }) {
    const router = useRouter();

    const [rentContext, rentContextActions] = useContext(RentContext);
    const { start_date, end_date } = rentContext.rent;

    const goNextStep = () => {
        return router.push(`/rent?step=2&product_id=${product._id}`);
    };

    return (
        <div
            className={classnames(
                commons.page_container,
                commons.slide_from_right,
            )}
        >
            <div className={commons.section_container}>
                <div className={styles.stepper_wrapper}>
                    <RentStepper step={0} />
                </div>
            </div>
            <Hero product={product} />
            <DateSelector product_id={product._id} />
            {start_date && end_date && (
                <div
                    className={styles.next_step_btn}
                    onClick={() => goNextStep()}
                >
                    다음 단계로 이동하기
                </div>
            )}
        </div>
    );
}

export default StepOne;
