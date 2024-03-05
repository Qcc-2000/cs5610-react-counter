import "./App.css";
import ClickContextProvider from "./clickContextProvider";
import Board from "./components/board";
function App() {
  return (
    <ClickContextProvider>
      <Board />
    </ClickContextProvider>
  );
}

export default App;
