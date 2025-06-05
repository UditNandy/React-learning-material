import { Link, Route, Routes } from "react-router-dom";
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
import FileExplorer from "./components/machine-coding/file-explorer/file-explorer";
import ReduxIntro from "./components/react-course/redux/redux-intro";
import { TypescriptDemo } from "./components/typescript/typescript-intro.tsx";
import { ReactSSR } from "./components/react-course/ssr/react-ssr.js";
import Security from "./components/system-design/security.js";
import BinaryTree from "./components/dsa/binary-tree.js";
import SlidingWindow from "./components/dsa/sliding-window.js";
import WebpackConcept from "./components/react-course/webpack/webpack-concept.js";
import WebPageRendering from "./components/system-design/webpage-rendering.js";
import Array from "./components/dsa/array.js";
import DP from "./components/dsa/dp.js";
import Graph from "./components/dsa/graph.js";
import TabForm from "./components/machine-coding/tab-form/tab-form.js";
import NestedCheckbox from "./components/machine-coding/nested-checkbox/nested-checkbox.js";
import AutoComplete from "./components/machine-coding/auto-complete/auto-complete.js";
import Pagination from "./components/machine-coding/pagination/pagination.js";
import ProgressBar from "./components/machine-coding/progress-bar/progress-bar.js";
import MachineCoding from "./components/machine-coding/machine-coding.js";
import Performance from "./components/system-design/performance.js";
import ServiceWorkers from "./components/system-design/service-workers.js";
import PWA from "./components/system-design/progressive-web-app.js";
import LinkedList from "./components/dsa/linked-list.js";
import Contest from "./components/dsa/contest.js";
import Instagram from "./components/hld/instagram.js";
import Overview from "./components/hld/overview.js";
import LoggingMonitoring from "./components/system-design/logging-monitoring.js";
import Observers from "./components/js-concepts/observers.js";
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
          <SubMenu label="Typescript">
            <MenuItem component={<Link to="/typescript-intro" />}>
              Typescript Introduction
            </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/react-ssr" />}>React SSR</MenuItem>
          <SubMenu label="Redux">
            <MenuItem component={<Link to="/redux-intro" />}>
              Redux Intro
            </MenuItem>
            <MenuItem component={<Link to="/redux-summery" />}>
              Redux Summery
            </MenuItem>
          </SubMenu>
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
          <MenuItem component={<Link to="/webpack" />}>Webpack</MenuItem>
          <SubMenu label="System Design">
            <MenuItem component={<Link to="/webpage-rendering" />}>
              How a webpage is rendered in browser.
            </MenuItem>
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
            <MenuItem component={<Link to="/performance" />}>
              Performance
            </MenuItem>
            <MenuItem component={<Link to="/security" />}>Security</MenuItem>
            <MenuItem component={<Link to="/service-workers" />}>
              Service Workers
            </MenuItem>
            <MenuItem component={<Link to="/pwa" />}>
              Progressive Web Apps
            </MenuItem>
            <MenuItem component={<Link to="/logging-monitoring" />}>
              Logging and Monitoring
            </MenuItem>
          </SubMenu>
          <SubMenu label="DSA">
            <MenuItem component={<Link to="/array" />}>Array</MenuItem>
            <MenuItem component={<Link to="/recursion" />}>Recursion</MenuItem>
            <MenuItem component={<Link to="/sliding-window" />}>
              Sliding Window
            </MenuItem>
            <MenuItem component={<Link to="/binary-tree" />}>
              Binary Tree
            </MenuItem>
            <MenuItem component={<Link to="/binary-search" />}>
              Binary Search
            </MenuItem>
            <MenuItem component={<Link to="/dp" />}>DP</MenuItem>
            <MenuItem component={<Link to="/graph" />}>Graph</MenuItem>
            <MenuItem component={<Link to="/linkedlist" />}>
              Linked List
            </MenuItem>
            <MenuItem component={<Link to="/contest-questions" />}>
              Contest Questions
            </MenuItem>
          </SubMenu>
          <SubMenu label="Javascript Advance Concepts">
            <MenuItem component={<Link to="/observers" />}>Observers</MenuItem>
          </SubMenu>
          <SubMenu label="Machine Coding (LLD)">
            <MenuItem component={<Link to="/machine-coding-question" />}>
              Important Question
            </MenuItem>
            <MenuItem component={<Link to="/file-explorer" />}>
              File Explorer
            </MenuItem>
            <MenuItem component={<Link to="/tab-form" />}>Tab Form</MenuItem>
            <MenuItem component={<Link to="/nested-checkbox" />}>
              Nested Checkbox
            </MenuItem>
            <MenuItem component={<Link to="/auto-complete" />}>
              Auto Complete
            </MenuItem>
            <MenuItem component={<Link to="/pagination" />}>
              Pagination
            </MenuItem>
            <MenuItem component={<Link to="/progress-bar" />}>
              Progress Bar
            </MenuItem>
          </SubMenu>
          <SubMenu label="HLD">
            <MenuItem component={<Link to="/hld" />}>Overview</MenuItem>
            <MenuItem component={<Link to="/hld/instagram" />}>
              Instagram
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
          <Route path="binary-tree" element={<BinaryTree />} />
          <Route path="binary-search" element={<BinarySearch />} />
          <Route path="sliding-window" element={<SlidingWindow />} />
          <Route path="file-explorer" element={<FileExplorer />} />
          <Route path="tab-form" element={<TabForm />} />
          <Route path="advance-hooks" element={<AdvanceHooks />} />
          <Route path="reconciliation" element={<Reconciliation />} />
          <Route path="react-router" element={<ReactRouter />} />
          <Route
            path="class-component"
            element={<ClassComponent name="Udit" />}
          />
          <Route path="redux-intro" element={<ReduxIntro />} />
          <Route path="redux-summery" element={<ReduxNotes />} />
          <Route path="react-optimisation" element={<ReactOptimisation />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="additional-concepts" element={<AdditionalConcepts />} />
          <Route path="interview-questions" element={<InterviewQuestion />} />
          <Route path="rest-api" element={<RestApi />} />
          <Route path="database-and-caching" element={<DatabaseAndCaching />} />
          <Route path="typescript-intro" element={<TypescriptDemo />} />
          <Route path="react-ssr" element={<ReactSSR />} />
          <Route path="security" element={<Security />} />
          <Route path="webpack" element={<WebpackConcept />} />
          <Route path="webpage-rendering" element={<WebPageRendering />} />
          <Route path="array" element={<Array />} />
          <Route path="dp" element={<DP />} />
          <Route path="graph" element={<Graph />} />
          <Route path="nested-checkbox" element={<NestedCheckbox />} />
          <Route path="auto-complete" element={<AutoComplete />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="progress-bar" element={<ProgressBar />} />
          <Route path="machine-coding-question" element={<MachineCoding />} />
          <Route path="performance" element={<Performance />} />
          <Route path="service-workers" element={<ServiceWorkers />} />
          <Route path="pwa" element={<PWA />} />
          <Route path="linkedlist" element={<LinkedList />} />
          <Route path="contest-questions" element={<Contest />} />
          <Route path="logging-monitoring" element={<LoggingMonitoring />} />
          <Route path="observers" element={<Observers />} />
          <Route path="hld">
            <Route index path="" element={<Overview />} />
            <Route path="instagram" element={<Instagram />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
