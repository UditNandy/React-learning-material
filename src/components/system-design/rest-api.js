import Accordian from "../shared/accordian/accordian";

const RestApi = () => {
  return (
    <>
      <Accordian header="Client - Server Architecture">
        <ul>
          <li>
            In early days we used to have monolythic/1-tier architecture where
            both the frontend and backend code was present in a same place.
          </li>
          <li>Thr problem arised with scaling the application.</li>
          <li>
            To solve this problem 2-tier, 3-tier, ... , n-tier architecture came
            into picture.
          </li>
          <li>
            To communicate between 2 web services we need an API(Application
            Programming Interfae).
          </li>
          <li>
            It is a interface which allows communication between 2 applications.
          </li>
        </ul>
      </Accordian>
      <Accordian header="REST (Representational State Transfer API)">
        <li>It providers some rules and standards to build an API.</li>
      </Accordian>
      <Accordian header="Benifits of REST">
        <ul>
          <li>Ease of use</li>
          <li>
            Stateless (Server does not maintain any previous info about the
            client.)
          </li>
          <li>Scalability</li>
        </ul>
      </Accordian>
    </>
  );
};
export default RestApi;
