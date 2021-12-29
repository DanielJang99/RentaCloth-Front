import React, { useState, useEffect, useContext } from "react";
import styles from "@styles/myinfo/MyInfo.module.css";
import commons from "@styles/commons/Commons.module.css";
import { useRouter } from "next/router";
import RentInfo from "@src/components/myinfo/RentInfo";
import api from "@src/_axios";
import AlimtalkBtn from "@src/components/commons/AlimtalkBtn";

function RentDetailAdmin() {
    const router = useRouter();
    const [userRents, setUserRents] = useState([]);

    useEffect(() => {
        const user_id = router.query.user_id;
        const fetchUserRents = async () => {
            const res = await api.get(`/rents/user/${user_id}`);
            return setUserRents(res.data);
        };
        fetchUserRents();
    }, []);
    return (
        <div className={commons.page_container}>
            {userRents.length > 0 ? (
                userRents.map((rent) => (
                    <>
                        <RentInfo rent={rent} />
                    </>
                ))
            ) : (
                <div className={styles.myinfo_no_rents}>
                    아직 주문 내역이 없습니다.
                </div>
            )}
        </div>
    );
}

export default RentDetailAdmin;
