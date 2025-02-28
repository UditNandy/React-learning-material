import { lazy, Suspense } from "react";
import Accordian from "../../shared/accordian/accordian";

const ReactOptimisation = () => {
  const LazyLoadingExample = lazy(() =>
    import("../lazy-loading-example/lazy-loading-example")
  );

  return (
    <>
      <Accordian header="Why Lazy Loading">
        <ul>
          <li>
            The primary job of a bundler is to just bundle all the js files into
            one big js file.
          </li>
          <li>
            The problem with such bundling is the size of JS file will increase
            a lot if the project is large.
          </li>
          <li>
            The JS bundle size increases with how many component it holds.
          </li>
          <li>
            Now if the bundle size is high then the time to load that bundle
            increases.
          </li>
          <li>
            To overcome this we have to break the big js file into smaller
            bundles.
          </li>
          <li>
            This process is known as chunking, code splitting, lazy loading,
            dynamic loading, dynamic bundling.
          </li>
          <li>
            A single lazy loaded bundle should have enough files to make a
            complete feature.
          </li>
          <li>In this way we can load a component when it is required.</li>
        </ul>
      </Accordian>
      <Accordian header="Lazy Loading">
        <ul>
          <li>To achieve this donot directly import the component.</li>
          <li>You can use lazy method from react to load the component.</li>
          <li>
            You can assign the return value of lazy function to a variable and
            use that variable as a component.
          </li>
          <li>
            Now if you will use the component as it is the react will throw an
            error.
          </li>
          <li>
            This error is mainly because React is synchronous and it will call
            the lazy loaded component quickly, but if we will see in the network
            tag the js file for the lazy loaded component does takes some time
            to load.
          </li>
          <li>
            As react is calling the lazy loaded component synchronously, we are
            encountering this error.
          </li>
          <li>
            To handle this we have <strong>Suspense</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Suspense">
        <ul>
          <li>
            It is a component which comes from 'react', and is used to handle
            the middle phase between this the lazy loaded component is try to be
            rendered but is not yet loaded from the server.
          </li>
          <li>
            You have to pass your component as a children prop to Suspense
          </li>
          <li>
            It also takes a fallback (placeholder) which shows what should it
            render while the lazy loaded component is still loading.
          </li>
          <li>The fallback takes a jsx.</li>
        </ul>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>
            Remember everything except React comes as a named export from
            'react'.
          </li>
          <li>
            It take a callback function import which takes the path of the
            component as argument.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>How bundling differs in case of lazy loading.</li>
          <li>
            Is it the job of bundler or react to make seperate bundles while
            lazy loading.
          </li>
        </ul>
      </Accordian>
      <Suspense fallback={<>Loading.......</>}>
        <LazyLoadingExample />
      </Suspense>
    </>
  );
};
export default ReactOptimisation;
