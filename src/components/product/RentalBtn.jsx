import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@styles/product/Rental.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AuthContext from "@src/states/AuthContext";
import classNames from "classnames";
import Modal from "@components/commons/Modal";
import LoginRequriedModal from "../commons/LoginRequriedModal";

const StyledBox = styled(Box)(() => ({
    backgroundColor: "#fff",
}));

function RentalBtn(props) {
    const router = useRouter();
    const { window, product_id, isAvailable } = props;

    const [authState, authActions] = useContext(AuthContext);

    useEffect(() => {
        console.log(authState);
    }, [authState]);

    const [open, setOpen] = useState(false);

    const toggleCta = (newOpen) => () => {
        setOpen(newOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {typeof window !== "undefined" &&
                (authState.logined && isAvailable ? (
                    <>
                        <div
                            className={styles.rent_btn_wrapper}
                            onClick={() => setOpen(true)}
                        >
                            렌탈 신청하기
                        </div>
                        <Drawer
                            container={container}
                            anchor="bottom"
                            open={open}
                            onClose={toggleCta(false)}
                            onOpen={toggleCta(true)}
                            disableSwipeToOpen={false}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            className={styles.rent_drawer}
                            classes={{
                                paper: styles.rent_drawer_paper,
                            }}
                        >
                            <StyledBox className={styles.rent_modal_box}>
                                <div className={styles.form_container}>
                                    <FormControl fullWidth>
                                        <InputLabel id="color_label">
                                            컬러 선택
                                        </InputLabel>
                                        <Select
                                            labelId="color_label"
                                            id="color_label"
                                            // value={10}
                                            label="color_label"
                                            // onChange={handleChange}
                                            className={styles.rent_select}
                                        >
                                            <MenuItem value={"default"}>
                                                기본
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={styles.form_container}>
                                    <FormControl fullWidth>
                                        <InputLabel id="size_label">
                                            사이즈 선택
                                        </InputLabel>
                                        <Select
                                            labelId="size_label"
                                            id="size_label"
                                            // value={10}
                                            label="size_label"
                                            // onChange={handleChange}
                                            className={styles.rent_select}
                                        >
                                            <MenuItem value={"default"}>
                                                기본
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </StyledBox>
                            <div className={styles.modal_btn_container}>
                                <div className={styles.modal_cart_btn}>
                                    장바구니
                                </div>
                                <div
                                    className={styles.rent_btn_wrapper}
                                    onClick={() =>
                                        router.push(
                                            `/rent?step=1&product_id=${product_id}`,
                                        )
                                    }
                                >
                                    렌탈하기
                                </div>
                            </div>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <div
                            className={classNames(
                                styles.rent_btn_wrapper,
                                styles.disabled,
                            )}
                            onClick={toggleCta(true)}
                        >
                            렌탈 신청하기
                        </div>
                        <Modal
                            content={
                                !authState.logined ? (
                                    <LoginRequriedModal
                                        closeModal={toggleCta(false)}
                                    />
                                ) : (
                                    <div>
                                        해당 제품은 현재 대여가 불가능합니다.
                                    </div>
                                )
                            }
                            isOpen={open}
                            handleClose={toggleCta(false)}
                        />
                    </>
                ))}
        </>
    );
}

export default RentalBtn;
