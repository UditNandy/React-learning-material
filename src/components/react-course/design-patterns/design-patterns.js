import Accordian from "../../shared/accordian/accordian";

const DesignPatterns = () => {
  const HigherOrderExample = HigherOrderContainer(HigherOrderContent);
  return (
    <>
      <Accordian header="Monolythic Architecture">
        <ul>
          <li>
            Traditionally everything (APIs, UI/JSP pages, Auth, DB, etc) was
            being written in a single project.
          </li>
          <li>Even for a small change the whole project has to be deployed.</li>
        </ul>
      </Accordian>
      <Accordian header="Microservice Architecture">
        <ul>
          <li>
            There are different services for different jobs (UI, Backend, Auth,
            DB, Email Notifications, SMS sending, etc).
          </li>
          <li>
            It follows seperation of concerns and single responsibility
            principle.
          </li>
          <li>We can have different tech stack for different micro service.</li>
        </ul>
      </Accordian>
      <Accordian header="Approaches of API call">
        <ul>
          <li>
            <strong>Api call first</strong>
            <ul>
              <li>
                Make the api call and once the data is loaded render the UI.
              </li>
              <li>
                Here the user has to wait for the api to respond so that the UI
                will be rendered.
              </li>
            </ul>
          </li>
          <li>
            <strong>Render UI first</strong>
            <ul>
              <li>
                Render the UI as soon as the page loads and call the API at the
                same time.
              </li>
              <li>When the api data is fetched the UI will be rerendered.</li>
              <li>
                Here the user experience will be better with a spinner, shimmer
                effect, etc.
              </li>
            </ul>
          </li>
          <li>
            Its advisable to use the 2nd approach, as it a better user
            experience.
          </li>
          <li>
            Although we are doing more rerenders but this can be taken care by
            the frameworks as all the frameworks has very optimised render
            cycles.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Higher Order Component">
        <ul>
          <li>
            It's a function that takes a component and returns a component.
          </li>
          <li>
            It adds some extra feature to the input component and returns it.
          </li>
          <li>
            You have to just create a function which takes a component in its
            argument.
          </li>
          <li>
            You have to return a function (components are functions) which
            returns a JSX.
          </li>
          <li>
            Now if you want to pass any props to the argumented component you
            can pass the props in the higher order component.
          </li>
          <li>You can get the props in the returned function.</li>
          <li>
            You can pass the entire props object to the inner component using
            spread operator.
          </li>
          <li>Please check the code for reference.</li>
          <li>
            Always remeber higher order components donot modify the existing
            components. It only add some new features to it.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Render Props">
        <ul>
          <li>
            Render prop is a prop which takes a function and returns a JSX.
          </li>
          <li>
            Here the responsibility of rendering the UI is on the function which
            is passed as prop to the component.{" "}
          </li>
          <li>
            The component here is responsible mainly to focus on the logic part
            rather then the UI/view.{" "}
          </li>
        </ul>
      </Accordian>
      <Accordian header="Pure Functions">
        <ul>
          <li>Functions which always produce same output for same input.</li>
        </ul>
      </Accordian>
      <Accordian header="Controlled and Uncontrolled Components">
        <ul>
          <li>
            <strong>Controlled Component</strong>
            <ul>
              <li>
                If the behaviour of a component is being managed by its parent
                or some other component.
              </li>
              <li>
                Here the state of the component is controlled by its parent and
                passed to the component as props.
              </li>
              <li>
                <strong>Example</strong> : Accordian container controlling if an
                indivisual accordian is open or not.
              </li>
            </ul>
          </li>
          <li>
            <strong>Uncontrolled Component</strong>
            <ul>
              <li>
                If the state/behaviour of a component is being managed by the
                component itself.
              </li>
              <li>
                <strong>Example</strong> : Indivisual accordians managing its
                open close itself.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>Real use cases of higher order components.</li>
        </ul>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>
            Higer order components donot modify the existing component it only
            add some new features to it.
          </li>
          <li>
            In higher order components we pass components to a function and in
            render props we pass a function to a component which renders the UI
            (both are just opposite).
          </li>
        </ul>
      </Accordian>
      <HigherOrderExample name="Udit" />
    </>
  );
};

const HigherOrderContainer = (HigherOrderContent) => {
  return (props) => {
    return (
      <div className="wrapper">
        <div>Higher Order Container</div>
        <HigherOrderContent {...props} />
      </div>
    );
  };
};
const HigherOrderContent = ({ name }) => {
  return <>Higher Order Content {name}</>;
};

export default DesignPatterns;
