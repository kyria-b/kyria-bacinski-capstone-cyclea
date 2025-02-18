import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../../assets/logos/logo.png";
import moment from "moment"; 
import "../Cycle/Cycle.scss";

function Cycle() {
  const [value, setValue] = useState(new Date());
  const [cycle, setCycle] = useState("28");

  const cycleLength = parseInt(cycle, 10);

  return (
    <>
    <div className="calendar">
      <div className="calendar__container">
        <nav className="calendar__navbar">
          <div className="calendar__header">
            <h4>Calculate Next Period & Ovulation Day</h4>
          </div>
        </nav>

        <label htmlFor="cycle">Select your Cycle Length: </label>
        <select
          id="cycle"
          onChange={(e) => setCycle(e.target.value)}
          value={cycle}
          className="m-2"
        >
          {Array.from({ length: 18 }, (_, i) => i + 28).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <p className="calendar__subheader">
        Select Your Last Period Start Date from the Calendar
      </p>

      <div className="calendar__dates">
        <Calendar
          onChange={(date) => setValue(date || new Date())}
          value={value}
          className="calendar mt-0"
        />
      </div>

      <div className="calendar__content">
        <div className="calendar__row">
          <div className="calendar__content--center">
            <div className="calendar__next-period---date">
              <p>Next Period</p>
              {value && (
                <p className="calendar__next-period--date">{moment(value).add(cycleLength, "days").format("Do MMMM YYYY")}</p>
              )}
            </div>
            <div className="calendar__ovulation">
              <p>Approx. Ovulation Day</p>
              {value && (
                <p className="calendar__ovulation--date">{moment(value).add(cycleLength - 14, "days").format("Do MMMM YYYY")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cycle;
