import Accordian from "../../shared/accordian/accordian";

const WebpackConcept = () => {
  return (
    <>
      <Accordian header="Webpack intro"></Accordian>
      <Accordian header="Asset Module">
        <ul>
          <li></li>
        </ul>
      </Accordian>
      <Accordian header="Loaders">
        <ul>
          <li>
            It allows us to load all types of files which cannot be loaded by
            asset modules.
          </li>
          <li>
            Webpack bundles all our dependencies into one or more bundles.
          </li>
          <li>
            Here dependencies means js modules that the main js requires to
            complete the required task.
          </li>
          <li>Using loader we can import css, sass, less, xml, etc.</li>
          <li>Unlike asset modules we need to install loaders explicitly.</li>
          <li>
            We have to add the loaders in use key of the loader rule which takes
            an array.
          </li>
          <li>
            Webpack compiles the loaders from right to left so we write like :
            <div>
              <strong>{"[style-loader,css-loader]"}</strong>
            </div>
            css loader will be executed first and then style loader will.
          </li>
          <li>
            Different types of Loaders.
            <ul>
              <li>
                <strong>css-loader</strong> : It is generally used for
                interpreting the css files like @import and url().
              </li>
              <li>
                <strong>sass-loader</strong> : It is used to load the scss
                files. It is used to convert scss to css.
              </li>
              <li>
                <strong>style-loader</strong> : It is used to inject the css
                into the DOM. It creates a <strong>{"<style>"}</strong> tag in
                the head of the document.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header={"Babel"}>
        <ul>
          <li>
            Babel is a javascript compiler which converts the latest version of
            javascript to the older version of javascript.
          </li>
          <li>
            It is used to convert ES6 to ES5. It is used to convert JSX to JS.
          </li>
          <li>It is used to convert typescript to javascript.</li>
          <li>It is used to convert flow to javascript.</li>
          <li>It can be used as a loader in webpack.</li>
          <li>
            <strong>@babel/env</strong> : It is a preset that allows you to use
            the latest JavaScript without needing to micromanage which syntax
            transforms (and optionally, browser polyfills) are needed by your
            target environment(s).
          </li>
          <li>
            <strong>@babel/plugin</strong> : Plugins are specific
            transformations that Babel can apply to your code. For example, you
            can use plugins to transform ES6 arrow functions into ES5 functions.
          </li>
          <li>
            <strong>@babel/plugin-proposal-class-properties</strong> : This
            plugin allows you to use the class properties syntax in JavaScript.
            It enables you to define properties directly on the class without
            needing a constructor.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Plugins">
        <ul>
          <li>Plugins can modify the creation of bundles</li>
          <li>
            It can perform{" "}
            <ul>
              <li>It can greate global costants across the application.</li>
              <li>It can do minification of the bundle.</li>
              <li>It can generate other files except bundle.js.</li>
            </ul>
          </li>
          <li>
            It is added in webpack config as a property in same level of
            modules. It accepts an array of plugins.
          </li>
        </ul>
        <Accordian header="Minification">
          <ul>
            <li>
              <li>
                If we want to make the website load fast then we have to minify
                the bundle size.
              </li>
              <li>
                To minify the bundle size we can use a plugin called
                TerserPlugin.
              </li>
              <li>
                Generally plugins needs to be installed seperatly but terser
                plugin comes by default with webpack.
              </li>
              <li>
                Syntax : <strong>{"[new TerserPlugin()]"}</strong>
              </li>
            </li>
          </ul>
        </Accordian>
        <Accordian header="MiniCssExtractPlugin">
          <ul>
            <li>
              If we use style loader then all the css becomes the part of the js
              bundle and is injected into the head of the html using style tag.
            </li>
            <li>This can make our js bundle heavy.</li>
            <li>
              To avoid this we can use MiniCssExtractPlugin which can be used to
              create a seperate bundle for css.
            </li>
            <li>
              It will take a object with filename to specify the output
              filename.
            </li>
            <li>
              We have to replace <strong>style-loader</strong> with
              MiniCssExtractPlugin.loader in all css,scss,etc types in the
              loaders.
            </li>
          </ul>
        </Accordian>
        <Accordian header="Browser Caching">
          <ul>
            <li>
              Browser caching helps in improving the performance of the website
              by storing static assets in the browser cache.
            </li>
            <li>
              Modern browsers generally caches the file using its file name in
              its memory.
            </li>
            <li>
              To enable browser caching in webpack, we can use the{" "}
              <strong>output.filename</strong> property with a unique hash.
            </li>
            <li>
              Example: <strong>filename: '[name].[contenthash].js'</strong>
            </li>
            <li>
              The <strong>[contenthash]</strong> ensures that the filename
              changes whenever the content of the file changes, forcing the
              browser to fetch the updated file.
            </li>
            <li>
              This prevents the browser from using outdated cached files and
              ensures users always get the latest version.
            </li>
            <li>
              Additionally, we can use the <strong>HtmlWebpackPlugin</strong> to
              automatically inject the hashed filenames into the HTML file.
            </li>
          </ul>
        </Accordian>
        <Accordian header="Clean Dist before build">
          <ul>
            <li>We can use a plugin called CleanWebpackPlugin.</li>
            <li>
              Or we can also use a property <strong>clean</strong> in output
              which can be simply set to true or an object which takes some
              different configurations.
            </li>
            <li>
              CleanWebpackPlugin can actually delete files from other places as
              well but are used rarely.
            </li>
          </ul>
        </Accordian>
        <Accordian header="HTML Webpack Plugin">
          <ul>
            <li>
              Every time a new build is created we need a new html file which
              injects that new bundle.
            </li>
            <li>We can do that using HtmlWebpackPlugin.</li>
            <li>
              We have to set the public path to <strong>blank</strong> because
              it injects the bundles with respect to public path. Now as bundles
              and html are in same files we dont need to use different public
              path.
            </li>
            <li>
              If we want to control the template format of the generated html we
              can use template engines like handlebars, ejs, pug, etc.
            </li>
          </ul>
        </Accordian>
      </Accordian>
      <Accordian header="Production vs developer build">
        <ul>
          <li>
            We have a mode property in webpack config, its values can be
            <strong>'none','development' and 'production'</strong>.
          </li>
          <li>
            It sets <strong>process.env.NODE_ENV</strong> to development or
            production.
          </li>
          <li>
            In production mode we get a minified bundle and in development mode
            we get a non minified bundle.
          </li>
          <li>
            If any error exists then in prod it is thrown from bundle but in dev
            it is thrown from the original js.
          </li>
          <li>
            We can have 2 different webpack.config.js one for production and one
            for development.
          </li>
          <li>
            We have to manage 2 npm scripts one for production and one for
            development.
          </li>
          <li>
            Syntax : <strong>webpack --config webpack.config.js</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Webpack Dev Server">
        <ul>
          <li>We can use this to serve our application fast in dev mode.</li>
          <li>
            We have to add a new property <strong>devServer</strong> in webpack
            config.
          </li>
          <li>
            By default webpack dev server will create the bundle in the memory
            but we can change the configuration and keep it in disk as well for
            development purposes.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Multiple Page Application">
        <ul>
          <li></li>
        </ul>
      </Accordian>
    </>
  );
};

export default WebpackConcept;
