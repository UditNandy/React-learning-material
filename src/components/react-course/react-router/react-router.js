import Accordian from "../../shared/accordian/accordian";

const ReactRouter = () => {
  return (
    <>
      <Accordian header="react-router-dom">
        <ul>
          <li>
            To achieve routing in react we can use a js library react-router-dom
          </li>
          <li></li>
        </ul>
      </Accordian>
      <Accordian header="Single Page Application">
        <ul>
          <li>
            If we go to different routes then only component changes the entire
            html file doesnot.
          </li>
          <li>Browser doesnot reloads when we navigate between routes.</li>
          <li>
            We can have 2 types of routings
            <ul>
              <li>
                <strong>Client Side Routing</strong> : We donot get a new html
                file on navigating between the pages only the component changes.
                We already have all the content of different routes in the
                initial index.html.
              </li>
              <li>
                <strong>Server Side Routing</strong> : We get a new html file
                when navigate between pages.
              </li>
            </ul>
          </li>
          <li>
            Always remeber single page applications doesnot reloads the page it
            only hides and shows the components.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>Does react comes with any inbuild routing.</li>
          <li>
            Is it possible to achieve routing in react without any js library.
          </li>
          <li>Cons of single page application</li>
        </ul>
      </Accordian>
    </>
  );
};

export default ReactRouter;
