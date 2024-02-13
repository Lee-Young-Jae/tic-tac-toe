import "./App.css";
import Main from "./Pages/Main";
import Setting from "./Pages/Setting";
import Play from "./Pages/Play";
import History from "./Pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GameSettingsProvider } from "./context/GameSettingsContext";

function App() {
  return (
    <GameSettingsProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/play" element={<Play />} />
            <Route path="history" element={<History />}></Route>
          </Routes>
        </Router>
      </div>
    </GameSettingsProvider>
  );
}

export default App;
