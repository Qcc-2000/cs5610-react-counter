import "./board.css";
import Cell from "./cell";
import { useContext } from "react";
import { ClickContext } from "../clickContextProvider";
export default function Board() {
  const { clickStates } = useContext(ClickContext);
  return (
    <>
      <div className="counter">
        Counter: {clickStates.filter((item) => item === true).length}
      </div>
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
