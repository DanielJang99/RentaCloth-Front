export const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export function getISODateAsKorean(date, isEnd) {
    const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
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
    const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
    let new_date = new Date(date);
    return `${new_date.getFullYear()}.${
        new_date.getMonth() + 1
    }.${new_date.getDate()}(${DAYS[new_date.getDay()]})`;
}
