import React, { useContext, useState, useEffect } from "react";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import RentContext from "src/states/RentContext";
import classnames from "classnames";
import RentStepper from "@components/commons/RentSteps";
import Hero from "@components/rent/Hero";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { format } from "date-fns";
import api from "@src/_axios";
import router from "next/router";
import StationSelector from "../StationSelector";
import { getFormattedPrice } from "@src/utils/price";

function StepTwo({ product }) {
    const [rentContext, rentContextActions] = useContext(RentContext);
    const { start_date, end_date, price, days } = rentContext.rent;

    const [inputs, setInputs] = useState({
        receival_station: "",
        return_station: "",
    });
    const { receival_station, return_station } = inputs;

    useEffect(() => {
        if (
            (!start_date || !end_date || !price || !days) &&
            typeof window !== "undefined"
        ) {
            const step1_url = window.location.href.replace("step=2", "step=1");
            return router.push(step1_url);
        }
    }, [rentContext]);

    const handleClick = () => {
        rentContextActions.setRent({
            ...rentContext.rent,
            receival_station: receival_station,
            return_station: return_station,
        });
        return router.push(`/rent?step=3&product_id=${product._id}`);
    };

    return (
        <div
            className={classnames(
                commons.slide_from_right,
                commons.page_container,
            )}
        >
            <div className={commons.section_container}>
                <div className={styles.stepper_wrapper}>
                    <RentStepper step={1} />
                </div>
            </div>
            <Hero product={product} />
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                렌탈 일시
            </div>
            {start_date && end_date && (
                <div className={commons.white_bg}>
                    <div className={styles.rent_period_container}>
                        <div className={styles.calendar_icon}>
                            <EventAvailableIcon />
                        </div>
                        <div>
                            {format(start_date, "yyyy.MM.dd")} -{" "}
                            {format(end_date, "yyyy.MM.dd")}
                        </div>
                    </div>
                </div>
            )}
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                렌탈비
            </div>
            {price && days && (
                <div className={commons.white_bg}>
                    <div className={styles.rent_period_container}>
                        <span
                            className={styles.price_highlighter}
                        >{`${getFormattedPrice(price)}원`}</span>
                    </div>
                </div>
            )}
            <StationSelector inputs={inputs} setInputs={setInputs} />
            <button
                className={styles.next_step_btn}
                disabled={!(receival_station && return_station)}
                onClick={() => handleClick()}
            >
                렌탈하기
            </button>
        </div>
    );
}

export default StepTwo;
