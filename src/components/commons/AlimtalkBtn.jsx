import React, { useState } from "react";
import Modal from "@components/commons/Modal";

function AlimtalkBtn() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const handleClick = () => {
        handleOpen();
    };
    return (
        <div>
            <div onClick={() => handleClick()}>hi</div>
            <Modal
                isOpen={openModal}
                handleClose={handleClose}
                content={<div>modal</div>}
            />
        </div>
    );
}

export default AlimtalkBtn;
