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
        name: "",
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
            const { _id, start_date, end_date, price } = res.data.rent;
            return setRentItem({
                _id: _id,
                start_date: start_date,
                end_date: end_date,
                price: price,
                name: res.data.name,
            });
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
                    재고 확인 후 <br /> 결제 방법을 안내 드립니다.
                </div>
                <div className={styles.done_hero_message}>
                    현재는 베타 서비스 기간으로,
                    <br />
                    상품 재고 확인 후 <b>카카오톡 채널</b>을 통해 결제 안내가
                    가능한 점 양해 부탁드립니다.
                    <br />
                    <br />
                    원활한 안내를 위해
                    <span className={styles.done_hero_message_highlight}>
                        {" "}
                        꼭 카카오톡 채널을 추가
                    </span>
                    해 주세요!
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
                        <div className={styles.step_3_info_key}>상품명</div>
                        <div className={styles.step_3_info_val}>
                            {rentItem.name}
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
            <a
                className={styles.next_step_btn}
                href="http://pf.kakao.com/_qdxgQK"
                target="_blank"
                onClick={() => handleClick()}
            >
                카카오톡 채널 추가하기
            </a>
        </div>
    );
}

export default StepDone;
