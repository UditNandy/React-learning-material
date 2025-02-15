import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Fundamentals } from "./components/fundamentals/Fundamentals";
import { Hooks } from "./components/hooks/Hooks";
import { InternaclConcepts } from "./components/internal-concepts/InternalConcepts";
import Networking from "./components/system-design/networking";
import Communication from "./components/system-design/communication";

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
        <Link className="link" to="/networking">
          Networking
        </Link>
        <Link className="link" to="/communication">
          Communication
        </Link>
      </div>
      <Routes>
        <Route path="fundamental" element={<Fundamentals />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="internal-concepts" element={<InternaclConcepts />} />
        <Route path="networking" element={<Networking />} />
        <Route path="communication" element={<Communication />} />
      </Routes>
    </div>
  );
}

export default App;
