import moment from "moment";

export const format_date = function (date = new Date, format) {
    return moment(date).format(format);
};