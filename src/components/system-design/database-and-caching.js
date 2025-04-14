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
          <li>
            Try to keep different types of info seperatly like student info and
            associate college info should be kept seperatly.
          </li>
          <li>Have relationships with unique ids.</li>
          <li>
            Suppose we are having a list of users we might convert it to object
            where key is id and value is indivisual user data.
          </li>
          <li>
            If its required to maintain the order we can have a new key called
            order which contains an array with ids in order.
          </li>
        </ul>
      </Accordian>
      <Accordian header="HTTP Caching">
        <ul>
          <li>We do have something known as browser cache.</li>
          <li>
            Suppose we are requesting something from the server then those data
            will be first searched in the browser cache if data is not present
            in the cache then request will be made in the server.
          </li>
          <li>We can do browser caching by storing it in web storages.</li>
          <li>Suppose we dont have the data in cache.</li>
          <li>
            We can try and cache web resources like js,css,images,fonts,etc.
          </li>
          <li>
            Caching is going to reduce server traffic and give better user
            experience.
          </li>
          <li>
            We are having headers to control caching.
            <ul>
              <li>
                <strong>Cache Control</strong> : This is a response header which
                will cache the data for a given expiry. Whenever you will reload
                the api you will get the data from cache. Example : You can keep
                assests,images,etc.
              </li>
              <li>
                <strong>Expires</strong> : In the response header we have a time
                and new data will only be fetched once the expiry time is
                passed. Till that time data will be fetched from the cache.
              </li>
              <li>
                <strong>Last-Modified</strong> : A check which compares the last
                modified data time in server and client. Here server send 304 in
                case of last modified time is same. It means the data present in
                client is not modified use it as it is.
              </li>
              <li>
                <strong>Etag</strong> : A hash for each data. Here if the hash
                dont match means the data has been modified.
              </li>
            </ul>
          </li>
          <li>Priority : {"Cache-control > Expires > Last Modified , Etag"}</li>
          <li>
            Challenges
            <ul>
              <li>
                If you want to get data always from the server not from cache
                you have to add some random hash params so that the validation
                will fail in browser and data will come from server.
              </li>
            </ul>
          </li>
        </ul>
        <Accordian header="Cache Control">
          <ul>
            <li>
              <strong>public</strong>: Indicates the response may be cached by
              any cache, even if it is normally non-cacheable (e.g., private or
              dynamic content).
            </li>
            <li>
              <strong>private</strong>: Specifies that the response is specific
              to a single user and should not be cached by shared caches (e.g.,
              CDN or proxy servers).
            </li>
            <li>
              <strong>no-cache</strong>: Forces the browser to revalidate the
              cached content with the server before using it (it can still be
              cached but must be validated first). Here for subsequest request
              the browser will send the etag or last modified date to the server
              and server will send 304 if the data is not modified and 200 if
              the data is modified.
            </li>
            <li>
              <strong>no-store</strong>: Prevents the caching of the resource
              entirely; the browser must fetch it every time.
            </li>
            <li>
              <strong>max-age</strong>: Specifies the maximum time (in seconds)
              a resource is considered fresh; after this time, it must be
              revalidated.
            </li>
            <li>
              <strong>s-maxage</strong>: Similar to `max-age`, but it
              specifically applies to shared caches (like CDNs and proxies) and
              overrides `max-age`.
            </li>
            <li>
              <strong>must-revalidate</strong>: Requires caches to verify the
              freshness of a cached resource before using it, even after it
              becomes stale.
            </li>
            <li>
              <strong>proxy-revalidate</strong>: Same as `must-revalidate`, but
              only applies to shared caches (like proxies or CDNs).
            </li>
            <li>
              <strong>immutable</strong>: Tells the browser that the resource
              will not change, so it can be cached forever and doesn't need to
              be revalidated.
            </li>
          </ul>
        </Accordian>
      </Accordian>
      <Accordian header="Service Worker Caching">
        <ul>
          <li>
            Service Worker actually sits between the application, browser and
            network layer.
          </li>
          <li>
            It is a proxy and all the request will go through the
            <strong>Service worker</strong>
            and it decides if the newtwork request has to be done to the server
            or to the cache.
          </li>
          <li>
            The service worker needs to be installed and activated. Now service
            worker will perform the above operations.
          </li>
        </ul>
      </Accordian>
      <Accordian header="API Caching">
        <ul>
          <li>We can use some libraries to get internal in-memory caching.</li>
          <li>
            Example - React Query(known as TanStack Query can help in caching
            graphQL apis and rest apis), axios, swr, appolo client,
          </li>
          <li>
            Api caching statergies
            <ul>
              <li>
                <strong>cache-first</strong> : If data is present in cache dont
                make a server call. Example : Product Description
              </li>
              <li>
                <strong>network-only</strong> : Always fetch data from server no
                cache check. Example : Balance enquiry.
              </li>
              <li>
                <strong>cache-and-network</strong> : Get the data from cache
                first and make a call to network parallely once data is fetched
                from the server replace the data. Example : Product Reviews
                Details.
              </li>
              <li>
                <strong>cache-last</strong>
              </li>
              <li>
                <strong>no-cache</strong> : In case of no cache we are not even
                going to store the data in cache, in case of network only me may
                or maynot store the data in cache.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="State Management">
        <ul>
          <li>If page is reloaded data will be deleted.</li>
          <li>
            Example - Redux, Mobax, Context API(React), Behaviour Subject/Replay
            Subject/NgRx(Angular), Zustand(React)
          </li>
          <li>
            <strong>Redux</strong>
            <ul>
              <li>Has a central Store which keeps all the data/state</li>
              <li>
                The view/components are going to subscribe the store to get the
                data.
              </li>
              <li>
                If the component wants to add/modify any data it will dispatch a
                action.
              </li>
              <li>
                The actions are captured by reducers which actually contains the
                data updation logic and it executes the logic to update the
                state in store.
              </li>
            </ul>
          </li>
          <li>
            <strong>Context API</strong>
            <ul>
              <li>Data Passing without using prop drilling.</li>
              <li>
                It has <strong>Provider</strong> which provides the data.
              </li>
              <li>
                It has <strong>Consumer</strong> which consumes the data.
              </li>
            </ul>
          </li>
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
          <li>Service Factory in Angular.</li>
          <li>How things work differently in normal and incognito mode.</li>
          <li>
            Whats the size limit of browser cache and when not to use cache.
          </li>
          <li>Meaning of proxy.</li>
          <li>What are the types of data we can cache.</li>
          <li>How to achieve caching using axios.</li>
          <li>Context Api vs Redux</li>
        </ul>
      </Accordian>
    </>
  );
};

export default DatabaseAndCaching;
