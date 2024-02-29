import "./App.css";
import ClickContextProvider from "./clickContextProvider";
import Square from "./components/board";
function App() {
  return (
    <ClickContextProvider>
      <Square />
    </ClickContextProvider>
  );
}

export default App;
