import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../Cycle/Cycle.scss";

function Cycle() {
  const [value, setValue] = useState(new Date());
  const [cycle, setCycle] = useState("28");
  const [periodLength, setPeriodLength] = useState("5"); // Default to 5 days

  const cycleLength = parseInt(cycle, 10);
  const periodDays = parseInt(periodLength, 10);

  // Calculate the next period dates (based on the cycle length and period length)
  const getHighlightedDates = () => {
    if (!value) return [];
    const start = moment(value).add(cycleLength, "days"); // Start of next period
    return Array.from({ length: periodDays }, (_, i) => start.clone().add(i, "days").format("YYYY-MM-DD"));
  };

  const periodDates = getHighlightedDates();

  return (
    <>
      <div className="calendar">
        <div className="calendar__container">
          <nav className="calendar__navbar">
            <div className="calendar__header">
              <h3>Calculate Next Period & Ovulation Day</h3>
            </div>
          </nav>

          <label htmlFor="cycle">Select your Cycle Length: </label>
          <select
            id="cycle"
            onChange={(e) => setCycle(e.target.value)}
            value={cycle}
            className="calendar__cycle"
          >
            {Array.from({ length: 18 }, (_, i) => i + 28).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <label htmlFor="periodLength">Select your Period Length: </label>
          <select
            id="periodLength"
            onChange={(e) => setPeriodLength(e.target.value)}
            value={periodLength}
            className="m-2"
          >
            {Array.from({ length: 5 }, (_, i) => i + 3).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <h3 className="calendar__subheader">
          Select Your Last Period Start Date from the Calendar
        </h3>

        <div className="calendar__dates">
          <Calendar
            onChange={(date) => setValue(date || new Date())}
            value={value}
            className="calendar mt-0"
            tileClassName={({ date, view }) => {
              if (view === "month") {
                const dateString = moment(date).format("YYYY-MM-DD");
                return periodDates.includes(dateString) ? "highlight-period" : null;
              }
            }}
          />
        </div>

        <div className="calendar__content">
          <div className="calendar__row">
            <div className="calendar__content--center">
              <div className="calendar__next-period---date">
                <p>Next Period</p>
                <p className="calendar__next-period--date">
                  {moment(value ?? new Date()).add(cycleLength, "days").format("Do MMMM YYYY")}
                </p>
              </div>
              <div className="calendar__ovulation">
                <p>Approx. Ovulation Day</p>
                <p className="calendar__ovulation--date">
                  {moment(value ?? new Date()).add(cycleLength - 14, "days").format("Do MMMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cycle;
