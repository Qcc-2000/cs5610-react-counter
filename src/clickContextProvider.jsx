import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types"; // Import PropTypes package

export const ClickContext = createContext();
export default function ClickContextProvider(props) {
  const [clickStates, setClickStates] = useState([false, false, false, false]);
  const context = useMemo(
    () => ({ clickStates, setClickStates }),
    [clickStates, setClickStates]
  );
  return (
    <ClickContext.Provider value={context}>
      {props.children}
    </ClickContext.Provider>
  );
}

ClickContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
