import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from "./dateSelector.module.css" // Assuming you have styles like in your original component

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Helper function to format the date display
  const formatDate = (date) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className={style.dateselector}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className={style.dateinput}
      />
      <span> → </span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        className={style.dateinput}
      />
      <div className={style.selecteddaterange}>
        {`${formatDate(startDate)} → ${formatDate(endDate)}`}
      </div>
    </div>
  );
};

export default DateSelector;
