import React from "react";
import NumberItem from "../NumberItem/NumberItem";
import classes from "./NumberGrid.module.css";

interface NumberGridProps {
  totalNumbers: number;
  selectedNumbers?: number[];
  onSelect?: (number: number) => void;
}

const NumberGrid: React.FC<NumberGridProps> = ({
  totalNumbers,
  selectedNumbers = [],
  onSelect,
}) => {
  const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);
  const handleClick = (number: number) => {
    if (onSelect) {
      onSelect(number);
    }
  };
  return (
    <div className={classes.numberGrid}>
      {numbers.map((number) => (
        <NumberItem
          key={number}
          number={number}
          isSelected={selectedNumbers.includes(number)}
          onClick={() => handleClick(number)}
        />
      ))}
    </div>
  );
};

export default NumberGrid;
