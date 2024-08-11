import React from "react";
import classes from "./SelectedNumbersDisplay.module.css";

interface SelectedNumbersDisplayProps {
  selectedNumbers: number[];
  selectedPowerball?: number;
}

const SelectedNumbersDisplay: React.FC<SelectedNumbersDisplayProps> = ({
  selectedNumbers,
  selectedPowerball,
}) => {
  const totalCircles = 8;

  return (
    <div className={classes.selectedNumbers}>
      {Array.from({ length: totalCircles - 1 }).map((_, index) => (
        <div
          key={index}
          className={`${classes.circle} ${
            selectedNumbers[index] !== undefined ? classes.selected : ""
          }`}
        >
          {selectedNumbers[index] !== undefined ? selectedNumbers[index] : ""}
        </div>
      ))}
      <div
        className={`${classes.circle} ${classes.powerball} ${
          selectedPowerball !== undefined ? classes.selected : ""
        }`}
      >
        {selectedPowerball !== undefined ? selectedPowerball : "PB"}
      </div>
    </div>
  );
};

export default SelectedNumbersDisplay;
