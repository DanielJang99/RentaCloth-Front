import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import Modal from "@components/commons/Modal";

function IconShare() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {
        handleOpen();
        navigator.clipboard.writeText("이걸 복사하세요");
    };

    return (
        <>
            {typeof window !== "undefined" && (
                <>
                    <button
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                        }}
                        onClick={() => handleClick()}
                    >
                        <ShareIcon fontSize={"small"} />
                    </button>
                    <Modal
                        content={
                            <span>
                                URL이 복사되었습니다.
                                <br />
                                공유할 곳에 붙여넣기 해주세요.
                            </span>
                        }
                        isOpen={open}
                        handleClose={handleClose}
                    />
                </>
            )}
        </>
    );
}

export default IconShare;
