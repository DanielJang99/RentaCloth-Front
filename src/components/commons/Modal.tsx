import React from "react";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled, Box } from "@mui/system";
import styles from "@styles/commons/Modal.module.css";
import ModalProps from "@src/types/modal.type";

const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

function Modal({
    content,
    isOpen,
    handleClose,
}: ModalProps): React.ReactElement {
    return (
        <ModalUnstyled
            className={styles.modal_container}
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={isOpen}
            onClose={handleClose}
            BackdropComponent={Backdrop}
        >
            <Box className={styles.modal_box}>{content}</Box>
        </ModalUnstyled>
    );
}

export default Modal;
