import Accordian from "../../shared/accordian/accordian";

const ReduxIntro = () => {
  return (
    <>
      <Accordian header="Introduction">
        <ul>
          <li>It is a popular state management library.</li>
          <li>
            It provides a very structred process/way to manage state in the
            application.
          </li>
          <li>Behind the scenes it uses Context Api in React.</li>
          <li>
            A redux store has 3 main concepts{" "}
            <ul>
              <li>Global State</li>
              <li>State Update Logic (Reducers)</li>
              <li>Method to notify state change</li>
            </ul>
          </li>
          <li>In redux you should never mutate the state.</li>
          <li>
            You have to return a entirely new state/new copy of state every time
            you change the state (using spread operator/structuredClone).
          </li>
          <li>
            Updating the state in redux is the job of reducers we will only send
            the new state and redux will internally update the store.
          </li>
          <li>Reducer functions take 2 params state, action</li>
          <li>The action has 2 parts type and payload.</li>
        </ul>
      </Accordian>

      <Accordian header="Interview Questions">
        <ul>
          <li>
            Why redux recommends immutable states although it might take more
            space. :- React will not be able to understand if the state changed
            if we donot change the reference.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>
            Behind the scenes setState method in React also creates a new object
            because in case of mutable objects react will not be able to
            identify if the state changed or not.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default ReduxIntro;
