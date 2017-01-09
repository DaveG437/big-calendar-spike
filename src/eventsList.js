import moment from 'moment';

let eventsList = [
  {
    title: 'first event',
    startDate: moment("08:00-09-01-2017", "HH:mm-DD-MM-YYYY").toDate(),
    endDate: moment("09:01-09-01-2017", "HH:mm-DD-MM-YYYY").toDate()
  },
  {
    title: 'all day event',
    allDay: true,
    startDate: moment('09:00-10-01-2017', "HH:mm-DD-MM-YYYY").toDate(),
    endDate: moment("11:01-10-01-2017", "HH:mm-DD-MM-YYYY").toDate()
  }
];

export default eventsList;

