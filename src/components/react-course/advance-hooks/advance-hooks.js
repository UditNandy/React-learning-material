import Accordian from "../../shared/accordian/accordian";
import "./advance-hooks.css";
const AdvanceHooks = () => {
  return (
    <>
      <Accordian header="hooks">
        <ul>
          <li>It is a normal JS function.</li>
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
        </ul>
      </Accordian>
    </>
  );
};

export default AdvanceHooks;
