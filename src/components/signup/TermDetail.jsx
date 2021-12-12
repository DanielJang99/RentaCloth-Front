import React, { useState } from "react";
import Modal from "@components/commons/Modal";
import styles from "@styles/signup/TermsAndConditions.module.css";

function TermDetail({ detail }) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <>
            <span onClick={() => handleOpen()}>약관 보기</span>
            <Modal
                content={<div className={styles.term_detail}>{detail}</div>}
                isOpen={openModal}
                handleClose={handleClose}
            />
        </>
    );
}

export default TermDetail;
