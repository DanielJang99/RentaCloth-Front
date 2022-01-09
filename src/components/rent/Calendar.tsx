import React, { useState, useEffect, useMemo } from "react";
import { DateRange, RangeKeyDict, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "@styles/rent/Rent.module.css";
import commons from "@styles/commons/Commons.module.css";
import { useRent } from "@src/states/rent.context";
import axios from "axios";
import { getFormattedPrice } from "@src/utils/price";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import {
    isBefore,
    isAfter,
    getDifferenceInDays,
    getFormattedDate,
    addDays,
    getWeekDay,
} from "@src/utils/date";
import {
    calendarProps,
    calendarRange,
    productPriceData,
} from "@src/types/calendar.type";

function Calendar({
    product_id,
    handleCloseModal,
}: calendarProps): React.ReactElement {
    const { rent, setRent } = useRent();
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [calendarState, setCalendarState] = useState<calendarRange>({
        start: addDays(today, 2),
        end: addDays(today, 5),
        currentSelection: "startDate",
    });

    const { start, end, currentSelection } = calendarState;

    const [priceData, setPriceData] = useState<productPriceData>({
        prices: [],
        retail_price: 0,
    });

    const [payPrice, setPayPrice] = useState<string | number>("");

    useEffect(() => {
        const fetchProductPrices = async () => {
            const api_url = process.env.NEXT_PUBLIC_API;
            const res = await axios.get(
                `${api_url}/product_prices/product/${product_id}`,
            );
            const data: productPriceData = res.data;
            setPayPrice(data.prices.filter((p) => p.day === 4)[0].price);
            return setPriceData(res.data);
        };
        fetchProductPrices();
    }, []);

    const handleChange = (range: RangeKeyDict) => {
        let { startDate, endDate } = range.selection;

        // 선택한 반납일이 수령일에서 최소 3일 뒤가 아닌 경우
        if (
            currentSelection === "endDate" &&
            isBefore(endDate, addDays(startDate, 3))
        ) {
            range.selection.endDate = addDays(startDate, 3);
            endDate = addDays(startDate, 3);
        }

        const daysOffset = getDifferenceInDays(endDate, startDate) + 1;
        let selectedDay = priceData.prices.filter((p) => p.day === daysOffset);

        // 선택한 날짜에 반납을 할 수 없는 경우
        if (
            currentSelection === "endDate" &&
            !selectedDay.length &&
            daysOffset > 0
        ) {
            selectedDay = [priceData.prices[priceData.prices.length - 1]];
            endDate = addDays(startDate, selectedDay[0]["day"] - 1);
        }

        // 달력 업데이트
        setCalendarState({
            ...calendarState,
            start: startDate,
            end: endDate,
            currentSelection:
                currentSelection === "startDate" ? "endDate" : "startDate",
        });

        // 가격 업데이트
        selectedDay.length > 0
            ? setPayPrice(selectedDay[0].price)
            : setPayPrice("");
    };

    function DayCustom(day: Date) {
        const extraDot = getDayInfo(day);
        return (
            <div>
                {extraDot}
                <span>{day.getDate()}</span>
            </div>
        );
    }
    function getDayInfo(day: Date) {
        if (isAfter(day, start)) {
            if (isBefore(day, addDays(start, 3))) {
                return <div className={styles.rent_unavailable_day}>X</div>;
            }
            const daysOffset = getDifferenceInDays(day, start) + 1;
            const availablePrice = priceData.prices.filter(
                (price) => price.day === daysOffset,
            )[0];
            return availablePrice ? (
                <div className={styles.rent_calendar_price}>
                    ₩{getFormattedPrice(availablePrice.price)}
                </div>
            ) : undefined;
        }
        return null;
    }

    const handleClick = () => {
        setRent({
            ...rent,
            product_id: product_id,
            start_date: start?.toString(),
            end_date: end?.toString(),
            days: getDifferenceInDays(end, start) + 1,
            price: payPrice.toString(),
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
                            onChange={(ranges: RangeKeyDict) =>
                                handleChange(ranges)
                            }
                            moveRangeOnFirstSelection={false}
                            ranges={[
                                {
                                    startDate: start,
                                    endDate: end,
                                    key: "selection",
                                },
                            ]}
                            minDate={addDays(today, 2)}
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
                                    {getFormattedDate(start)}(
                                    {getWeekDay(start)}
                                    )&nbsp;-&nbsp;
                                    {currentSelection === "startDate" &&
                                        `${getFormattedDate(end)}
                                        (${getWeekDay(end)})`}
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
                                        정상가:{" "}
                                        {priceData.retail_price &&
                                            getFormattedPrice(
                                                priceData.retail_price,
                                            )}
                                        원
                                    </div>
                                </div>
                                <div className={styles.price_detail}>
                                    {payPrice
                                        ? `${getFormattedPrice(payPrice)}원`
                                        : "-"}
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

export default Calendar;
