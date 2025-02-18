import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Fundamentals } from "./components/fundamentals/Fundamentals";
import { Hooks } from "./components/hooks/Hooks";
import { InternaclConcepts } from "./components/internal-concepts/InternalConcepts";
import Networking from "./components/system-design/networking";
import Communication from "./components/system-design/communication";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Recursion from "./components/dsa/recursion";
import Inception from "./components/react-course/inception/inception";
import Ignition from "./components/react-course/ignition-of-app/Ignition";

function App() {
  const navigate = useNavigate();

  return (
    <div className="view-page">
      <Sidebar
        rootStyles={{
          background: "#121417",
          height: "100vh",
          color: "#121417",
          "font-size": "16px",
          "font-weight": "500",
          "box-shadow": "1px 0 16px rgba(83, 80, 80, 0.6)",
        }}
      >
        <Menu>
          <MenuItem component={<Link to="/inception" />}>Inception</MenuItem>
          <MenuItem component={<Link to="/ignition" />}>
            Ignition of App
          </MenuItem>
          <MenuItem component={<Link to="/fundamental" />}>
            Fundamentals
          </MenuItem>
          <MenuItem component={<Link to="/hooks" />}> React Hooks </MenuItem>
          <MenuItem component={<Link to="/internal-concepts" />}>
            Internal Concepts{" "}
          </MenuItem>
          <SubMenu label="System Design">
            <MenuItem component={<Link to="/networking" />}>
              Networking
            </MenuItem>
            <MenuItem component={<Link to="/communication" />}>
              Communication
            </MenuItem>
          </SubMenu>
          <SubMenu label="DSA">
            <MenuItem component={<Link to="/recursion" />}>Recursion</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div className="content-section">
        <Routes>
          <Route path="inception" element={<Inception />}></Route>
          <Route path="ignition" element={<Ignition />}></Route>
          <Route path="fundamental" element={<Fundamentals />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="internal-concepts" element={<InternaclConcepts />} />
          <Route path="networking" element={<Networking />} />
          <Route path="communication" element={<Communication />} />
          <Route path="recursion" element={<Recursion />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
