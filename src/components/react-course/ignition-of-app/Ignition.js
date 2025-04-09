import "./Ignition.css";
import Accordian from "../../shared/accordian/accordian";

const Ignition = () => {
  return (
    <>
      <Accordian header="NPM">
        <ul>
          <li>
            NPM doesnot stands for <strong>node package manager</strong> but it
            manages packages.
          </li>
          <li>It is a central repo for all the node packages.</li>
          <li>
            Any package we need to include in our project we have to use npm.
          </li>
          <li>To add npm to our app we need to type a command npm init.</li>
          <li>
            Using npm we can install new packages using npm install{" "}
            {"<package-name>"}
          </li>
          <li>
            You can use the command <strong>npm i -D {"<package-name>"}</strong>{" "}
            to install a package as a dev dependency.
          </li>
          <li>
            Another popular package manager is <strong>yarn</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="package.json">
        <ul>
          <li>It is a json based configuration file for our application.</li>
          <li>
            Inside package json you can find 2 types of dependencies,{" "}
            <strong>dependencies</strong> and <strong>devDependencies</strong>
          </li>
          <li>
            <strong>devDependencies</strong>
            <ul>
              <li>
                It contains the packages that we require durring the development
                phase of our app.
              </li>
              <li>These packages are not required in production.</li>
              <li>
                These packages are required for building, testing and initing
                the app.
              </li>
              <li>Example : Parcel , jest, webpack, etc.</li>
            </ul>
          </li>
          <li>
            <strong>dependencies</strong> array keeps a list of package which
            are used for performing the required operations and are used in both
            development and production.
          </li>
          <li>
            You can find 2 type of symbols infront of the package version inside
            dependencies and devDependencies
            <ul>
              <li>
                <strong>^(carrat)</strong> : This sign will automatically
                upgrade the pacakge version to the latest minor release version
                durring the npm i. Example : 2.8.1 {"->"} 2.8.2
              </li>
              <li>
                <strong>~(tilde)</strong> : This sign will automatically upgrade
                the package version to the latest major release. Example : 2.8.2{" "}
                {"->"} 3.0.1.
              </li>
              <li>
                Its always safe to put ^(carrot) because many times durring a
                major upgrade a lot of things might break in our app.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="package-lock.json">
        <ul>
          <li>
            Whenever you will do a npm i you will get a new file called
            package-lock.json.
          </li>
          <li>
            This is a file which keeps a track of exact version that is being
            installed.
          </li>
          <li>
            package.json keeps a approx version of our packages where as
            package-lock.json keep the exact version of our packages.
          </li>
          <li>
            It contains something call <strong>integrity</strong> for each
            packages which is basically a hash. It actually verifies that
            whatever is present in my machine the same thing is present in the
            production or not.
          </li>
          <li>
            Whenever we install any package then that package has its own
            dependencies which are also listed down in package-lock.json.
          </li>
          <li>
            <strong>Transitive dependencies</strong> : A dependency having its
            own dependencies and that dependency further having its own
            dependencies. Each package inside node_modules has its own
            package.json.
          </li>
        </ul>
      </Accordian>
      <Accordian header="node_modules">
        <ul>
          <li>It contains all the code that we fetch from npm.</li>
          <li>
            Every package present inside node_modules has its own package.json.
          </li>
        </ul>
      </Accordian>
      <Accordian header="bundler">
        <ul>
          <li>
            A bundler helps to compress, minify, bundle our code to make it
            production ready.
          </li>
          <li>webpack, parcel, vite are some popular bundlers.</li>
          <li>create-react-app uses webpack and bable behind the scenes.</li>
        </ul>
      </Accordian>
      <Accordian header="Parcel">
        <ul>
          <li>It is a bundler.</li>
          <li>
            Suppose we have initialised npm in a normal html file and we have
            install parcel in it.
          </li>
          <li>
            <strong>npx parcel index.html</strong> command will actually bundle
            our index.html and will host it in a server.
          </li>
          <li>
            The error that we get in the screen if there is some issue is
            generally given by the bundlers.
          </li>
          <li>
            While manually installing react and react-dom using parcel and
            igniting it up we will face a challange that Browser scripts cannot
            have import export.
          </li>
          <li>
            The reason behind this is our index.html file has the script file
            which is linked to App.js
          </li>
          <li>
            This script file will be treated as browser script and we cannot
            have import and export inside browser scripts.
          </li>
          <li>
            We need to tell react that the attached script file is not a browser
            script but a module by adding <strong>type='module'</strong> in the
            script tag.
          </li>
          <li>
            After that you can import react and reactDOM from 'react' and
            'reactDOM/client' respectively.
          </li>
          <li>
            Whenever we save a file our browser automatically refreshes and
            updates the latest content. This is known as HMR.
          </li>
          <li>
            <strong>HMR (Hot Module Replacement) / Hot Reloding</strong> :
            Whenever we save something our browser gets reloaded.
          </li>
          <li>
            Parcel uses a file watching algorithm which is written in C++ by
            which it performs HMR.
          </li>
          <li>
            <strong>Faster build</strong> : We can find that the 1st build does
            take some time but the subsequent builds take comparitively very
            less time. This is because parcel is caching things for us.
          </li>
          <li>
            The cache data is present in <strong>.parcel-cache</strong> folder
            which got created as we start our app using parcel.
          </li>
          <li>It does image optimisation.</li>
          <li>Minification our production ready file.</li>
          <li>It will bundle our app.</li>
          <li>It will compress our files.</li>
          <li>
            Parcel is not doing everything of its own but it does with the help
            of its dependent libraries and parcel just manages these libraries.
          </li>
          <li>It does something called consistent Hashing.</li>
          <li>It does code splitting.</li>
          <li>
            It does differential bundling. : It is required for support of older
            browsers.
          </li>
          <li>Better error screen in development mode.</li>
          <li>Gives a way to host our app on https (diagnostics).</li>
          <li>
            <strong>Does Tree shaking </strong>: It will remove unused
            codes/imports
          </li>
          <li>Production builds are a bit more optimised then dev build.</li>
          <li>
            If you are using parcel then its not required to give entry point
            (main) in package.json as parcel take entry point in commands like{" "}
            <strong>npx parcel build index.html</strong>
          </li>
          <li>
            If you are using create-react-app you would not see devDependencies
            in package.json because it uses react-scripts which is a
            pre-configured package which contains all the necessary development
            tools (Webpack, Babel, ESLint, Jest, etc).
          </li>
          <li>
            Once you build your app you will get everything inside dist folder
            which containes below files :
            <ul>
              <li>index.html : A compressed version of original index.html</li>
              <li>
                index.js : It will compress all the js files into a single file
                and will compress it.
              </li>
              <li>index.css : It will compress the css</li>
            </ul>
          </li>
          <li>
            If we want to tell parcel that in which all browsers our app will be
            supported we have to configure the browsers inside browserList array
            in package.json which is a package.
          </li>
          <li>
            If we are listing the browsers inside browsersList then browserList
            will make sure that our app will run perfectly fine in those version
            but along with that it might and might not work in other browser
            versions.
          </li>
          <li>
            Do remember that we don't need to give support for all the web
            browser versions we can find the most used versions from
            browsersList website and give support to them.
          </li>
          <li>
            Giving support to all the older version of our app will only
            increase our final production code and will make the app bulky.
          </li>
          <li>
            Govt websites generally have to supports all the browser verisons.
          </li>
          <li>
            <a href="https://parceljs.org/" target="_blank">
              Please read parcel documentation
            </a>
          </li>
        </ul>
      </Accordian>
      <Accordian header="npx">
        <ul>
          <li>It is generally used for executing a package.</li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>What is meaning of type='module' in the script tag?</li>
          <li>What is a module in js.</li>
          <li>
            What will happen if you dont pass type='module' in the script tag of
            index.html in react.
          </li>
          <li>
            What are the steps that we as developers can take to make the bundle
            size small.
          </li>
          <li>
            How the bundling process will be in case of lazy loaded components.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Ignition;
