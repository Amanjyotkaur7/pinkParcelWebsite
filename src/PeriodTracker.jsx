import React, { useState, useEffect } from "react";
import "./PeriodTracker.css";

const PeriodTracker = () => {
  const [currentStartDate, setCurrentStartDate] = useState("");
  const [nextStartDate, setNextStartDate] = useState("");
  const [bleedingDays, setBleedingDays] = useState("");
  const [cycleLength, setCycleLength] = useState(null);
  const [predictedStartDate, setPredictedStartDate] = useState("");
  const [healthMessage, setHealthMessage] = useState("");

  useEffect(() => {
    if (currentStartDate && nextStartDate && bleedingDays) {
      // Calculate cycle length (difference between start dates)
      const startCurrent = new Date(currentStartDate);
      const startNext = new Date(nextStartDate);
      const lengthOfCycle = Math.floor((startNext - startCurrent) / (1000 * 60 * 60 * 24));

      // Calculate predicted next period start date
      const predictedNextDate = new Date(startNext);
      predictedNextDate.setDate(predictedNextDate.getDate() + lengthOfCycle);

      // Set values in state
      setCycleLength(lengthOfCycle);
      setPredictedStartDate(predictedNextDate.toDateString());

      // Check if cycle length is healthy
      if (lengthOfCycle >= 21 && lengthOfCycle <= 35) {
        setHealthMessage("Healthy cycle length.");
      } else {
        setHealthMessage("Your cycle length is not within the healthy range. Consider consulting a doctor.");
      }
    }
  }, [currentStartDate, nextStartDate, bleedingDays]);

  return (
    <div className="period-tracker">
      <h2>Period Tracker</h2>
      <div className="input-group">
        <label>Start Date of Current Period:</label>
        <input
          type="date"
          value={currentStartDate}
          onChange={(e) => setCurrentStartDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Start Date of Next Period:</label>
        <input
          type="date"
          value={nextStartDate}
          onChange={(e) => setNextStartDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Number of Days of Bleeding:</label>
        <input
          type="number"
          value={bleedingDays}
          onChange={(e) => setBleedingDays(e.target.value)}
        />
      </div>
      <button onClick={() => {}}>Calculate Next Cycle</button>
      {cycleLength !== null && (
        <div className="result">
          <p>Cycle Length: {cycleLength} days</p>
          <p>Predicted Start Date of Next Period: {predictedStartDate}</p>
          <p>Health Status: {healthMessage}</p>
        </div>
      )}
    </div>
  );
};

export default PeriodTracker;
