import "./cell.css";
import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ClickContext } from "./board";
export default function Cell({ id }) {
  const { clickStates, setClickStates } = useContext(ClickContext);
  const handleClick = () => {
    const newClickStates = [...clickStates];
    newClickStates[id] = !clickStates[id];
    setClickStates(newClickStates);
  };
  return clickStates[id] ? (
    <div className="cell cell_clicked" onClick={() => handleClick()} />
  ) : (
    <div className="cell" onClick={() => handleClick()} />
  );
}

Cell.propTypes = {
  id: PropTypes.number.isRequired, // Add key prop to prop types validation
};
