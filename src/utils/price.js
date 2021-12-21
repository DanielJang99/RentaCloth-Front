export function getFormattedPrice(p) {
    const price = p.toString();
    const price_length = price.length;
    const comma_offset = Math.ceil(price_length / 3 - 1);
    if (comma_offset > 0) {
        let formattedPrice = "";
        for (let i = comma_offset; i > 0; i--) {
            const init_position = i === comma_offset ? 0 : (i - 1) * 3;
            const comma_position = price_length - i * 3;
            formattedPrice += `${price.slice(init_position, comma_position)},`;
        }
        formattedPrice += `${price.slice(price_length - 3, price_length)}`;
        return formattedPrice;
    }
    return price;
}
