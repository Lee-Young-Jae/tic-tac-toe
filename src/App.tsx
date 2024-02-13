import "./App.css";
import Main from "./Pages/Main";
import Setting from "./Pages/Setting";
import Play from "./Pages/Play";
import History from "./Pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
