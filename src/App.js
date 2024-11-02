import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Fundamentals } from "./components/fundamentals/Fundamentals";
import { Hooks } from "./components/hooks/Hooks";
import { InternaclConcepts } from "./components/internal-concepts/InternalConcepts";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <Link className="link" to="/fundamental">
          Fundamentals
        </Link>
        <Link className="link" to="/hooks">
          React Hooks
        </Link>
        <Link className="link" to="/internal-concepts">
          Internal Concepts
        </Link>
      </div>
      <Routes>
        <Route path="fundamental" element={<Fundamentals />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="internal-concepts" element={<InternaclConcepts />} />
      </Routes>
    </div>
  );
}

export default App;
