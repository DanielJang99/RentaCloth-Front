import React from "react";
import styles from "@styles/navbar/Cart.module.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

function Cart() {
    return (
        <div className={styles.cart}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="primary">
                    <ShoppingCartIcon style={{ fill: "white" }} />
                </StyledBadge>
            </IconButton>
        </div>
    );
}

export default Cart;
