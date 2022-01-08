import React from "react";
import TextField from "@mui/material/TextField";
import classnames from "classnames";
import styles from "@styles/rent/Rent.module.css";
import Stations from "@src/types/station.type";

interface StationSelectorProps {
    inputs: Stations;
    setInputs: React.Dispatch<React.SetStateAction<Stations>>;
}

function StationSelector({
    inputs,
    setInputs,
}: StationSelectorProps): React.ReactElement {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                상품 수령처(ex. 동서울터미널역)
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
                상품 반납처(ex. 서울역)
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
            <div className={styles.rent_info_header}>
                <br />
                *수령/반납처는 수도권 지하철(역)만 입력 가능합니다. <br />
                *택배 배송 희망 시 주소를 입력해 주세요.(택배 요금 4,000원 추가)
            </div>
        </div>
    );
}

export default StationSelector;
