import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { useRent } from "src/states/RentContext";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import classnames from "classnames";
import RentStepper from "@components/commons/RentSteps";
import Hero from "@components/rent/Hero";
import api from "@src/_axios";
import { format } from "date-fns";
import Product from "@src/types/product.type";
import { getFormattedDate } from "@src/utils/date";

function StepThree({ product }: { product: Product }): React.ReactElement {
    const router = useRouter();
    const { rent } = useRent();

    const {
        color,
        size,
        start_date,
        end_date,
        price,
        days,
        return_station,
        receival_station,
    } = rent;

    const [name, setName] = useState("");

    useEffect(() => {
        if (
            (!start_date || !end_date || !price || !days) &&
            typeof window !== "undefined"
        ) {
            const step1_url = window.location.href.replace("step=3", "step=1");
            router.push(step1_url);
        }
    }, [rent]);

    useEffect(() => {
        const fetchUser = async () => {
            const user_id = localStorage.getItem("user_id");
            const res = await api.get(`/users/${user_id}`);
            return setName(res.data.user.name);
        };
        fetchUser();
    }, []);

    const handleClick = async () => {
        const user_id = localStorage.getItem("user_id");
        const res = await api.post(`/rents`, {
            product_id: product._id,
            user_id: user_id,
            color: color,
            size: size,
            days: days,
            price: price,
            start_date: start_date,
            end_date: end_date,
            receival_station: receival_station,
            return_station: return_station,
            status: "pending",
        });
        if (res.status === 201) {
            await api.post(`/alimtalk`, {
                template_code: "rentOrder2",
                user_id: user_id,
                include_admin: true,
                data: {
                    rent_id: res.data._id,
                },
            });
            const next_url = window.location.href.replace(
                "step=3",
                "step=done",
            );
            return router.push(next_url);
        } else {
            if (res.status === 400) {
                if (confirm(res.data.error)) {
                    return router.push("/");
                }
            }
        }
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
                    <RentStepper step={2} />
                </div>
            </div>
            <div className={styles.step_3_header}>상세 내역</div>
            <Hero product={product} />
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                상품 정보
            </div>
            <div className={commons.white_bg}>
                <div className={styles.step_3_info_container}>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>컬러</div>
                        <div className={styles.step_3_info_val}>{color}</div>
                    </div>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>사이즈</div>
                        <div className={styles.step_3_info_val}>{size}</div>
                    </div>
                </div>
            </div>
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                수령처 정보
            </div>
            <div className={commons.white_bg}>
                <div className={styles.step_3_info_container}>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>
                            받으시는 분
                        </div>
                        <div className={styles.step_3_info_val}>{name}</div>
                    </div>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>수령처</div>
                        <div className={styles.step_3_info_val}>
                            {receival_station}
                        </div>
                    </div>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>수령일</div>
                        <div className={styles.step_3_info_val}>
                            {getFormattedDate(start_date)}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                반납처 정보
            </div>
            <div className={commons.white_bg}>
                <div className={styles.step_3_info_container}>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>
                            보내시는 분
                        </div>
                        <div className={styles.step_3_info_val}>{name}</div>
                    </div>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>수령처</div>
                        <div className={styles.step_3_info_val}>
                            {return_station}
                        </div>
                    </div>
                    <div className={styles.step_3_info_row}>
                        <div className={styles.step_3_info_key}>수령일</div>
                        <div className={styles.step_3_info_val}>
                            {getFormattedDate(end_date)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.next_step_btn} onClick={() => handleClick()}>
                결제하기
            </div>
        </div>
    );
}

export default StepThree;
