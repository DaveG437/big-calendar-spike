import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import eventsList from './eventsList';

BigCalendar.momentLocalizer(moment);

const Calendar = props => (
  <div>
    <BigCalendar
      events={eventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      titleAccessor='title'
      min={moment({hour: 8}).toDate()}
      max={moment({hour: 20}).toDate()}
      view='week'
    />
  </div>
);

export default Calendar;