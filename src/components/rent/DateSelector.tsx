import React, { useState } from "react";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/rent/Rent.module.css";
import Modal from "@components/commons/Modal";
import Calendar from "@src/components/rent/Calendar";
import { useRent } from "@src/states/rent.context";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { getFormattedDate, getWeekDay } from "@src/utils/date";

function DateSelector({
    product_id,
}: {
    product_id: string;
}): React.ReactElement {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const { rent } = useRent();
    const { start_date, end_date } = rent;

    const handleClick = (): void => {
        handleOpen();
    };

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
                                {getFormattedDate(start_date)}(
                                {getWeekDay(start_date)}) -{" "}
                                {getFormattedDate(end_date)}(
                                {getWeekDay(end_date)})
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
                    <Calendar
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
