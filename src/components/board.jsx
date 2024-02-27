import "./board.css";
import Cell from "./cell";
import { useState, createContext, useMemo } from "react";
export const ClickContext = createContext();
export default function Board() {
  const [clickStates, setClickStates] = useState([false, false, false, false]);

  return useMemo(
    () => (
      <ClickContext.Provider value={{ clickStates, setClickStates }}>
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
      </ClickContext.Provider>
    ),
    [clickStates, setClickStates]
  );
}
