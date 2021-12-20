import React, { useState, useEffect, useContext } from "react";
import RentInfo from "@src/components/myinfo/RentInfo";
import AuthContext from "@src/states/AuthContext";
import NavbarContext from "@src/states/NavbarContext";
import commons from "@styles/commons/Commons.module.css";
import styles from "@styles/myinfo/MyInfo.module.css";
import { useRouter } from "next/router";
import api from "@src/_axios";
import classnames from "classnames";

function MyInfo() {
    const router = useRouter();
    const [authState, authActions] = useContext(AuthContext);
    const [navState, navActions] = useContext(NavbarContext);

    const [userRents, setUserRents] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        navActions.setHeader("내 정보");
    }, []);

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        const fetchUserRents = async () => {
            const res = await api.get(`/rents/user/${user_id}`);
            return setUserRents(res.data);
        };
        const fetchUser = async () => {
            const res = await api.get(`/users/${user_id}`);
            return setName(res.data.user.name);
        };
        fetchUserRents();
        fetchUser();
    }, []);

    return (
        <div
            className={classnames(
                commons.slide_from_right,
                commons.page_container,
            )}
        >
            <div className={styles.myinfo_header}>
                {name}님의 주문 내역({userRents.length})
            </div>
            {userRents.length > 0 ? (
                userRents.map((rent) => <RentInfo rent={rent} />)
            ) : (
                <div className={styles.myinfo_no_rents}>
                    아직 주문 내역이 없습니다.
                </div>
            )}
        </div>
    );
}

export default MyInfo;
