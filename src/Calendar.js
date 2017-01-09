import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import eventsList from './eventsList';
import './Calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = props => (
  <div className='calendar-wrap'>
    <BigCalendar
      events={eventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      titleAccessor='title'
      min={moment({hour: 8}).toDate()}
      max={moment({hour: 20}).toDate()}
      defaultView='week'
      // toolbar={false}
    />
  </div>
);

export default Calendar;
