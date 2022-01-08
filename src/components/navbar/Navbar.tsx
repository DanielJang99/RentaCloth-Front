import React from "react";
import styles from "../../styles/navbar/Navbar.module.css";
import { useNavbar } from "@src/states/NavbarContext";

import Menu from "@components/navbar/Menu";

function Navbar(): React.ReactElement {
    const { header } = useNavbar();
    return (
        <div className={styles.navbar_container}>
            <Menu />
            <div className={styles.navbar_main}>{header}</div>
            {/* <Cart /> */}
        </div>
    );
}

export default Navbar;
