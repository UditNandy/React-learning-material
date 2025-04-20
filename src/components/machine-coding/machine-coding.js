import { useEffect } from "react";
import Accordian from "../shared/accordian/accordian";
const MachineCoding = () => {
  //Calling promise in a sequence
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

  function flat(arr, depth = 1, temp = []) {
    if (depth < 0) {
      temp.push(arr);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) flat(arr[i], depth - 1, temp);
      else temp.push(arr[i]);
    }
    return temp;
  }

  //Flatterning an array
  const arrayFlattern = (arr, depth = 1, temp = []) => {
    if (depth < 0) {
      temp.push(arr);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arrayFlattern(arr[i], depth - 1, temp);
      } else temp.push(arr[i]);
    }
    return temp;
  };

  //Create debounce function
  const debounce = function (fn, t) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, t);
    };
  };

  //Debounce with landing and trailing
  const advanceDebounce = (
    func,
    wait,
    option = { leading: false, trailing: true }
  ) => {
    let timer = null;

    return (...args) => {
      let isInvoked = false;

      if (!timer && option.leading) {
        func(...args);
        isInvoked = true;
      }

      clearTimeout(timer);
      timer = setTimeout(() => {
        if (option.trailing && !isInvoked) {
          func(...args);
        }
        timer = null;
      }, wait);
    };
  };

  const count = (() => {
    let num = 0;
    let increment = () => {
      return ++num;
    };
    increment.reset = () => {
      num = 0;
    };
    return increment;
  })();

  useEffect(() => {
    let timer = setTimeout(() => {}, 100);
    console.log(
      arrayFlattern(
        [1, 2, [], [], undefined, [3, 4, [5, 6, [7, 8, [9, 10]]]]],
        Infinity
      )
    );
    console.log(
      flat([1, 2, [], [], undefined, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)
    );
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
            <li>Flatten a nested array. ✅</li>
            <li>Implement basic debouncing. ✅</li>
            <li>Implement basic throttling.</li>
            <li>Build an event emitter. ✅</li>
            <li>
              Create a debouncing function with leading and trailing calls. ✅
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
            <li>Implement Promise.all functionality. ✅</li>
            <li>Implement Promise.race functionality.</li>
            <li>Implement Promise.any functionality.</li>
            <li>Implement Promise.allSettled functionality.</li>
            <li>Find corresponding node in two identical DOM tree. ✅</li>
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
