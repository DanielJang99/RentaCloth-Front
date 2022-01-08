const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export function getISODateAsKorean(date, isEnd) {
    const end_date_as_js = addDays(date, isEnd ? -1 : 0);
    return `${end_date_as_js.getMonth() + 1}월 ${end_date_as_js.getDate()}일(${
        DAYS[end_date_as_js.getDay()]
    })`;
}

export function getISODateAsKoreanWithoutDays(date, isEnd) {
    const end_date_as_js = addDays(date, isEnd ? -1 : 0);
    return `${end_date_as_js.getMonth() + 1}월 ${end_date_as_js.getDate()}일`;
}

export function getIsoDate(date) {
    let new_date = new Date(date);
    return `${new_date.getFullYear()}.${
        new_date.getMonth() + 1
    }.${new_date.getDate()}(${DAYS[new_date.getDay()]})`;
}

export function getFormattedDate(date) {
    let new_date = new Date(date);
    return `${new_date.getFullYear()}.${
        new_date.getMonth() + 1
    }.${new_date.getDate()}`;
}

export function isBefore(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate < endDate;
}

export function isAfter(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate > endDate;
}

export function getDifferenceInDays(start, end) {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(start);
    const endDate = new Date(end);
    return Math.round(Math.abs((startDate - endDate) / oneDay));
}

export function getWeekDay(day) {
    const d = new Date(day);
    return DAYS[d.getDay()];
}
