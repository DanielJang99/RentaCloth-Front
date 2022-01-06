import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Modal from "@components/commons/Modal";
import { useRouter } from "next/router";

function IconShare() {
    const { asPath } = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (): void => {
        handleOpen();
        navigator.clipboard.writeText(`https://rentacloth.net${asPath}`);
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
