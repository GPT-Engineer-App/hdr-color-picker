import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ColorWheel from "./pages/ColorWheel.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/color-wheel" element={<ColorWheel />} />
      </Routes>
    </Router>
  );
}

export default App;
