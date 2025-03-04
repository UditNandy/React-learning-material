import Accordian from "../../shared/accordian/accordian";

const InterviewQuestion = () => {
  return (
    <>
      <Accordian header="Virtual DOM and Rendering">
        <ol>
          <li>What is the Virtual DOM, and how does it work.</li>
          <li>Why is the Virtual DOM faster than the real DOM.</li>
          <li>
            What is reconciliation in React, and how does it optimize
            performance.
          </li>
          <li>How does React decide when to re-render a component.</li>
          <li>What are key props in React, and why are they important.</li>
          <li>How can you prevent unnecessary re-renders in React.</li>
          <li>What is React.memo, and how does it optimize performance.</li>
          <li>What is the difference between PureComponent and React.memo.</li>
          <li>What are synthetic events in React, and how do they work.</li>
          <li>
            What are the common performance issues in React and how to fix them.
          </li>
        </ol>
      </Accordian>
      <Accordian header="Component Lifecycle">
        <ol>
          <li>
            What are the different phases of the React component lifecycle.
          </li>
          <li>
            What is the difference between mounting, updating, and unmounting in
            React.
          </li>
          <li>What lifecycle methods are available in class components.</li>
          <li>
            What is the difference between componentDidMount,
            componentDidUpdate, and componentWillUnmount.
          </li>
          <li>
            How do lifecycle methods compare to useEffect in functional
            components.
          </li>
          <li>How does React handle cleanup when a component unmounts.</li>
          <li>
            What is the role of shouldComponentUpdate in class components.
          </li>
          <li>
            What are the side effects in React, and how should they be managed.
          </li>
          <li>How does error handling work in React components.</li>
          <li>What is getDerivedStateFromProps, and when should it be used.</li>
        </ol>
      </Accordian>
      <Accordian header="React Hooks">
        <ol>
          <li>What are React Hooks, and why were they introduced.</li>
          <li>What is useState, and how does it work.</li>
          <li>What is useEffect, and what are its common use cases.</li>
          <li>
            What is the difference between useEffect and lifecycle methods in
            class components.
          </li>
          <li>What is useRef, and how does it help manage DOM elements.</li>
          <li>What is useMemo, and how does it optimize performance.</li>
          <li>
            What is useCallback, and how does it prevent unnecessary re-renders.
          </li>
          <li>What is useContext, and how does it simplify prop drilling.</li>
          <li>
            What is useReducer, and when should you use it instead of useState.
          </li>
          <li>What are custom hooks, and how can they be useful.</li>
          <li>Difference between useRef and createRef.</li>
          <li>What is forwardRef.</li>
        </ol>
      </Accordian>
      <Accordian header="State Management in React">
        <ul>
          <li>
            What is the difference between controlled and uncontrolled
            components.
          </li>
          <li>
            How does state management work in React without external libraries.
          </li>
          <li>
            What is Context API, and how does it help manage global state.
          </li>
          <li>What are the advantages and limitations of using Context API.</li>
          <li>What is the difference between Redux and Context API.</li>
          <li>What is Recoil, and how does it compare to Redux.</li>
          <li>What is Zustand, and how does it simplify state management.</li>
        </ul>
      </Accordian>
    </>
  );
};

export default InterviewQuestion;
