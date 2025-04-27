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
                <strong>Time to first byte ()TTFB </strong> : How much time it
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
        <ul>
          <li></li>
        </ul>
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
