import "./App.css";
import Header from "../../tailwind_trials/src/components/Header";
// import Swap from "./components/Swap";
import Tokens from "../../tailwind_trials/src/components/Tokens";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWindow">
        <Routes>
          {/* <Route path="/" element={<Swap />} /> */}
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
