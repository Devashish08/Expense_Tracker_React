import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  // This component is responsible for Date to show in clear state ToLocale String is built in javascript you can refer for original documentation for details.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{Year}</div>
      <div className="expense-date_day">{Day}</div>
    </div>
  );
}

export default ExpenseDate;
