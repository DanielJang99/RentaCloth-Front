import React, { useState, useContext } from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/rent/Rent.module.css";
import Modal from "@components/commons/Modal";
import CalendarPicker from "@components/rent/CalendarPicker";
import RentContext from "src/states/RentContext";
import { format } from "date-fns";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

function DateSelector({ product_id }) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const [rentContext, rentContextActions] = useContext(RentContext);

    const handleClick = () => {
        handleOpen();
        // navigator.clipboard.writeText("이걸 복사하세요");
    };

    const { start_date, end_date } = rentContext.rent;

    return (
        <>
            <div className={commons.section_container}>
                <div className={styles.header}>렌탈 일시</div>
            </div>
            <div className={commons.white_bg} onClick={() => handleClick()}>
                <div className={styles.rental_date_modal_wrapper}>
                    {start_date && end_date ? (
                        <div className={styles.rent_period_container}>
                            <div className={styles.calendar_icon}>
                                <EventAvailableIcon />
                            </div>
                            <div>
                                {format(start_date, "yyyy.MM.dd")} -{" "}
                                {format(end_date, "yyyy.MM.dd")}
                            </div>
                        </div>
                    ) : (
                        <div style={{ padding: "20px 0" }}>
                            렌탈 기간 선택하기
                        </div>
                    )}
                </div>
            </div>
            <Modal
                content={
                    <CalendarPicker
                        product_id={product_id}
                        handleCloseModal={handleClose}
                    />
                }
                isOpen={openModal}
                handleClose={handleClose}
            />
        </>
    );
}

export default DateSelector;
