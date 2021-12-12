import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import classnames from "classnames";
import styles from "@styles/rent/Rent.module.css";

function StationSelector({ stations, inputs, setInputs }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        const station = value.split(",");
        const station_id = station[0];
        const station_name = station[1];
        setInputs({
            ...inputs,
            [name]: {
                id: station_id,
                name: station_name,
            },
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
                <FormControl fullWidth>
                    <Select
                        id="receival_station"
                        name="receival_station"
                        // value={10}
                        inputProps={{ "aria-label": "Without label" }}
                        onChange={handleChange}
                        className={styles.rent_select}
                    >
                        {stations &&
                            stations.map((s, i) => {
                                return (
                                    <MenuItem
                                        value={`${s._id},${s.name}`}
                                        key={`${i}_receival`}
                                    >
                                        {s.name}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>
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
                <FormControl fullWidth>
                    <Select
                        id="return_station"
                        name="return_station"
                        // value={10}
                        inputProps={{ "aria-label": "Without label" }}
                        onChange={handleChange}
                        className={styles.rent_select}
                    >
                        {stations &&
                            stations.map((s, i) => {
                                return (
                                    <MenuItem
                                        // value={{
                                        //     id: s._id,
                                        //     name: s.name,
                                        // }}
                                        value={`${s._id},${s.name}`}
                                        key={`${i}_return`}
                                    >
                                        {s.name}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default StationSelector;
