// components/CalendarComponent.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css'; // Custom CSS file for styling

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Event Calendar</h2>
      <Calendar onChange={onChange} value={date} />
      <p className="selected-date">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
