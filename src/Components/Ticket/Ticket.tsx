import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTrash } from "@fortawesome/free-solid-svg-icons";
import SelectedNumbersDisplay from "../SelectedNumbersDisplay/SelectedNumbersDisplay";
import NumberGrid from "../NumberGrid/NumberGrid";
import classes from "./Ticket.module.css";

interface TicketProps {
  lastDrawnPrimary: number[];
  lastDrawnSecondary: number;
}

const Ticket: React.FC<TicketProps> = ({
  lastDrawnPrimary,
  lastDrawnSecondary,
}) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedPowerball, setSelectedPowerball] = useState<
    number | undefined
  >(undefined);

  const handleNumberSelect = (number: number) => {
    if (selectedNumbers.length < 7 && !selectedNumbers.includes(number)) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handlePowerballSelect = (number: number) => {
    setSelectedPowerball(number);
  };
  const handleAutoFillClick = () => {
    setSelectedNumbers(lastDrawnPrimary);
    setSelectedPowerball(lastDrawnSecondary);
  };

  const handleResetClick = () => {
    setSelectedNumbers([]);
    setSelectedPowerball(undefined);
  };

  return (
    <div className={classes.ticket}>
      <SelectedNumbersDisplay
        selectedNumbers={selectedNumbers}
        selectedPowerball={selectedPowerball}
      />
      <button
        className={classes.autofillButton}
        onClick={handleAutoFillClick}
        data-testid="autofill-button"
      >
        <FontAwesomeIcon icon={faBolt} />
      </button>

      <button
        className={classes.resetButton}
        onClick={handleResetClick}
        data-testid="reset-button"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <NumberGrid
        totalNumbers={35}
        onSelect={handleNumberSelect}
        selectedNumbers={selectedNumbers ? selectedNumbers : []}
      />

      <div className={classes.grayBar}>SELECT YOUR POWERBALL</div>
      <NumberGrid
        totalNumbers={20}
        onSelect={handlePowerballSelect}
        selectedNumbers={selectedPowerball ? [selectedPowerball] : []}
      />
    </div>
  );
};

export default Ticket;
