import React from "react";
import classes from "./NumberItem.module.css";

interface NumberItemProps {
  number: number;
  isSelected?: boolean;
  onClick?: () => void;
}

const NumberItem: React.FC<NumberItemProps> = ({
  number,
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      className={`${classes.numberItem} ${isSelected ? classes.selected : ""}`}
      onClick={onClick}
    >
      {isSelected && <span className={classes.crossedOut}>X</span>}
      {number}
    </div>
  );
};

export default NumberItem;
