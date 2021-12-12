import React, { useState, useContext } from "react";
import AuthContext from "@src/states/AuthContext";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "@styles/navbar/Navbar.module.css";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

function Menu() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [authState, authActions] = useContext(AuthContext);

    const toggleDrawer = () => () => {
        setOpen(!open);
    };
    return (
        <div className={styles.menu_container}>
            <MenuIcon
                style={{ fill: "white", cursor: "pointer" }}
                onClick={toggleDrawer()}
            />
            <div className={styles.drawer_container}>
                <Drawer anchor={"left"} open={open} onClose={toggleDrawer()}>
                    <Box
                        sx={{
                            width: 250,
                        }}
                        role="presentation"
                        onClick={toggleDrawer()}
                    >
                        <div className={styles.drawer_menu_container}>
                            <div
                                className={styles.drawer_title}
                                onClick={() => router.push(`/`)}
                            >
                                Rentacloth
                            </div>
                            <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() => router.push(`/`)}
                                >
                                    렌타클로스 홈
                                </span>
                            </div>

                            <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() => router.push(`/intro`)}
                                >
                                    서비스 소개
                                </span>
                            </div>
                            <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() =>
                                        router.push(`/products/category/top`)
                                    }
                                >
                                    카테고리
                                </span>
                            </div>
                            <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() =>
                                        router.push(`/products/search`)
                                    }
                                >
                                    검색하기
                                </span>
                            </div>
                            <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() => router.push(`/howto`)}
                                >
                                    이용방법
                                </span>
                            </div>
                            <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() => router.push(`/download`)}
                                >
                                    다운로드
                                </span>
                            </div>
                            {/* <div className={styles.drawer_menu_wrapper}>
                                <span
                                    className={styles.drawer_menu}
                                    onClick={() =>
                                        router.push(`/mypage`)
                                    }
                                >
                                    내 정보
                                </span>
                            </div> */}
                            {!authState.logined && (
                                <div className={styles.drawer_menu_wrapper}>
                                    <span
                                        className={styles.drawer_menu}
                                        onClick={() => router.push(`/login`)}
                                    >
                                        로그인
                                    </span>
                                </div>
                            )}
                        </div>
                    </Box>
                </Drawer>
            </div>
        </div>
    );
}

export default Menu;