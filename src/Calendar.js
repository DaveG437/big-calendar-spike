import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

let EventsList = [];

const Calendar = props => (
  <div>
    <BigCalendar
      events={EventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      min={moment({hour: 8}).toDate()}
      max={moment({hour: 20}).toDate()}
      view="week"
    />
  </div>
);

export default Calendar;