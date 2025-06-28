import Accordian from "../../shared/accordian/accordian";

export const ReactSSR = () => {
  return (
    <>
      <Accordian header="React Server Side Rendering">
        <ul>
          <li>Its advisable to use next js for SSR.</li>
          <li>
            In react if we want to achieve SSR we need to setup a node server
            first.
          </li>
          <li>
            We will be sending the html from that node server and that html
            would have a jsx inside root tag.
          </li>
          <li>
            We have to use ReactDOMServer.renderToString() method which takes a
            JSX and returns a stringify or prerendered version of html which can
            be sent to the client as a part of server response.
          </li>
          <li>
            Now once the server sends the static html page we need to hydrate it
            with JS because the html that server sends does not have any
            interactiviy.
          </li>
          <li>
            We can use <strong>hydrateRoot</strong> method from react-dom/client
            which helps us in hydrating the static html with js.
          </li>
        </ul>
      </Accordian>
    </>
  );
};
