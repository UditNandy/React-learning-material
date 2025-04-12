import Accordian from "../shared/accordian/accordian";

const WebPageRendering = () => {
  return (
    <>
      <Accordian header="Browser Anatomy">
        <ul>
          <li>
            <strong>UI Interface</strong> : This is everything we see and
            interact with in our web browser, except for the actual web page we
            are viewing, like adressbar, bookmarks, tabs, etc.
          </li>
          <li>
            <strong>Browser Engine</strong> :{" "}
            <ul>
              <li>
                This is everything you see and interact with in your web
                browser, except for the actual web page you’re viewing.
              </li>
              <li>
                It coordinates various tasks such as managing browser tabs,
                handling user input events, managing browser history, and
                interacting with plugins or extensions. The browser engine acts
                as the core processing unit of the web browser, orchestrating
                all the components to provide a seamless browsing experience.
              </li>
              <li>
                Examples of browser engines include Blink (used in Google Chrome
                and Microsoft Edge), Gecko (used in Firefox), and WebKit (used
                in Safari).
              </li>
            </ul>
          </li>
          <li>
            <strong>Rendering Engine</strong> :
            <ul>
              <li>
                The rendering engine, also known as the layout engine, reads
                code (like CSS/HTML) to show web pages correctly on your screen.
              </li>
              <li>
                Different browsers use different rendering engines: Internet
                Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit,
                and Chrome/Opera use Blink (a version of WebKit).
              </li>
              <li>
                The rendering engine first reads the HTML code and creates a
                ‘content tree’ with elements. Then, it processes style data and
                combines it with HTML to form a ‘render tree’ with visual
                attributes.
              </li>
              <li>
                After that, it lays out the elements on the screen, determining
                their exact positions. Finally, it paints the elements on the
                screen.
              </li>
            </ul>
          </li>
          <li>
            <strong>Networking</strong> : This component handles network calls,
            such as HTTP requests and responses. It manages the communication
            between the browser and web servers, ensuring that data is sent and
            received correctly.
          </li>
          <li>
            <strong>UI Backend</strong> : It is the backend of the UI interface.
            It is used to draw basic widgets like combo boxes and windows. It
            exposes a generic API that is not platform-specific.
          </li>
          <li>
            <strong>JS Interpreter</strong> : As the name suggests, it is
            responsible for parsing and executing the JavaScript code embedded
            in a website. Once the interpreted results are generated, they are
            forwarded to the rendering engine for display on the user interface.
          </li>
          <li>
            <strong>Data Storage</strong> : It is a persistent layer. A web
            browser needs to store various types of data locally, for example,
            cookies. As a result, browsers must be compatible with data storage
            mechanisms such as WebSQL, IndexedDB, FileSystem, etc.
          </li>
        </ul>
      </Accordian>
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
            <a
              href="https://medium.com/@tsibo/how-browsers-work-basically-3c69676d11ee"
              target="_blank"
            >
              Refer This article
            </a>
          </li>
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
