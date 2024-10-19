import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Tambahkan route lainnya di sini */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
