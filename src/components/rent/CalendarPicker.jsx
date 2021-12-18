import React, { useState, useEffect, useContext } from "react";
import { DateRange } from "react-date-range";
import {
    addDays,
    format,
    isBefore,
    isAfter,
    differenceInDays,
    getDate,
    getMonth,
    getYear,
} from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import RentContext from "src/states/RentContext";
import axios from "axios";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

function CalendarPicker({ product_id, handleCloseModal }) {
    const [rentContext, rentContextActions] = useContext(RentContext);

    const [calendarState, setCalendarState] = useState({
        startDate: new Date(
            getYear(new Date()),
            getMonth(new Date()),
            getDate(new Date()),
        ),
        endDate: addDays(new Date(), 3),
        currentSelection: "startDate",
        key: "selection",
    });
    const [priceData, setPriceData] = useState({
        prices: [],
        retail_price: null,
    });
    const [payPrice, setPayPrice] = useState(0);

    useEffect(() => {
        const fetchProductPrices = async () => {
            const api_url = process.env.NEXT_PUBLIC_API;
            const res = await axios.get(
                `${api_url}/product_prices/product/${product_id}`,
            );
            setPayPrice(res.data.prices.filter((p) => p.day === 3)[0].price);
            return setPriceData(res.data);
        };
        fetchProductPrices();
    }, []);

    const handleChange = (item) => {
        const { startDate, endDate } = item.selection;
        if (
            calendarState.currentSelection === "endDate" &&
            isBefore(endDate, addDays(startDate, 3))
        ) {
            item.selection.endDate = addDays(startDate, 3);
        }
        const daysOffest = differenceInDays(endDate, startDate);
        let selectedDayPrice = priceData.prices.filter(
            (p) => p.day === daysOffest,
        )[0];
        if (!selectedDayPrice && daysOffest != 0) {
            selectedDayPrice = priceData.prices.at(-1);
            item.selection.endDate = addDays(startDate, selectedDayPrice.day);
        }
        item.selection["currentSelection"] =
            calendarState.currentSelection === "startDate"
                ? "endDate"
                : "startDate";
        setCalendarState(item.selection);
        selectedDayPrice
            ? setPayPrice(selectedDayPrice.price)
            : setPayPrice(null);
    };

    function DayCustom(day) {
        const extraDot = getDayInfo(day);
        return (
            <div>
                {extraDot}
                <span>{format(day, "d")}</span>
            </div>
        );
    }
    function getDayInfo(day) {
        if (isAfter(day, calendarState.startDate)) {
            if (isBefore(day, addDays(calendarState.startDate, 3))) {
                return <div className={styles.rent_unavailable_day}>X</div>;
            }
            const daysOffest = differenceInDays(day, calendarState.startDate);
            const availablePrice = priceData.prices.filter(
                (price) => price.day === daysOffest,
            )[0];
            return availablePrice ? (
                <div className={styles.rent_calendar_price}>
                    ₩{availablePrice.price}
                </div>
            ) : undefined;
        }
        return null;
    }

    const handleClick = () => {
        rentContextActions.setRent({
            ...rentContext.rent,
            product_id: product_id,
            start_date: calendarState.startDate,
            end_date: calendarState.endDate,
            days: differenceInDays(
                calendarState.endDate,
                calendarState.startDate,
            ),
            price: payPrice,
        });
        return handleCloseModal();
    };

    return (
        <div className={styles.rent_modal_container}>
            {priceData && (
                <>
                    <div className={commons.white_bg}>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => handleChange(item)}
                            moveRangeOnFirstSelection={false}
                            ranges={[calendarState]}
                            minDate={new Date()}
                            dayContentRenderer={DayCustom}
                            showDateDisplay={false}
                        />
                    </div>
                    <div className={styles.rent_info_header}>이용기간</div>
                    <div className={styles.rent_info_container}>
                        <div className={commons.grey_bg}>
                            <div className={styles.rent_period_container}>
                                <div className={styles.calendar_icon}>
                                    <EventAvailableIcon fontSize="small" />
                                </div>
                                <div className={styles.rent_period}>
                                    {format(
                                        calendarState.startDate,
                                        "yyyy.MM.dd",
                                    )}
                                    (
                                    {weekdays[calendarState.startDate.getDay()]}
                                    )&nbsp;-&nbsp;
                                    {calendarState.currentSelection ===
                                        "startDate" &&
                                        `${format(
                                            calendarState.endDate,
                                            "yyyy.MM.dd",
                                        )}
                                        (${
                                            weekdays[
                                                calendarState.endDate.getDay()
                                            ]
                                        })`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rent_info_container}>
                        <div className={commons.grey_bg}>
                            <div className={styles.price_detail_container}>
                                <div className={styles.price_header_section}>
                                    <div className={styles.price_header}>
                                        주문금액
                                    </div>
                                    <div className={styles.retail_price}>
                                        정상가: {priceData.retail_price}원
                                    </div>
                                </div>
                                <div className={styles.price_detail}>
                                    {payPrice ? `${payPrice}원` : "-"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => handleClick()}
                        type="button"
                        disabled={!payPrice}
                        className={styles.apply_btn}
                    >
                        {payPrice ? "적용하기" : "반납일을 선택해 주세요"}
                    </button>
                </>
            )}
        </div>
    );
}

export default CalendarPicker;
