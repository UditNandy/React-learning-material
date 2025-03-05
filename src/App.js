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
import Foundation from "./components/react-course/laying-the-foundation/foundation";
import NestedCheckBox from "./components/machine-coding/nested-checkbox/nested-checkbox";
import BinarySearch from "./components/dsa/binary-search";
import AdvanceHooks from "./components/react-course/advance-hooks/advance-hooks";
import Reconciliation from "./components/react-course/reconciliation/reconciliation";
import DesignPatterns from "./components/react-course/design-patterns/design-patterns";
import ReactRouter from "./components/react-course/react-router/react-router";
import ClassComponent from "./components/react-course/class-components/class-component";
import ReactOptimisation from "./components/react-course/react-optimisation/react-optimisation";
import ReduxNotes from "./components/react-course/redux/redux-notes";
import Authentication from "./components/react-course/authentication/authentication";
import AdditionalConcepts from "./components/react-course/additional-concepts/additional-concepts";
import InterviewQuestion from "./components/react-course/interview-questions/interview-questions";
import RestApi from "./components/system-design/rest-api";
import DatabaseAndCaching from "./components/system-design/database-and-caching";

function App() {
  return (
    <div className="view-page">
      <Sidebar
        id="side-bar"
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
          <MenuItem component={<Link to="/foundation" />}>Foundation</MenuItem>
          <MenuItem component={<Link to="/fundamental" />}>
            Fundamentals
          </MenuItem>
          <MenuItem component={<Link to="/advance-hooks" />}>
            Advance Hooks
          </MenuItem>
          <MenuItem component={<Link to="/reconciliation" />}>
            Reconciliation
          </MenuItem>
          <MenuItem component={<Link to="/react-router" />}>
            React Router
          </MenuItem>
          <MenuItem component={<Link to="/class-component" />}>
            Class Component
          </MenuItem>
          <MenuItem component={<Link to="/react-optimisation" />}>
            React Optimisation
          </MenuItem>
          <MenuItem component={<Link to="/redux" />}>Redux</MenuItem>
          <MenuItem component={<Link to="/design-patterns" />}>
            Design Patterns
          </MenuItem>
          <SubMenu label="Miscellaneous">
            <MenuItem component={<Link to="/additional-concepts" />}>
              Additional Concepts
            </MenuItem>
            <MenuItem component={<Link to="/authentication" />}>
              Authentication
            </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/hooks" />}> React Hooks </MenuItem>
          <MenuItem component={<Link to="/internal-concepts" />}>
            Internal Concepts{" "}
          </MenuItem>
          <SubMenu label="System Design">
            <MenuItem component={<Link to="/networking" />}>
              Networking
            </MenuItem>
            <MenuItem component={<Link to="/rest-api" />}>REST Api</MenuItem>
            <MenuItem component={<Link to="/communication" />}>
              Communication
            </MenuItem>
            <MenuItem component={<Link to="/database-and-caching" />}>
              Database/Caching
            </MenuItem>
          </SubMenu>
          <SubMenu label="DSA">
            <MenuItem component={<Link to="/recursion" />}>Recursion</MenuItem>
            <MenuItem component={<Link to="/binary-search" />}>
              Binary Search
            </MenuItem>
          </SubMenu>
          <SubMenu label="Machine Coding">
            <MenuItem component={<Link to="/nested-checkbox" />}>
              Nested Checkbox
            </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/interview-questions" />}>
            Interview Questions
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="content-section">
        <Routes>
          <Route path="inception" element={<Inception />} />
          <Route path="ignition" element={<Ignition />} />
          <Route path="foundation" element={<Foundation />} />
          <Route path="design-patterns" element={<DesignPatterns />} />
          <Route path="fundamental" element={<Fundamentals />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="internal-concepts" element={<InternaclConcepts />} />
          <Route path="networking" element={<Networking />} />
          <Route path="communication" element={<Communication />} />
          <Route path="recursion" element={<Recursion />} />
          <Route path="binary-search" element={<BinarySearch />} />
          <Route path="nested-checkbox" element={<NestedCheckBox />} />
          <Route path="advance-hooks" element={<AdvanceHooks />} />
          <Route path="reconciliation" element={<Reconciliation />} />
          <Route path="react-router" element={<ReactRouter />} />
          <Route
            path="class-component"
            element={<ClassComponent name="Udit" />}
          />
          <Route path="redux" element={<ReduxNotes />} />
          <Route path="react-optimisation" element={<ReactOptimisation />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="additional-concepts" element={<AdditionalConcepts />} />
          <Route path="interview-questions" element={<InterviewQuestion />} />
          <Route path="rest-api" element={<RestApi />} />
          <Route path="database-and-caching" element={<DatabaseAndCaching />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
