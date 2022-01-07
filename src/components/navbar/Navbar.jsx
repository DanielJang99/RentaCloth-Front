import React, { useContext } from "react";
import styles from "../../styles/navbar/Navbar.module.css";
import Cart from "./Cart";
import { useNavbar } from "@src/states/NavbarContext";

import Menu from "@components/navbar/Menu";

function Navbar() {
    const { header } = useNavbar();
    // const [state, actions] = useContext(NavbarContext);
    return (
        <div className={styles.navbar_container}>
            <Menu />
            <div className={styles.navbar_main}>{header}</div>
            {/* <Cart /> */}
        </div>
    );
}

export default Navbar;
