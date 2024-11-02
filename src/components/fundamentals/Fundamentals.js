import React, { useState } from "react";

export const Fundamentals = () => {
  const [render, setRender] = useState(false);

  const list = [{ name: "Udit" }, { name: "Vikram" }];

  return (
    <div>
      <h2>Fundamentals</h2>
      <div className="wrapper">
        <ul>
          <li>
            <strong>React</strong> : It is a popular open source javascript
            library used for building UI.
          </li>
          <li>Follows Component Based Architecture</li>
          <li>
            <strong>Components</strong> : It is the building block of a react
            app.
            <ul>
              <li>
                <strong>Class Component</strong> :{" "}
                <ul>
                  <li>
                    These are ES6 classes that extends the component class and
                    takes props as input and returns a JSX.
                  </li>
                  <li>It mush contain a render method which returns html.</li>
                </ul>
              </li>
              <li>
                <strong>Functional Component</strong> :
                <ul>
                  <li>
                    Javascript Functions when returns html that renders the UI.
                  </li>
                  <li>They takes in properties (props) and returns a JSX.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>JSX</strong> : JSX in React is a syntax extension that
            allows you to write JavaScript code that looks similar to HTML. It
            stands for JavaScript XML and is used to describe the structure of
            UI elements in React applications.
          </li>
          <li>
            <strong>props</strong> : It is a way to communicate between
            components (parent to child) , (child to parent). They are
            immutable. For child to parent data transfer we need to send method
            from parent to the child through props.
          </li>
          <li>
            <strong>props (children)</strong> : If we wrote ant HTML inside the
            component and at the same time we created a same prop name children
            in that case props.children will access the HTML content that we
            passed between the tags. If no HTML is present in that case
            props.children will get the children attribute value.
          </li>
          <li>
            <strong>State</strong> : It is a built-in object that allows
            components to keep track of their properties. In simple words these
            are variables declared in the component.
          </li>
          <li>
            <strong>Events</strong> : These are actions that occures as a result
            of user interaction.
            <ul>
              <li>
                <strong>Note</strong> : Never use () on events or else it will
                become a function call and will get executed on initialisation
                and will not execute on events. If you want to use () use arrow
                functions.
              </li>
              <li>
                <strong>Note</strong> : We cannot bind events on custom
                components as React will treat them as props we need to pass the
                callback function using props and then we need to bind the
                events within the component in any native html tag.
              </li>
            </ul>
          </li>
          <li>
            <strong>Conditional Rendering</strong> :
            <div>{render ? <div>True</div> : <div>False</div>}</div>{" "}
            <button
              onClick={() => {
                setRender(!render);
              }}
            >
              Click me
            </button>
          </li>
          <li>
            <strong>List Rendering</strong> :
            <ul>
              <li>
                <strong>Key</strong>: React uses the key prop to keep track of
                list items. It helps React identify which items have changed,
                are added, or are removed.
              </li>
              <li>
                If you don't use key, React can't efficiently update the list,
                so it warns you to include it.Make sure the key is unique.
              </li>
              <li>
                <strong>Note</strong> : We cant access key as a prop in child
                components.
              </li>
              <li>
                Using index as a key is good idea but it can cause some serious
                ui issues.Please go through those.
              </li>
              <li>
                Example :{" "}
                {list.map((val, index) => {
                  return (
                    <span key={index}>
                      {val.name}
                      {index !== list.length - 1 ? "," : ""}
                    </span>
                  );
                })}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <h3>Higher Order Component</h3>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
