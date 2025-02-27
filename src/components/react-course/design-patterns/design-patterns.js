import Accordian from "../../shared/accordian/accordian";

const DesignPatterns = () => {
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
    </>
  );
};

export default DesignPatterns;
