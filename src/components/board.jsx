import "./board.css";
import Cell from "./cell";
import { useContext, useMemo } from "react";
import { ClickContext } from "../clickContextProvider";
export default function Board() {
  const { clickStates } = useContext(ClickContext);
  const clickedNumber = useMemo(
    () => clickStates.filter((item) => item === true).length,
    [clickStates]
  );
  return (
    <>
      <div className="counter">Counter: {clickedNumber}</div>
      <div className="board_row">
        <Cell id={0} />
        <Cell id={1} />
      </div>
      <div className="board_row">
        <Cell id={2} />
        <Cell id={3} />
      </div>
    </>
  );
}
