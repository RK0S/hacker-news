import moment from 'moment';

export const msToDate = (ms: number): string => {
    return moment(ms * 1000).format("DD-MM-YYYY h:mm")
}