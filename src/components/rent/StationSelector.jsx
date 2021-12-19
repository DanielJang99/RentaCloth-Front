import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import classnames from "classnames";
import styles from "@styles/rent/Rent.module.css";

function StationSelector({ inputs, setInputs }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    return (
        <div style={{ paddingBottom: "40px" }}>
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                상품 수령처
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
                <TextField
                    variant="outlined"
                    sx={{ width: "100%" }}
                    id="receival_station"
                    name="receival_station"
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={handleChange}
                />
            </div>
            <div
                className={classnames(
                    styles.rent_info_header,
                    styles.step_two_info_label,
                )}
            >
                상품 반납처
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
                <TextField
                    variant="outlined"
                    sx={{ width: "100%" }}
                    id="return_station"
                    name="return_station"
                    inputProps={{ "aria-label": "Without label" }}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default StationSelector;
