import Accordian from "../shared/accordian/accordian";

const Performance = () => {
  return (
    <>
      <Accordian header="Performance">
        <ul>
          <li>
            <strong>User Experience </strong> : It is generally related with
            user experience, better the user experience better the performance.
          </li>
          <li>
            <strong>Productivity</strong> : Its like the app should not take a
            lot of time to load which might reduce the productivity.
          </li>
          <li>
            <strong>Customer Satitfaction</strong>
          </li>
          <li>
            <strong>Revenue & Profitability (Resouce Utilization)</strong> :
            Suppose our bundle or assets are too large in size so we are going
            to pay more as the size increases and we need more memory to keep
            it. Now as the data is having more size so to download that data we
            need to spend more amount of internet data.
          </li>
          <li>
            <strong>Operational Costs</strong> : We need to hire more
            operation/support team.
          </li>
          <li>
            <strong>Competitive Advange</strong> : Flipkart vs Amazon
          </li>
          <li>
            <strong>Search engine ranking</strong> : Websites which load fast
            have a better search index and will be ranked higher in searches.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Understanding the user">
        <ul>
          <li>
            <strong>Device the user is using.</strong> : Like mobile or desktop,
            screensize, etc.
          </li>
          <li>
            <strong>Network Quality</strong>
          </li>
          <li>
            <strong>CPU and GPU </strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Business Metrices">
        <ul>
          <li>
            <strong>Session Time</strong> : How much time users are spending on
            our website.
          </li>
          <li>
            <strong>Bounce Rate</strong> : Someone came to our website but as
            the website took a lot of time to load the user went off.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Performance Matrix">
        <ul>
          <li>
            We can see the web vitals in the performance tab of browser's
            devtools.
          </li>
          <li>
            These are metrices which is going to tell us whether our website is
            healty or not in terms of performance.
          </li>
          <li>
            Website Loads {"->"} Website becomes interactive {"->"} Visual
            Stability
          </li>
          <li>
            <strong>LCP (Largest Contentful Paint)</strong> : Matrix which shows
            how much time it took to load the maximum content of the page in
            order to make it look like ready.
          </li>
          <li>
            <strong>FCP (First Contentful Paint)</strong> : Time after which the
            first content is painted on the screen.
          </li>
          <li>
            <strong>FID (First Input Delay)</strong> : The delay between first
            interaction(click,hoker,etc) and getting the 1st response of that
            activity. Delayt between 1st input and 1st output.
          </li>
          <li>
            <strong>CLS (Cumulative Layout Shift)</strong> : While consuming the
            website their may be multiple shifts in the layout like image got
            loaded suddenly or something expanded as the data got fetched. All
            kind of unstable things which changes the layout.
          </li>
          <li>
            <strong>INP (Interaction to Next Paint)</strong> : Similar to FID
            but here we are not only monitoring the 1st interaction but the next
            subsequent interactions. Its going to give the worst interaction or
            the longest delay among multiple interactions. It is a new addition
            to core web vitals.
          </li>
          <li>
            Delay in interaction can be due to multiple reasons. Example : A
            heavy computation task is being performed, event delegation(having a
            single event lister for multiple children events), etc.
          </li>
          <li>If we are not able to measure something we cannot improve it.</li>
          <li>
            We can get performance matrix using lighthouse as well which is a
            part of our dev tools.
          </li>
          <li>
            <strong>Browser Centric Metric</strong> : Related to browser level
            like loading and rendering the page.
            <ul>
              <li>
                <strong>Time to first byte (TTFB) </strong> : How much time it
                took to get the first byte from server.
              </li>
              <li>
                <strong>Network Request </strong> : How many parallel requests
                we have made.
              </li>
              <li>
                <strong>DNS Resolution Time</strong> : Time it took to make a
                dns lookup.
              </li>
              <li>
                <strong>Connection Time</strong> : Time it took to complete the
                handshake.
              </li>
              <li>
                <strong>DOM Content Loaded</strong> : Dom related contents are
                loaded.
              </li>
            </ul>
          </li>
          <li>
            <strong>User Centric Metric</strong> : How the user experience is.
            <ul>
              <li>
                <strong>First Contentful Paint (FCP)</strong>
              </li>
              <li>
                <strong>Largest Contentful Paint (LCP)</strong>
              </li>
              <li>
                <strong>First Input Delay (FID)</strong>
              </li>
              <li>
                <strong>Interation to Next Paint (INP)</strong>
              </li>
              <li>
                <strong>Total blocking time </strong> : Time gap between FCP and
                first time to interactivity.
              </li>
              <li>
                <strong>Cumulative Layout Shift (CLS)</strong>
              </li>
            </ul>
          </li>
          <li>
            There is no threshold for best performance, in the end we have to
            define what a good performance is.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Performance Monitoring Tools">
        <ul>
          <li>
            <strong>Developer Mode</strong> :
            <ul>
              <li>
                <strong>Lighthouse</strong> : While using lighthouse always open
                the console in a new window as keeping the dev tools in the same
                tab might reduce the light house metric parameters.
              </li>
              <li>
                <strong>Network tab</strong>
              </li>
              <li>
                <strong>Performance tab</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>Simulated Environment</strong> :
            <ul>
              <li>
                <strong>webpagetest.org</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>Real Environment</strong> :
            <ul>
              <li>
                <strong>CRUX (Chrome User Experience Report)</strong> : It is a
                user experience report where chrome monitors and stores
                informations about the websites/frequently used website.
              </li>
              <li>
                <strong>PageSpeed.web.dev</strong> : It is also driven on CRUX
                db. Here we can get the insights of a website just by pasting
                the URL.
              </li>
              <li>
                <strong>requestmetric.com</strong> : It will provide us a script
                which we have to put in our head section and it will monitor our
                website based on real data.
              </li>
              <li>
                <strong>clarity.microsoft.com</strong> : Here also we will get
                similar script. It is from microsoft.
              </li>
              <li>
                <strong>NewRelic</strong>
              </li>
              <li>
                <strong>Sentry</strong>
              </li>
              <li>
                <strong>Google Analytics</strong>
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Network Layer Optimisation">
        <Accordian header="Critical Rendering Path">
          <ul>
            <li>
              When we make a request from the client to the server the server
              sends the response.
            </li>
            <li>The server sends the response in form of small packets.</li>
            <li>We can focus on showing something meaningful on the FCP.</li>
          </ul>
        </Accordian>
        <Accordian header="Minimize Network Calls">
          <ul>
            <li>
              One network request with more data is better then multiple
              requests with less data at the same time.
            </li>
            <li>
              This is because each network call involves handshakes, network
              latency, etc.
            </li>
            <li>
              Challenges with multiple requests :{" "}
              <ul>
                <li>Connection Time</li>
                <li>Browser Limits (6-10 max parallel calls can be made).</li>
              </ul>
            </li>
            <li>
              Solutions :{" "}
              <ul>
                <li>
                  Inline CSS and JS for Critical Rendering Path. Using inline
                  means not in the components in the index.html directly.
                  Components are going to be converted into bundles.
                </li>
                <li>Images should be base 64.</li>
                <li>
                  Use SVGs for images. In case of svg we are not
                  loading/fetching them we are actually injecting them in the
                  code itself.
                </li>
              </ul>
            </li>
          </ul>
        </Accordian>
        <Accordian header="Async/Defer">
          <img
            style={{
              marginTop: "10px",
              height: "100%",
              width: "100%",
            }}
            src="./assets/icons/async-vs-defer.png"
            alt="Async vs defer"
          ></img>
          <ul>
            <li>
              WJavascript is parser block so when html will encounter a script
              tag it will pause parsing html file and it will download the
              script file then parse it and once the js parsing is done it will
              resume parsing HTML file.
            </li>
            <li>Because of this reason our FCP,LCP will be delayed.</li>
            <li>
              We can even keep the script tag at the last of body tag but it
              will again effect the first interactivity.
            </li>
            <li>To overcome it we can use async or defer.</li>
            <li>
              <strong>async</strong> : Here as soon as the HTML encounters the
              script tag it will start downloading it in parallel, and once the
              script is downloaded it will stop the HTML parsing and will parse
              the JS file.
            </li>
            <li>
              <strong>defer</strong> : Here as soon as script tag is encountered
              it will start downloading the the script tag but the HTML parsing
              will not stop.Once the script is downloaded it will wait for HTML
              to finish parsing and after that the script will be parsed.
            </li>
          </ul>
        </Accordian>
        <Accordian header="Avoid Redirection">
          <ul>
            <li>We should avoid redirection from http to https.</li>
            <li>
              We can achieve it using{" "}
              <strong>hstspreload.org (HTTPs Strict Transport Security)</strong>
            </li>
            <li>
              We can see that suppose we try to load flipkart.com using http
              then also in networ k tab all the requests are of https and not a
              single request is made using http.
            </li>
            <li>Most of the browsers have a list HSTS preload lists.</li>
            <li>
              Here the browser will check for the domain is present or not and
              if its present in its list then it will automatically upgrade the
              request from http to https, and http call will not be made to the
              server.
            </li>
            <li>
              In this way request is not going to the server and getting
              upgraded. Its getting upgraded directly in the browser level.
            </li>
          </ul>
        </Accordian>
        <Accordian header="Resource Hinting">
          <ul>
            <li>
              In general we load both same domain css, js, fonts and cross
              domain css, js, fonts.
            </li>
            <li>
              <strong>preconnect</strong> :
              <ul>
                <li>
                  <strong>
                    <pre>
                      {`<link ref="preconnect" href="https://cdn.glicth.global" crossorigin></link>`}
                    </pre>
                  </strong>
                </li>
                <li>
                  So here the connection that would have happen at the time of
                  api call will be done earlier, and at the time of api call no
                  new connection needs to be established.
                </li>
                <li>
                  Here as the origin is different so we have to add cross
                  origin. It includes{" "}
                  <strong>dns-lookup, initial connection, ssl ,etc.</strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>dns-prefetch</strong> :
              <ul>
                <li>
                  <strong>
                    <pre>
                      {`<link ref="dns-prefetch" href="https://cdn.glicth.global" crossorigin></link>`}
                    </pre>
                  </strong>
                </li>
                <li>
                  Here we will only make the dns lookup before hand. time.
                </li>
              </ul>
            </li>
            <li>
              <strong>preload</strong> :{" "}
              <ul>
                <li>Here the resource will be downloaded before hand.</li>
                <li>
                  Here not only the connection is being established but also the
                  content is getting downloaded.
                </li>
                <li>We can preload the banner images, fonts, etc.</li>
                <li>
                  <strong>
                    <pre>{`<link ref="preload" href="" as=''></link>`}</pre>
                  </strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>prefetch</strong> :
              <ul>
                <li>
                  Load Resources which are needed in near future like not in the
                  same page with low priority.
                </li>
                <li>
                  <strong>
                    <pre>{`<link ref="prefetch" href="" as=''></link>`}</pre>
                  </strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>pre-render</strong> :{" "}
              <ul>
                <li>
                  Here the upcomming routes will be rendered and will be stored
                  in cache for future use.
                </li>
                <li>
                  The page is their in the cache will be used as soon as
                  requested.
                </li>
                <li>
                  In case of angular and react as they make SPAs so pre render
                  is of no use we can use server side rendering or static pre
                  redering where we will pre-render different routes durring the
                  build time.
                </li>
              </ul>
            </li>
            <li>
              For all these linkes we have a priority attibute which will tell
              the browser about the priority of these links .
            </li>
            <li>
              We can also preload css files without blocking blocking the
              render.
              <strong>
                <pre>{`<link rel="preload" href="theme.css" as="style" fetchpriority = "low" onload="this.onload=null;this.rel='stylesheet'">`}</pre>
              </strong>
            </li>
          </ul>
        </Accordian>
        <Accordian header="Early Hints">
          <ul>
            <li>We are going to get early hints from the server.</li>
            <li>
              It is quite similar to resource hinting but it is done by server.
            </li>
            <li>
              Here we are getting the resources even before the index.html was
              loaded.
            </li>
          </ul>
        </Accordian>
        <Accordian header="HTTP Upgrade (Http1.1 vs Http2 vs Http3)">
          <ul>
            <li>
              Higher the http version more number of parallel network request we
              can make. So it better to upgrade the http latest version.
            </li>
          </ul>
        </Accordian>
        <Accordian header="Compression : brotli / gzip">
          <ul>
            <li>Here the content is compressed.</li>
            <li>It is actually content encoding.</li>
            <li>This needs to be enabled from the server.</li>
          </ul>
        </Accordian>
        <Accordian header="Caching">
          <ul>
            <li>Here we can use cache headers.</li>
            <li>We can also get the make use of service worker caching.</li>
          </ul>
        </Accordian>
      </Accordian>
      <Accordian header="Rendering Pattern">
        <Accordian header="Client Side Rendering"></Accordian>
        <Accordian header="Server Side Rendering"></Accordian>
        <Accordian header="Static Site Generation"></Accordian>
        <Accordian header="React Server Component"></Accordian>
      </Accordian>
      <Accordian header="Build Optimisation">
        <Accordian header="Bundler">
          <ul>
            <li>
              It converts all the framework code or other js code into browser
              readable/compatible js code.
            </li>
            <li>Helps in making module management.</li>
            <li>Optimisation</li>
            <li>Development Enhancements : Hot Module Reload</li>
            <li>Cross Browser Compactibility</li>
            <li>Asset Management</li>
          </ul>
        </Accordian>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>How lighthouse is different from core web vitals.</li>
        </ul>
      </Accordian>
    </>
  );
};

export default Performance;
