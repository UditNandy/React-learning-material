import Accordian from "../shared/accordian/accordian";

const WebPageRendering = () => {
  return (
    <>
      <Accordian header="1. Typing the url">
        <ul>
          <li>
            First the url is typed by the user in the browser's adress bar.
          </li>
        </ul>
      </Accordian>
      <Accordian header="2. URL Parsing">
        <ul>
          <li>The browser breaks down the URL into parts : </li>
          <li>
            <strong>https : </strong> : Protocol.
          </li>
          <li>
            <strong>domain name : </strong> : www.google.com
          </li>
          <li>
            <strong>other query or path param</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="3. DNS Lookup">
        <ul>
          <li>
            The browser needs the ip to establish a connection with the server.
          </li>
          <li>The browset 1st looks the ip into its cache.</li>
          <li>Then in the OS.</li>
          <li>Then in DNS resolver (generally provided by the ISP).</li>
        </ul>
      </Accordian>
      <Accordian header="4. Establish Connection with the server">
        <ul>
          <li>
            <strong>Using HTTP</strong>
          </li>
          <li>
            <strong>Using HTTPS</strong> : Here the encryption keys are
            exchanged first.
          </li>
        </ul>
      </Accordian>
      <Accordian header="5. Sending the request">
        <ul>
          <li>Now the browser sends a get request to the server.</li>
          <li>
            If every thing is connect the browser responds 200 with a response
            of content-type <strong>text/html</strong>
          </li>
          <li>Here the server generally responds the index.html.</li>
        </ul>
      </Accordian>
      <Accordian header="6. Parsing the HTML">
        <ul>
          <li>The browser starts parsing the index.html now.</li>
          <li>While the browser starts parsing the html it builds the dom.</li>
          <li>At the point it encounters the script(js) and link(css) tags.</li>
          <li>
            Now the browser sends multiple parallel request to fetch the js
            scripts(bundle.js), css stylesheets(style.css).
          </li>
          <li>bundle.js {"->"} content-type is application/javascript</li>
          <li>bundle.css {"->"} content-type is text/css</li>
          <li>assets(img) {"->"} content-type is image/png </li>
          <li>The browser parses the HTML to create a DOM.</li>
        </ul>
      </Accordian>
      <Accordian header="7. CSSOM">
        <ul>
          <li>
            While the browser is parsing the HTML it encounters the style tags.
          </li>
          <li>
            It then fetches the style sheets and starts creating the cssom.
          </li>
          <li>
            Remeber CSS is render blocking. It can block the rendering of the
            HTML document.
          </li>
          <li>
            HTML and CSS can be parsed paralley to generate DOM and CSSOM but
            the render tree will not be generated which is actually responsible
            for rending the UI.
          </li>
          <li>
            CSS can even block js parsing as js can access the CSS elements.
          </li>
        </ul>
      </Accordian>
      <Accordian header="8. Render Tree">
        <ul>
          <li>DOM and CSSOM is combined to create the render tree.</li>
          <li>Render tree is the final representation of the UI.</li>
          <li>It contains the visible elements of the page.</li>
        </ul>
      </Accordian>
      <Accordian header="9. Layout">
        <ul>
          <li>
            Here based on the render tree the placement of the elements on the
            screen is decided by the browser.
          </li>
        </ul>
      </Accordian>
      <Accordian header="10. Painting">
        <ul>
          <li>
            Once the layout has been created the browser paints the elements and
            fills the colors and styles.
          </li>
        </ul>
      </Accordian>
      <Accordian header="11. Composition">
        <ul>
          <li>
            Here the small painted parts are combined to display the final image
            on the browser.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>
            HTML follows <strong>incremental rendering</strong> means it can be
            parsed part by part, as it is being downloaded. It is declarative in
            nature.
          </li>
          <li>JS has to parsed at once.</li>
          <li>
            CSS is render blocking it means the render tree creation will be
            blocked untill and unless CSSOM is created.
          </li>
          <li>
            Javascript is parser blocking because it has the ability to modify
            the dom.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default WebPageRendering;
