import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendarComponent = ({Data,SetSelected}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log("🚀 ~ MyCalendarComponent ~ selectedDate:", selectedDate)

  const handleDateChange = (date) => {

    setSelectedDate(date);
    SetSelected(date)
  };


  const availableDays = Data?.map(obj => new Date(obj.date));
  console.log("🚀 ~ MyCalendarComponent ~ availableDays:", availableDays)
  const tileDisabled = ({ date }) =>
    !availableDays?.some((availableDate) =>
      availableDate.toDateString() === date.toDateString()
    );

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileDisabled={tileDisabled}
        
      />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default MyCalendarComponent;