import { useEffect } from "react";
import Accordian from "../shared/accordian/accordian";

const ServiceWorkers = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then();
  }, []);
  return (
    <>
      <Accordian header="Intro">
        <ul>
          <li>
            It acts as a proxy server that sits between browser,network and the
            web application.
          </li>
          <li>
            Service Workers provides a way to achieve multi threading in js.
          </li>
          <li>They run in background in a seperate thread.</li>
          <li>It doesnot block the main thread.</li>
          <li>We can also achieve offline experience using service workers.</li>
          <li>
            We can even intercept network requests and it can take decision of
            whether to fetch data from cache or make the network call.
          </li>
          <li>
            It works only on HTTPs. As it can intercept the network calls so it
            can make man-in-the-middle attacks.
          </li>
          <li>In firefox we cannot access service workers in incognito.</li>
          <li>
            It runs only on specific browsers, OS. So it has a little bit of
            compactibility issues.
          </li>
          <li>
            It helps us to access push notifications and background sync apis.
          </li>
          <li>They are event driven.</li>
          <li>They dont have access to DOM, web storage, etc.</li>
          <li>
            Is service worker supported or not in our browser we can find it
            using <strong>navigator.serviceWorker</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Registering a Service Worker">
        <ul>
          <li>
            First we need to check if service worker is present/supported by the
            browser using navigator.serviceWorker
          </li>
          <li>
            To register service worker we need to invoke
            <strong> navigator.serviceWorker.register("./sw.js")</strong> it
            takes the path of the serviceWorker file, from our js file / main
            script tag.
          </li>
          <li>
            This register method will return a promise which will resolve if the
            service worker is registered successfully, else it will be rejected.
          </li>
          <li>
            Its not mandatory to always register the service worker at the
            global level. We can provide a scope param where we can pass the
            folder path where we want to register it.
          </li>
          <li>
            <strong>
              Code to register service worker.
              <pre>{`if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js", { scope: "./" })
    .then((res) => {
      console.log("Service Worker Registered");
    })
    .catch((err) => {
      console.log("Error registering", err);
    });
}`}</pre>
            </strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Service Workers Events">
        <ul>
          <li>
            As we write document.addEvent listner similarly in case of service
            workers we can write <strong>self.addEventListner</strong> or{" "}
            <strong>this.addEventListner</strong>
          </li>
          <li>Here self refers to current service worker.</li>
          <li>
            <strong>install</strong> : It is triggered when the service worker
            is installed for the first time.
          </li>
          <li>
            <strong>activate</strong> : It is called when the service worker is
            activated.
          </li>
          <li>
            <strong>fetch</strong> : This event is triggered whenever a network
            call is made.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Adding Offline Support">
        <ul>
          <li>
            The idea behind this is whenever our page loads we can cache the
            page in our browser cache storage.
          </li>
          <li>We can do it inside the install event.</li>
          <li>
            We will do something like <strong>e.waitUntil()</strong>. So the
            install step will wait until the code inside this method is
            executed.
          </li>
          <li>Cache is like a small db.</li>
          <li>
            Inside event.waitUntil we can call <strong>caches.open()</strong>
            method which takes the name of the cache as param. It returns a
            promise.
          </li>
          <li>
            Once the promise returned by caches.open() is resolved we can use
            the resolved object's (c) method <strong>c.addAll()</strong> which
            takes a array of files which needs to be cached.
          </li>
          <li>
            Here we can pass the index.html, style.css and script.js and assets.
          </li>
          <li>
            Once it is done we can see in our cache store we can find the cache
            name and get all the files that we added in the array.
          </li>
          <li>
            <strong>
              Add to cache{" "}
              <pre>
                {`self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((c) => {
      c.addAll(["./index.html"]);
    })
  );
});
`}
              </pre>
            </strong>
          </li>
          <li>Now we have to return the data from the cache.</li>
          <li>
            <strong>Bad way of returning</strong>
            <ul>
              <li>
                In the fetch event whenever a call is made we will check the
                cache first.
              </li>
              <li>If data is present in cache we will return it.</li>
              <li>Else we will initiate the network call.</li>
              <li>
                This is a bad way becauseif anything changes in the server then
                it will never reflect.
              </li>
            </ul>
          </li>
          <li>
            <strong>Good way</strong>
            <ul>
              <li>
                Whenever a network call is made we will fetch it from network.
              </li>
              <li>If new data comes we will update the cache.</li>
              <li>
                If the network is offline then we will use cache as fallback.
              </li>
            </ul>
          </li>
          <li>
            In the fetch event we will call a method{" "}
            <strong>event.respondWith()</strong> which takes a fetchApi as an
            input we can use event.request to pass inside the fetch api.
          </li>
          <li>
            Now when the fetch api resolves we can again open the cache and use{" "}
            <strong>cache.put(event.request,res)</strong> and now we can simply
            return the res.
          </li>
          <li>
            Its a better practice to clone the res before putting it into the
            cache.
          </li>
          <li>
            If it comes to the error block that we can use
            caches.match(e.request) which returns a promise and cached data is
            present then the promise will be resolved and we can simply return
            the resolved value.
          </li>
          <li>
            In the network tab always check the update on reload checkbox.
          </li>
          <li>
            <strong>
              Adding and updating the cache
              <pre>{`self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request))
    .then((res) => {
      const cloneData = res.clone();
      caches.open(cacheName).then((c) => {
        c.put(e.request, cloneData);
      });
      return res;
    })
    .cache(() => {
      return caches.match(e.request).then((file) => file);
    });
});
`}</pre>
            </strong>
          </li>
          <li>We need to clean up useless cache as well.</li>
          <li>In the activate event we will do the cleanup.</li>
          <li>
            <strong>
              Code to cleanup previous cache versions
              <pre>{`self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});`}</pre>
            </strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>
            <strong>navigator</strong> : It is global object which gives info
            about browser and device we are using.
          </li>
          <li>What is web worker.</li>
        </ul>
      </Accordian>
    </>
  );
};
export default ServiceWorkers;
