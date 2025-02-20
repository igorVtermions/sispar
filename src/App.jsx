import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/index"
import Repay from "./components/Repay";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolso" element={<Repay />} />
      </Routes>
    </Router>
  );
}

export default App
