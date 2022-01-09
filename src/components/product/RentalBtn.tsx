import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@styles/product/Rental.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useAuth } from "@src/states/auth.context";
import classNames from "classnames";
import Modal from "@components/commons/Modal";
import LoginRequriedModal from "../commons/LoginRequriedModal";

const StyledBox = styled(Box)(() => ({
    backgroundColor: "#fff",
}));

interface RentalBtnInterface {
    product_id: string;
    isAvailable: boolean;
    colors: string[];
    sizes: string[];
    // window: any;
}

function RentalBtn({
    product_id,
    isAvailable,
    colors,
    sizes,
}: RentalBtnInterface): React.ReactElement {
    const router = useRouter();
    // const { window, product_id, isAvailable, colors, sizes } = props;

    const { logined } = useAuth();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
        color: undefined,
        size: undefined,
    });

    const toggleCta = (newOpen: boolean) => (): void => {
        setOpen(newOpen);
    };

    const handleChange = (event: SelectChangeEvent<unknown>, type: string) => {
        const val = event.target.value;
        setInput({
            ...input,
            [type]: val,
        });
    };

    const container =
        typeof window !== "undefined" ? () => document.body : undefined;

    return (
        <>
            {typeof window !== "undefined" &&
                (logined && isAvailable ? (
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
                                            label="color_label"
                                            onChange={(e) =>
                                                handleChange(e, "color")
                                            }
                                            className={styles.rent_select}
                                        >
                                            {colors.length > 0 ? (
                                                colors.map((color) => {
                                                    return (
                                                        <MenuItem value={color}>
                                                            {color}
                                                        </MenuItem>
                                                    );
                                                })
                                            ) : (
                                                <MenuItem value={"기본"}>
                                                    기본
                                                </MenuItem>
                                            )}
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
                                            label="size_label"
                                            onChange={(e) =>
                                                handleChange(e, "size")
                                            }
                                            className={styles.rent_select}
                                        >
                                            {sizes.length > 0 ? (
                                                sizes.map((size) => {
                                                    return (
                                                        <MenuItem value={size}>
                                                            {size}
                                                        </MenuItem>
                                                    );
                                                })
                                            ) : (
                                                <MenuItem value={"기본"}>
                                                    기본
                                                </MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </StyledBox>
                            <div className={styles.modal_btn_container}>
                                {/* <div className={styles.modal_cart_btn}>
                                    장바구니
                                </div> */}
                                <div
                                    className={
                                        input.color && input.size
                                            ? styles.rent_btn_wrapper
                                            : classNames(
                                                  styles.rent_btn_wrapper,
                                                  styles.disabled,
                                                  styles.unclickable,
                                              )
                                    }
                                    onClick={() =>
                                        router.push(
                                            `/rent?step=1&product_id=${product_id}&color=${input.color}&size=${input.size}`,
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
                                !logined ? (
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
