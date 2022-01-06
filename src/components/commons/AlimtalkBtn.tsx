import React, { useState } from "react";
import Modal from "@components/commons/Modal";

function AlimtalkBtn(): React.ReactElement {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const handleClick = () => {
        handleOpen();
    };
    return (
        <div>
            <div onClick={() => handleClick()}>알림톡 발송</div>
            <Modal
                isOpen={openModal}
                handleClose={handleClose}
                content={<div>modal</div>}
            />
        </div>
    );
}

export default AlimtalkBtn;
