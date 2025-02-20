import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/index"
import Repay from "./components/Repay";
import Layout from "./components/layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route element={<Layout />}>
        <Route path="/reembolso" element={<Repay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
