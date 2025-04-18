import { useEffect } from "react";
import Accordian from "../shared/accordian/accordian";

const MachineCoding = () => {
  const promiseSequence = () => {
    const p1 = new Promise((resolve, reject) => {
      console.log("P1 executed");
      resolve("p1");
    });

    const p2 = new Promise((resolve, reject) => {
      console.log("P2 executed");
      setTimeout(() => {
        resolve("p2");
      }, 1000);
    });

    const p3 = new Promise((resolve, reject) => {
      console.log("P3 executed");
      setTimeout(() => {
        resolve("p3");
      }, 500);
    });

    (async () => {
      console.log(await p1);
      console.log(await p2);
      console.log(await p3);
    })();
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      // promiseSequence();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Accordian header={"Implementation Question"}>
        <strong>
          <ol>
            <li>Implement a chain calculator.</li>
            <li>Execute promises in sequence. ✅</li>
            <li>Implement pipe and compose functions.</li>
            <li>Create custom array polyfills.</li>
            <li>Demonstrate prototype and prototype inheritance.</li>
            <li>Implement call, apply, and bind methods.</li>
            <li>Flatten a nested array.</li>
            <li>Implement basic debouncing.</li>
            <li>Implement basic throttling.</li>
            <li>Build an event emitter.</li>
            <li>
              Create a debouncing function with leading and trailing calls.
            </li>
            <li>Implement MapLimit functionality.</li>
            <li>Create a cancelable promise.</li>
            <li>Build a typeahead search using an LRU cache.</li>
            <li>Compare two documents for differences.</li>
            <li>Implement currying.</li>
            <li>Execute tasks in parallel.</li>
            <li>Find the matching element in the DOM.</li>
            <li>Implement array sorting.</li>
            <li>Flatten a complex object.</li>
            <li>Dispatch a custom event on array push.</li>
            <li>Perform a deep clone of an object.</li>
            <li>Serialize data using JSON.stringify.</li>
            <li>Explain the React DOM rendering process.</li>
            <li>Retry a promise N times on failure.</li>
            <li>Extend the functionality of an event emitter.</li>
            <li>Implement Promise.all functionality.</li>
            <li>Implement Promise.race functionality.</li>
            <li>Implement Promise.any functionality.</li>
            <li>Implement Promise.allSettled functionality.</li>
          </ol>
        </strong>
      </Accordian>
      <Accordian header="Machine Coding">
        <strong>
          <ol>
            <li>File-folder ✅</li>
            <li>Google-calendar</li>
            <li>InteractiveDiagonalGrid</li>
            <li>NestedCheckbox ✅</li>
            <li>Tabs</li>
            <li>Todo-list</li>
            <li>TypeAhead ✅</li>
            <li>WhatsappChat</li>
            <li>Infinite scroll with virtualization</li>
          </ol>
        </strong>
      </Accordian>
    </>
  );
};

export default MachineCoding;
