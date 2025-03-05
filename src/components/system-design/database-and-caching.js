import Accordian from "../shared/accordian/accordian";

const DatabaseAndCaching = () => {
  return (
    <>
      <Accordian header="Levels of Caching">
        <ul>
          <li>
            <strong>HTTP Caching(Caching done in network layer)</strong>
          </li>
          <li>
            <strong>Service Worker</strong>
          </li>
          <li>
            <strong>API Caching</strong>
          </li>
          <li>
            <strong>Application Level Caching</strong>
            <ul>
              <li>State Management Libraries(Redux, Zustand, etc)</li>
              <li>Component State</li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Browser Databases">
        <ul>
          <li>
            <strong>Local Storage</strong>
          </li>
          <li>
            <strong>Session Storage</strong>
          </li>
          <li>
            <strong>Cookie</strong>
          </li>
          <li>
            <strong>Index DB</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Local Storage">
        <ul>
          <li>Used to store data on user's browser persistantly.</li>
          <li>Data will be deleted only if we delete it explicitly.</li>
          <li>Browser gives us api to setItem, getItem, removeItem, clear.</li>
          <li>The size limit is 5MB to 10MB per domain.</li>
          <li>The operations performed here are synchronous.</li>
          <li>
            Avoid some heavy/high computational works as this might block the
            main thread.
          </li>
          <li>Data is persisted across all the tabs and browser sessions.</li>
          <li>
            Here data is stored in key value pairs, values are always stored as
            string here.
          </li>
          <li>
            Think about encrypting the data before storing because any normal
            user can access the data present in local storage.
          </li>
          <li>
            General use case is - user preference, theme mode, card data in case
            of user not loggedin etc.
          </li>
          <li>
            What not to store - jwt token , sensetive data, large data, cross
            profile data(netflix profile) etc.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Session Storage">
        <ul>
          <li>Has apis like getItem, setItem, removeItem, clear.</li>
          <li>Size of 5mb per domain</li>
          <li>Synchrnous</li>
          <li>
            Data gets cleared when browser session ends or tab/window closes.
          </li>
          <li>
            Store data in key value pair and value is always in string format.
          </li>
          <li>
            In case of duplicate tab the current session storage is also copied
            to new tab but are different instances.
          </li>
          <li>When to use - Temporary sensitive data, large dataset</li>
        </ul>
      </Accordian>
      <Accordian header="Cookie">
        <ul>
          <li>Client side storage to store persistant data.</li>
          <li>Only js can retrive the information.</li>
          <li>Cookies can get transmitted via http calls.</li>
          <li>
            Data can be stored in client side either by client or by server.
          </li>
          <li>
            Whatever cookies are present will automatically be sent to the
            server by the HTTP call.
          </li>
          <li>Server can always read the cookie which is set by the client.</li>
          <li>
            Client may or may not read the cookie which is set by the server.
          </li>
          <li>
            Types of cookie
            <ul>
              <li>
                <strong>Session Cookie</strong> : Expires on browser close.
              </li>
              <li>
                <strong>Persistant Cookie</strong> : Expires on defined expiry.
              </li>
              <li>
                If no expiry is configured it will expire on browser
                close(session cookie).
              </li>
            </ul>
          </li>
          <li>Size is 4kb per domain</li>
          <li>
            Cookies will travel from client to server and server to client so if
            cookie is heavy performance/speed can be an issue.
          </li>
          <li>
            It stores data in key value pair and value is again a string
            semicolon seperated.
          </li>
          <li>Recommende to use sameSite attibute, domain/path config</li>
          <li>Can use for auth tokens, user preference, etc</li>
          <li>Not suitable for large data.</li>
          <li>
            To set a cookie we can use{" "}
            <strong>
              document.cookie = "username=JohnDoe; expires=" +{"{expiryTime}"} +
              "; path=/";
            </strong>{" "}
          </li>
          <li>
            While logging out(or in any api response) if we get
            'Clear-Site-Data':"Web storage names,cache" in response headers then
            our web storages will get cleared
          </li>
          <li>To get the cookie whe have to to seperate it using semi colon</li>
          <li>Example : Remeber me in case of login (persistant cookie)</li>
        </ul>
      </Accordian>
      <Accordian header="Index DB">
        <ul>
          <li>Client Side Storage for persistant data.</li>
          <li>Operations happens in a asynchronous manner.</li>
          <li>More then 100MB and used for large dataset.</li>
          <li>Teams chart, offline google doc, etc.</li>
          <li>Data persists across browser sessions.</li>
          <li>
            It supports key:value format where value is any complex data
            structure(file/blob), etc.
          </li>
          <li>It can help us to create indexes for performance.</li>
          <li>
            When to use - Large data set, offline mode(history support),teams
            chat messages even when internet is not connected.
          </li>
          <li>When not to use - sensitive data/secured data,small data set.</li>
          <li>Think about encryption in case of sensitive data.</li>
          <li>Follows same origin policy.</li>
          <li>As name suggests its an db on browser.</li>
          <li>
            In case of web.whatsapp.com it used index db to store offline data
          </li>
          <li>We can use Dexie.js which is a wrapper library for index db.</li>
        </ul>
      </Accordian>
      <Accordian header="Normalisation">
        <ul>
          <li>
            Simplifing a complex structure (flatterning a complex structure).
          </li>
          <li>Try to keep different types of info seperatly.</li>
          <li>Have relationships with unique ids.</li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>
            <div>
              Suppose there are multiple tabs and there is a light/dark theme
              option in local storage so so if the theme changes in one tab same
              theme settings should be applied in the others. How?
            </div>
            <div>
              Ans : Use window.addEventListner('storage',(){"=>{}"}) / Polling
              using setInterval
            </div>
          </li>
          <li>Difference between document and window.</li>
        </ul>
      </Accordian>
    </>
  );
};

export default DatabaseAndCaching;
