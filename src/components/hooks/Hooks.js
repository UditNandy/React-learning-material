import React, { useEffect, useReducer, useRef, useState } from "react";

export const Hooks = () => {
  const [count, setCount] = useState(0);
  const reducer = (currentState, action) => {
    switch (action) {
      case "increment":
        return { count: currentState.count + 1 };
      case "decrement":
        return { count: currentState.count - 1 };
      default:
        return { count: 0 };
    }
  };
  const [reducerCount, setReducerCount] = useReducer(reducer, { count: 0 });

  const divRef = useRef();

  const onRefHover = () => {
    divRef.current.style.color = "blue";
  };

  const onMouseLeave = () => {
    divRef.current.style.color = "black";
  };

  useEffect(() => {
    console.log("Call back function");
    return () => {
      console.log("Clean up function");
    };
  }, [reducerCount]);

  return (
    <div>
      <h2>Hooks</h2>

      <div className="wrapper">
        <h3>Rules of hooks</h3>
        <ul>
          <li>We can call a hook only within a functional component.</li>
          <li>
            Hooks must be called in top level of a component and not inside andy
            function or block.
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>Lifecycle hooks (Only class components)</h3>
        <ul>
          <li>
            <strong>Mounting</strong> : Called when an instance of a component
            is created and inserted into the DOM.
          </li>
          <li>
            <strong>Updating</strong> : When a component is being rerender due
            to change in its props or state.
          </li>
          <li>
            <strong>Unmounting</strong> : When a component is being removed from
            the DOM.
          </li>
          <li>
            <strong>Error Handling</strong> : When there is an error durring
            rendering a lifecycle method.
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>useState</h3>
        <ul>
          <li>
            If we change any state of a component directing using = operator
            then then variable changes but the JSX is not rerendered. Due to
            which the change will not reflect in UI.
          </li>
          <li>
            Here comes useState hook. useState return an array where at index 0
            a variable will be present whose value will change and at index 1
            there will be a function which can be called to change the value of
            the variable.
          </li>
          <li>
            <strong>Syntax</strong> :
            <strong>const [count , setCount] = useState(0)</strong>, here we are
            using array desctructuring to store index 1 at count and index 2 at
            setCount. Here 0 is the intial value. It is a optional parameter.
          </li>
          <li>
            To get the previous value and modify the previous value we can use a
            callback function inside the setter method of useState which will
            take prevValue as parameter and we can modify values accodingly.
          </li>
          <li>
            Always remember in react state update is an async process and it
            might happen that if we are using previous state directly to make
            modification in the state then the previous state might be outdated.
            So we should always use call back methods when our new state depends
            on previous state.
          </li>
          <li>
            <strong>Note</strong> : Even if the state variable is of type{" "}
            <strong>const</strong> we can still change it because here we are
            not directly changing the const variable, infact useState rerenders
            the Component with a new value.
          </li>
          <li>
            Example : count : {count}
            <button
              onClick={() => {
                setCount((prev) => {
                  return prev + 1;
                });
              }}
            >
              Increment
            </button>
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>useRef</h3>
        <ul>
          <li>The useRef Hook allows you to persist values between renders.</li>
          <li>
            It can be used to store a mutable value that does not cause a
            re-render when updated.
          </li>
          <li>It can be used to access a DOM element directly.</li>
          <li>
            Example of accessing dom elements directly.
            <div
              onMouseEnter={onRefHover}
              onMouseLeave={onMouseLeave}
              ref={divRef}
            >
              useRef example
            </div>
            Here the color of the text changes on hover this is handled using
            useRef which is accessing the DOM elements directly using ref=
            {" '{' '}'"}
            attribute.
          </li>
          <li>
            To count the number of renders if we will use useState then useState
            will re render the page and we will get stucked into an infinite
            loop. To solve this problem we can use useRef as it updates the
            value but doenot causes any rerender.
          </li>
          <li>
            useRef() only returns one item. It returns an Object called current.
          </li>
          <li>We can pass an initial value as well to useRef hook.</li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>Side effects</h3>
        <ul>
          <li>
            Everything that might be happening in our application which is not
            related to UI rendering.
          </li>
          <li>
            These are tasks which might be required when some state changes.
          </li>
          <li>
            <strong>Ex : </strong>Sending a http request to the server,
            interacting with web storages, working with timer functions.
          </li>
          <li>In react we have useEffect to work with side effects.</li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>useEffect</h3>
        <ul>
          <li>
            This react hook is used to make some side effects whenever ay
            dependencies changes or during the rerenders.
          </li>
          <li>
            It takes 2 arguments first a callback function and 2nd is a
            dependency array.
          </li>
          <li>We can return a clean up function from the useEffect hook.</li>
          <li>
            The cleanup function will execute at the last for the first render
            and for all the rest renders it will get executed before anyother
            other logic in useEffect hook.
          </li>
          <li>
            If we want to write any debouncing logic we can write it inside
            cleanup functions.
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>useReducer</h3>
        <ul>
          <li>
            It is just used for state management like useState but it is used to
            handle complex operations.
          </li>
          <li>
            It returns a array where index 0 represents the state and index 1
            represents the function to update the state.
          </li>
          <li>
            Inside useReducer hook we need to pass 2 arguments. 1st is a reducer
            function and 2nd is the initial value.
          </li>
          <li>
            The reducre function is a custom function which we need to define
            and it will be used to update th state.
          </li>
          <li>
            The reducer function again accepts two arguments 1st is the current
            state value , 2nd is the action.
          </li>
          <li>
            The action value is passed in the update state method and based on
            this action we will perform the updation.
          </li>
          <li>
            <strong>Ex : </strong>
            <button
              onClick={() => {
                setReducerCount("decrement");
              }}
            >
              -
            </button>
            {reducerCount.count}
            <button
              onClick={() => {
                setReducerCount("increment");
              }}
            >
              +
            </button>
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>React Context</h3>
        <ul>
          <li>
            We use contexts in react to manage states globally or share data
            between sibling components.
          </li>
          <li>
            To use context we have to first create a context using
            <strong>createContext()</strong> method and then we can wrap the
            components in between the context we created.
          </li>
          <li>We can pass an initial value in create context.</li>
          <li>
            We have to use {"<ContextName.Provider></ContextName.Provider>"} and
            we have a value prop in the context provider using which we can pass
            all the methods and states.
          </li>
          <li>
            For better quality and separation of concern we can further create a
            context component and can pass the actual component to be displayed
            as a children props.
          </li>
          <li>
            To access the methods and states that we passed to the value prop in
            the context provider we need to use <strong>useContext</strong>{" "}
            hook.
          </li>
          <li>
            We have to pass the context name in the useContext hook and it will
            provide us an object of all the methods and states. We can
            destructure them and use.
          </li>
          <li>
            It is a better practice to create and keep all the context in a
            single file and export them. So that they can be imported wherever
            required.
          </li>
        </ul>

        <strong>Limitations of context</strong>
        <ul>
          <li>It might make a component non reusable.</li>
          <li>It is not optimised fr high frequency changes.</li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>forwardRef & useImerativeHandle</h3>
        <ul>
          <li>
            <strong>forwardRef</strong> function allows us to pass a ref through
            a component to one of its children.
          </li>
          <li>
            This is particularly useful when you are working with higher-order
            components (HOCs) or when you need to access the underlying DOM
            element or instance of a child component from the parent component.
          </li>
          <li>Please go through this topic in detail.</li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>Memo</h3>
        <ul>
          <li>
            We often see that if we are passing something as a prop to a child
            component then the child component rerenders. Even if the prop
            hasn't changed.
          </li>
          <li>
            This can lead to performance issues as we are rerendering the child
            components again and again even if no prop has changed.
          </li>
          <li>
            To prevent this we can wrap our component name in React.memo while
            exporting it.
          </li>
          <li>
            Memo actually tells react to compare current prop state with
            previous prop state and in case of any difference it executes the
            component.
          </li>
          <li>
            If we are using react memo then we are having a trade off between
            performance cost of re evaluating the component with that of
            comparison of props values.
          </li>
          <li>
            So if there is a component where we know that the props value will
            changes frequently so in that case we should not use memo.
          </li>
          <li>
            If we are passing an array as a prop then even if the value of array
            doesnot change a new copy of array will be assigned to the prop and
            the child component will be executed even if we hav't made any
            changes in the array.
          </li>
          <li>
            Same applies in case of functions if we pass function as a prop.
            Every time we send a function to a child component a new reference
            is created and the component executes even if nothing has changed.
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>useCallback</h3>
        <ul>
          <li>
            We often see that whenever we pass a function as a prop to a child
            component in react the component gets re render if the parent
            component renders even if the component is wrapped inside memo.
          </li>
          <li>
            To overcome this we have useCallback which actually memorises the
            function passed inide it.
          </li>
          <li>
            When ever we are passing a function iside useCallback the function
            gets memorised and its reference does not changes after rerenders as
            well.
          </li>
          <li>
            Always remeber the function passed inside useCallback will be saved
            in react's interal memory and it will not be created. It means even
            if we are dependent on some state or we are using some state inside
            a function then also the value of the state inside the function will
            not change even if that state got changed.
          </li>
          <li>
            To overcome this issue we have a dependency array that we need to
            pass just like we do in useEffect which will notify useCallback that
            the state got change and the function will get recreated with the
            value of new state.
          </li>
          <li>
            We can pass a blank array if we want to create the function just
            once at the starting.
          </li>
        </ul>
      </div>
    </div>
  );
};
