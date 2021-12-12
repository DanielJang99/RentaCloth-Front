import React, { useContext, useState, useEffect } from "react";
import RentContext from "src/states/RentContext";
import NavbarContext from "@src/states/NavbarContext";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import api from "@src/_axios";
import { useRouter } from "next/router";
import { getIsoDate } from "@src/utils/daterparser";

function StepDone({ product }) {
    const router = useRouter();

    const [navState, navActions] = useContext(NavbarContext);
    const [rentContext, rentContextActions] = useContext(RentContext);

    const [rentItem, setRentItem] = useState({
        _id: "",
        start_date: "",
        end_date: "",
        price: "",
    });

    useEffect(() => {
        navActions.setHeader("신청 완료");
    }, []);

    useEffect(() => {
        const fetchRent = async () => {
            const user_id = localStorage.getItem("user_id");
            const product_id = product._id;
            const res = await api.get(
                `/rents/user/${user_id}/product/${product_id}`,
            );
            return setRentItem(res.data);
        };
        rentContextActions.resetRent();
        fetchRent();
    }, []);

    const handleClick = () => {
        return router.push("/");
    };

    return (
        <div className={commons.slide_from_right}>
            <div className={styles.done_hero}>
                <div className={styles.done_hero_header}>
                    입금 확인 후 <br /> 주문이 완료됩니다.
                </div>
                <div className={styles.done_hero_message}>
                    렌타클로스를 이용해주셔서 진심으로 감사드립니다. <br />
                    현재 결제 모듈 점검 중으로 <br />
                    <span className={styles.done_hero_message_highlight}>
                        무통장입금 결제
                    </span>
                    만 가능한 점 양해부탁드립니다.
                </div>
            </div>
            <div className={styles.done_section_header}>결제 정보</div>
            <div className={commons.white_bg}>
                <div className={styles.step_3_info_container}>
                    <div className={styles.step_done_info_row}>
                        <div className={styles.step_3_info_key}>입금자명</div>
                        <div className={styles.step_3_info_val}>렌타클로스</div>
                    </div>
                    <div className={styles.step_done_info_row}>
                        <div className={styles.step_3_info_key}>은행</div>
                        <div className={styles.step_3_info_val}>국민은행</div>
                    </div>
                    <div className={styles.step_done_info_row}>
                        <div className={styles.step_3_info_key}>계좌번호</div>
                        <div className={styles.step_3_info_val}>
                            023502-42-209391
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.done_section_header}>주문 정보</div>
            <div className={commons.white_bg}>
                <div className={styles.step_3_info_container}>
                    <div className={styles.step_done_info_row}>
                        <div className={styles.step_3_info_key}>주문번호</div>
                        <div className={styles.step_3_info_val}>
                            {rentItem._id}
                        </div>
                    </div>
                    <div className={styles.step_done_info_row}>
                        <div className={styles.step_3_info_key}>렌탈기간</div>
                        <div className={styles.step_3_info_val}>
                            {getIsoDate(rentItem.start_date)} -{" "}
                            {getIsoDate(rentItem.end_date)}
                        </div>
                    </div>
                    <div className={styles.step_done_info_row}>
                        <div className={styles.step_3_info_key}>결제금액</div>
                        <div className={styles.step_3_info_val}>
                            {rentItem.price}원
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.next_step_btn} onClick={() => handleClick()}>
                홈으로 가기
            </div>
        </div>
    );
}

export default StepDone;
