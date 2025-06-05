import Accordian from "../shared/accordian/accordian";

const Overview = () => {
  return (
    <>
      <Accordian header="Requirement Analysis">
        <ul>
          <li>Always be clear about the requirement.</li>
          <li>
            Donot hesitate to ask the interviewr about the acceptance criteria
            and if possible you can also ask for a real world example.
          </li>
          <li>In general problem will be open ended.</li>
          <li>
            Always try to find the <strong>functional</strong> and{" "}
            <strong>non functional</strong> requirement of the problem
            statement.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Steps of approaching the problem">
        <ul>
          <li>
            <strong>Requirement Analysis</strong> : Find the functional and
            non-functional requirements.
          </li>
          <li>
            <strong>Prioritisation</strong> : In general the requirements might
            be too big or lots of functional and non functional requirements. We
            cannot cover everything thats where we need to pick some
            functionality ahead of others.
          </li>
          <li>
            Think about different views, controllers/services,
            storage(state,cache,web storage,etc)
          </li>
          <li>Talk about data model, desiging the interface.</li>
        </ul>
      </Accordian>
      <Accordian header="Some important questions">
        <ul>
          <li>
            In many places we have seen if we are seeing a video and left it
            midway when we return the video starts from mid. How?
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Overview;
