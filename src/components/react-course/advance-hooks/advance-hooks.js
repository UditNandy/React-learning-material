import { createContext, useContext, useEffect, useState } from "react";
import Accordian from "../../shared/accordian/accordian";
import "./advance-hooks.css";
const AdvanceHooks = () => {
  const isOnline = useOnlineStatus();
  const example = useContext(UserContext);
  console.log(example);
  return (
    <>
      <Accordian header="hooks">
        <ul>
          <li>It is a normal JS function.</li>
          <li>They are like a utility function.</li>
          <li>We should call hooks only at top level functions.</li>
        </ul>
      </Accordian>
      <Accordian header="useState">
        <ul>
          <li>
            It create a variable which mantains the state of a react component.
          </li>
          <li>The scope of a state variable is inside a component.</li>
          <li>
            It will return a array where at index 0 we will have the state
            variable and at index 1 we will get setter method to update the
            state variable.
          </li>
          <li>
            You can take the variable or the setter method whatever you need
            from the array returned by useState.
          </li>
          <li>It takes a default value as argument. </li>
          <li>
            Whenever a state variable updates react rerender's the component.
          </li>
          <li>
            State variable means it remebers the latest state of the variables
            within different renders.
          </li>
          <li>
            Whenever a component gets re-rendered it logically means calling the
            component function again. Now the normal functions will get
            re-initialised to the default values and we will not get the updated
            values, but the state values does. This is why state values are
            required.
          </li>
          <li>
            React will also not get any update about if the normal variable has
            changed so it cannot even figer out when the re-render has to be
            done.
          </li>
          <li>
            We see that const variables can be changed in case of useState. This
            is because whenever a new state variable changes, the reconciliation
            process happens again, which means the component function will be
            called again, but this time useState will return the updated value
            of the state. So the const variable is now a new instance of the
            previous variable which gets initialised again with updated state
            value.
          </li>
          <li>
            Whenever a state variable changes react call the reconciliation
            cycle.
          </li>
          <li>
            Note that if you are calling setState on change of a input box value
            then reconciliation will happen for every key stroke you make, but
            because of efficient reconciliation algo of react it doesn't makes
            much impact, but even if you want to stop the unnecessary
            reconciliation you can use useRef, or forms.
          </li>
          <li>
            Remeber that although reconciliation is happening but it does not
            necessary means the dom will be changed, it depends on the diff
            algo.
          </li>
          <li>Always call useState inside the component function.</li>
          <li>
            It is used for creating local state variables inside the functional
            components.
          </li>
          <li>
            Its recommended to declare state variables on top and useEffect
            after state variables.
          </li>
          <li>
            Its also not recommended to call useState inside if else or any
            inner functions.
          </li>
        </ul>
      </Accordian>
      <Accordian header="useEffect">
        <ul>
          <li>
            It takes 2 arguments callback function and a dependency array.
          </li>
          <li>
            The callback function will be called after the component is rendered
            or based on dependency array.
          </li>
          <li>
            The UI will be rendered first and then use effect will be called.
          </li>
          <li>
            We can return a cleanup function from useState which will take care
            of cleanups before that particular useEffect is called again.
          </li>
          <li>
            The cleanup function of useEffect will be called when the same
            useEffect is going to be called for the next time.
          </li>
          <li>
            In case of an empty dependency array the cleanup function will be
            called before the component is going to unmount.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Lifting the state up">
        <ul>
          <li>Giving parent the authority to manipulate the state of child.</li>
          <li>
            It is like managing the state in the parent component and passing
            the state as props to child.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Props Drilling">
        <ul>
          <li>
            Passing data from grand parent to grand children, where the children
            doesnot necessarily need the props.
          </li>
          <li>To solve this problem we can use context or redux store.</li>
        </ul>
      </Accordian>
      <Accordian header="React Context">
        <ul>
          <li>It is like a global thing.</li>
          <li>Its better to keep different context in different files.</li>
          <li>
            We can create a context using createContext method from 'react'.
          </li>
          <li>
            createContext takes a object as a argument where you can pass in the
            default values.
          </li>
          <li>
            To access the values of context we can use a hook
            <strong>useContext</strong> and we can get the data anywhere in the
            app.
          </li>
          <li>This useContext takes the context variable that we created.</li>
          <li>
            This useContext will return the object of values and functions that
            are present inside the context.
          </li>
          <li>We can have as many context as we want to in a react app.</li>
          <li>
            For class components we can use{" "}
            <strong>
              {
                "<ContextName.consumer>{(data)=>{console.log(data)}}</ContextName.consumer>"
              }
            </strong>{" "}
            inside the JSX.
          </li>
          <li>
            Here we pass a callback function in between the component
            ContextName.consumer which gives us the data.
          </li>
          <li>
            If we want to pass new data to the context we can use
            <strong>
              {
                "<ContextName.Provider value={}> <Component/></ContextName.Provider>"
              }
            </strong>
          </li>
          <li>
            To add new values we can simply pass the value inside the value
            props of ContextName.provider .
          </li>
          <li>
            Now all the component which are the child of ContextName.provider
            will get the updated value.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Custom Hooks">
        <ul>
          <li>
            It helps in removing the extra responsibility from the components.
          </li>
          <li>Its recommended start with word use.</li>
          <li>
            Although its not recommended to use the word use but lot of projects
            has a linter and it might throw error because of our coding
            practices.
          </li>
          <li>We can use other hooks inside a custom hook.</li>
          <li>
            The ideal job of a component should be rendering the data, not
            processing it. This is where custom hooks are required.
          </li>
          <li>It helps in managin single responsibility principle.</li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>Why we need useState rather then a normal variable.</li>
          <li>How can a const variable be modified in case of useState.</li>
          <li>
            Which type of values you can have inside useEffect's dependency
            array.
          </li>
          <li>
            Can we pass a async callback function inside the useEffect hook.
          </li>
          <li>
            What will happen if you start a setInterval in the cleanup function
            of useEffect.
          </li>
          <li>Hooks vs normal functions vs utility functions.</li>
          <li>
            What are the principles we need to focus while creating a custom
            hook
          </li>
          <li>
            Can we make a custom hook for useLocalStorage, useSessionStorage,
            etc.
          </li>
          <li>
            Custom hook to determine if user is online or offline, internet is
            active or inactive(check useOnlineStatus hook below in code ).
          </li>
          <li>What is a linter(ES Lint).</li>
          <li>Lifting the state up</li>
          <li>Example of Props drilling : Dark/Light Theme, Login info, etc</li>
          <li>
            What will happen if we are having nested context providers with
            different values at different levels.
          </li>
          <li>Can we use Context.Consumer inside functional components.</li>
          <li>Whats the difference between context and redux store.</li>
          <li>
            How to prevent re rendering after setState : Donot update the state
            return the prev value only if current and prev value are same.
          </li>
          <li>
            What you should do if you want to update the state but not re render
            it? Use ref in this case.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Note">
        <ul>
          <li>
            If you are providing a new value but you have only wrapped a certain
            amount of code and not the while code then remember only the
            children of the wrapped code will get the updated value. Rest
            everywhere you will get the old/default value. Based on requirement
            you need to choose if you want to provide the updated value to
            entire app or only some particular section of app.
          </li>
          <li>Context also works in case of lazy loaded components.</li>
        </ul>
      </Accordian>
    </>
  );
};

/*
  Checks if internet is on or not
  We have to use window : online event
  Returns a boolean value
*/
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("Online called called");
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      console.log("Offline called");
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

const UserContext = createContext({
  loggedIn: false,
});

export default AdvanceHooks;
