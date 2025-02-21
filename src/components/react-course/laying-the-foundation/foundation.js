import "./foundation.css";
import Accordian from "../../shared/accordian/accordian";
import React from "react";

const title = <strong>This element is from a normal react element/JSX.</strong>;
const el = React.createElement("h1", {}, title);
const Foundation = () => {
  return (
    <>
      <Accordian header="JSX">
        <ul>
          <li>
            Initially react used React.createElement to create react elements
            which is not developer friendly.
          </li>
          <li>
            To avoid this problem Facebook engineers came up with the solution
            of JSX.
          </li>
          <li>
            It is a javascript syntax which is used to create React Elements in
            a Developer friendly manner.
          </li>
          <li>
            It is possible to build all the major application without using JSX
            but with React.createElement but it will not be an easy stuff.
          </li>
          <li>Please remember JSX is not a part of react.</li>
          <li>JSX is not HTML inside javascript.</li>
          <li>
            It is an HTML/XML like syntax which when gets executed becomes a
            React element.
          </li>
          <li>JSX is like a combination of JS and HTML.</li>
          <li>
            If you will log the jsx in console you will find the same object you
            got using React.createElement.
          </li>
          <li>
            Remeber JSX is not a part of react, but its also not a valid
            javascript.
          </li>
          <li>Javascript engine doesnot understand JSX.</li>
          <li>Javascript understand ECMAScript.</li>
          <li>
            JSX is not a valid javascript syntax still browser is able to parse
            it.
          </li>
          <li>
            This is because before handing over the JSX to js engine it parcel
            who transpiles it. After this JS engine recives the code that it
            understands.
          </li>
          <li>
            Transpile means converiting the code that we have writter to js
            engine friendly format.
          </li>
          <li>
            You have to either write JSX in single line or you will have to wrap
            JSX within parenthesis if you are writing jsx in multiple lines.
          </li>
          <li>
            In JSX we can run any piece of Javascript expression by just
            wrapping it inside curly braces {"{ }"}
          </li>
          <li>
            <strong>Babel</strong> is the one who is actually behind transpile.
          </li>
          <li>
            If you want to add inline style to JSX you can pass the css as an
            object.
          </li>
          <li>
            So you can create a React element by using :
            <ul>
              <li>React.createElement</li>
              <li>JSX</li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Babel">
        <ul>
          <li>It is a Javascript compiler / transpiler.</li>
          <li>
            <strong>Transpilation</strong> is the process of converting source
            code from one programming language to other/ one version to other.
          </li>
          <li>The main job of babel is to transpile code.</li>
          <li>
            Behind the scenes JSX code is tranpiled to React.createElement which
            gives the react element object.
          </li>
          <li>JSX to React.createElement convertion is done by Babel.</li>
          <li>
            Some older browsers dont understand ES6 so babel can also compile
            ES6 code to older versions to make it compatible.
          </li>
          <li>It can also compile Typescript to Javascript</li>
        </ul>
      </Accordian>
      <Accordian header="Component">
        <ul>
          <li>
            <strong>In react there are 2 types of components</strong>
            <ul>
              <li>Class based components (Old)</li>
              <li>Functional based components (React)</li>
            </ul>
          </li>
          <li>
            Components are just a normal js function that returns a JSX/React
            element.
          </li>
          <li>Always start the component name in capital letter.</li>
          <li>
            To render a component you have to wrap the function name in
            triangular braces just like HTML syntax and babel will transpile it.
          </li>
          <li>
            You can use something like {"<Heading/>"} inside another component
            or inside root.render to render it.
          </li>
          <li>
            The syntax transpilation will be taken care by{" "}
            <strong>Babel</strong>
          </li>
          <li>
            Whenever you write a component within angular braces Babel will know
            that you are calling a component.
          </li>
          <li>
            <strong>Component Composition</strong> is calling one component into
            another.
          </li>
          <li>
            If you want to add a normal React element or a JSX into your
            component then you can simple write the element variable inside a{" "}
            {"{ }"} and it will render the element.
          </li>
          <li>Example : {title}</li>
          <li>
            You can even create a infinite loop with JSX by calling one element
            inside other and vise versa. Just like circular dependency in
            Angular.
          </li>
          <li>
            You can also call a component by simply calling the function inside
            {"{}"} because at the end of the day it will return the JSX.
          </li>
          <li>
            If you want to pass some props you can pass them as arguments to the
            function call.
          </li>
        </ul>
      </Accordian>
      <Accordian header="props">
        <ul>
          <li>It stands for properties.</li>
          <li>
            If we want to pass anything to the component we can do it using
            props.
          </li>
          <li>
            As functional components are normal javascript functions, similarly
            props are normal arguments to that functions.
          </li>
          <li>
            Passing a prop to a component is just like passing an argument to a
            function.
          </li>
          <li>Prop is an object argument.</li>
          <li>We can pass any number of props we wish to.</li>
        </ul>
      </Accordian>
      <Accordian header="Config Driven UI">
        <ul>
          <li>
            In this approach the UI appearence and behaviour will based on a
            json input/config.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Cross site scripting">
        <ul>
          <li>
            Suppose we are getting a data from an api and we are rendering it
            directly using {"{ }"} so there might be a case when the api might
            throw some malicious code and as we know whatever present inside{" "}
            {"{ }"} will get executed then those malicious js codes will also
            get executed in the client's browser.
          </li>
          <li>
            But even if the api send some malicious code JSX will manage it by
            escaping it.
          </li>
          <li>
            JSX will not blindly run whatever is inside {"{}"}. It will first
            sanitise it and then it will run.
          </li>
          <li>So JSX prevents cross site scripting.</li>
        </ul>
      </Accordian>
      <Accordian header="How to approach building a app from scratch as a Senior Developer">
        <ul>
          <li>Design a mock for the UI.</li>
          <li>Deciding the different components our app can have.</li>
        </ul>
      </Accordian>
      <Accordian header="Unique Key while using map">
        <ul>
          <li>
            Whenever you are rending a list in JSX you will get a warning :
            "Each child in a list should have a unique key prop."
          </li>
          <li>
            This warning means each of the list item rendered should be uniquely
            represented.
          </li>
          <li>key prop is a reserved keyword for prop.</li>
          <li>
            Whenever we are rendering a list in JSX we should always attach a
            unique key to all the rendered items.
          </li>
          <li>
            Suppose there is a scenario where you have rendered a list and you
            havn't added any key so if a new value came inside the list at a
            particular position, then angular will treat all the elements same
            and will redraw the entire list.
          </li>
          <li>
            If we are having unique keys then in that case react can identify
            the new items and will render only those items and not the entire
            list.
          </li>
          <li>
            Giving index is not a good practice because index might change when
            new item is added.
          </li>
          <li>
            You can use index as a key only if you don't have any unique key.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>
            Why do we dont include npx while adding the serve scripts in
            package.json ?
          </li>
          <li>Can you do ignore run in npm run {"<command-name>"} ?</li>
          <li>
            Role of type attribute in script tag? What options can I use there?
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Foundation;
