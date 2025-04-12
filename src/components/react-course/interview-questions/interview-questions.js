import React from "react";
import Accordian from "../../shared/accordian/accordian";

const InterviewQuestion = () => {
  return (
    <>
      <Accordian header="HTML">
        <ul>
          <li>
            <strong>What is HTML</strong>
          </li>
          <li>
            <strong>What is iframe and sandbox attribute.</strong> : It is used
            to embedded another html page inside the current page. The sandbox
            attribute is used to restrict the actions that can be performed
            inside the iframe. It can be used to prevent scripts from running,
            prevent form submission, restrict popup/modal opening and more.
          </li>
          <li>
            <strong>Attributes in Html.</strong>
          </li>
          <li>
            <strong>Void elements </strong> : Elements that dont need a closing
            tag.
          </li>
          <li>
            <strong>Entites in HTML </strong>: In html there are some characters
            like {"<"} reserved so we can use an id if we want to display them
            like {"&lt;"}
          </li>
          <li>
            <strong>enctype</strong> : It defines how the form data should be
            encoded when submitted to the server. Its values are{" "}
            <strong>
              text/plain, application/x-www-form-urlencoded(default), and
              multipart/form-data.
            </strong>
          </li>
          <li>
            <strong>multipart/form-data</strong> : Typically used for file
            upload. It encodes the form property so that both text and file can
            be handled. Without multipart/form-data, the filename will be sent
            to the server in place of the file.
          </li>
          <li>
            <strong>How to optimize website assets loading?</strong>
            <ul>
              <li>CDN hosting</li>
              <li>File compression</li>
              <li>File concatenation</li>
              <li>Minify scripts</li>
              <li>Parallel downloads</li>
              <li>Lazy Loading</li>
            </ul>
          </li>
          <li>
            <strong>Lazy loading of img src</strong>: It helps in defering the
            loading of images till its enter the viewport{" "}
            <strong>loading="lazy"</strong>
          </li>
          <li>
            <strong>Use of doctype</strong> :
            <ul>
              <li>
                It tells the browser which version of HTML to use. It helps the
                browser to render the page correctly.
              </li>
              <li>
                Without this browser might render the page in quick mode, which
                mimics old and buggy behaviour for backward compactibility.
              </li>
            </ul>
          </li>
          <li>
            <strong>Different type of doctypes</strong>
            <ul>
              <li>
                <strong>Strict</strong> : Allows only modern html and not
                deprecated elements.
              </li>
              <li>
                <strong>Transitional</strong> : Allows modern and deprecated
                elements.
              </li>
              <li>
                <strong>Frameset</strong> : Used when layouts uses frameset
                instead of body.
              </li>
            </ul>
          </li>
          <li>
            <strong>{'<meta charset="UTF-8">'}</strong> : It tells the browser
            which character encoding to use to correctly display your content.
          </li>
          <li>
            <strong>
              {
                '<meta name="viewport" content="width=device-width, initial-scale=1"/>'
              }
            </strong>{" "}
            It makes our website responsive by matching the screen's width and
            setting the initial zoom level. Without it, our site may appear
            zoomed out and tiny on mobile devices.
          </li>
          <li>
            <strong>{"<link>"}</strong> :{" "}
            <ul>
              <li>
                Used to link different files to the current html document.
              </li>
              <li>
                <strong>rel</strong> : stands for relation
              </li>
              <li>common values are stylesheet, icon, preload, etc.</li>
            </ul>
          </li>
          <li>
            <strong>Different type of meta tags</strong>:
            <ul>
              <li>charset</li>
              <li>keywords : Was used to specify keywords for SEO.</li>
              <li>author</li>
              <li>description</li>
              <li>viewport</li>
            </ul>
          </li>
          <li>
            <strong>{"<datalist/>"}</strong> : It is used to provide a list of
            options for an
            <strong>input</strong> element. It is used to create a dropdown list
            of suggestions for the user to choose from. It is like
            auto-suggestion. It is introduced in HTML5.
          </li>
          <li>
            <strong>Image map</strong> : The {"<map>"} and {"<area>"} tags
            (i.e., image maps) are useful when you want different parts of a
            single image to be clickable and perform different actions—like
            navigating to different pages or sections.
          </li>
          <li>
            <strong>Semantic Elements</strong> : These are tags which clearly
            describes their meaning to both browser and developer. Example :{" "}
            <strong>header, footer, article, section, nav, img</strong> etc.
          </li>
          <li>
            <strong>Non-semantic Elements</strong> : These are tags which do not
            clearly describe their meaning to both browser and developer.
            Example: <strong>div, span</strong>.
          </li>
          <li>
            <strong>{"<progress>"}</strong> : As the name suggest it is creates
            a progress bar in the ui. It comes by default with HTML5.
          </li>
          <li>
            <strong>drag and drop</strong> : Set draggable="true" in the element
            to make it draggable. We can use dragstart, dragenter, dragleave,
            dragover, drop and dragend events to handle the drag and drop.
          </li>
          <li>
            <strong>
              Write a program to create a form which takes 2 inputs and show
              their sum, without using js only using html. {"<output>"}
            </strong>
          </li>
          <li>
            <strong>audio and video tags.</strong>
          </li>
          <li>
            <strong>canvas vs svg</strong> : Please read through chatgpt.
          </li>
          <li>
            <strong>Different type of types in input</strong>: color, date,etc
          </li>
          <li>
            <strong>server-sent events</strong>
          </li>
          <li>
            <strong>Web workers</strong> : It can be used to achieve
            multithreading in js.
          </li>
          <li>
            <strong>Raster vs Vector.</strong> : Read through internet.
          </li>
          <li>
            <strong>Different ways to handle responsiveness.</strong> :
            <ul>
              <li>Media Queries</li>
              <li>Responsive Units</li>
              <li>Grid and flex</li>
              <li>View port metag tag must be there</li>
              <li>Mobile First Design.</li>
            </ul>
          </li>
          <li>
            <strong>Geolocation Api.</strong>
          </li>
          <li>
            <strong>Web components.</strong>
          </li>
          <li>
            <strong>
              What are data attributes in HTML, and how are they used?
            </strong>{" "}
            : Starts with data- and can be used to store custom data on HTML.
            Just like data-test-id. We can access data-test-id value as
            div.dataset.testId while accessing it in js.
          </li>

          <li>
            <strong>{"<template>"}</strong> : Just like ng-template in angular,
            it is used to declare a block of HTML that is not rendered
            immediately but can be instantiated later.
          </li>
          <li>
            <strong>contenteditable</strong> : It is an attribute that can be
            added to any HTML element to make it editable by the user. If we add
            this attribute to a div, the user can click on the div and edit its
            content directly in the browser.
          </li>
          <li>
            <strong>rel</strong>:The rel attribute specifies the relationship
            between the current document and the linked resource. For example,
            rel=”stylesheet” indicates that the linked file is a CSS stylesheet.
          </li>
          <li>
            <strong>
              How to change ordered list numbering format in middle of a list.
            </strong>{" "}
            : Simply specify the type in th li tag in li tag where we want to
            change the type.
          </li>
          <li>
            <strong>Group different checkboxes or radios together.</strong>
          </li>
          <li>
            <strong>Shadow DOM</strong> : Shadow DOM isolates your component's
            structure and styles, making it easier to build reusable,
            conflict-free UI components. It encapsulates html,js,css into a
            single entity so that no style leakage happens. It is used in web
            components.
          </li>
          <li>
            <strong>ARIA</strong>
          </li>
          <li>
            <strong>display:none vs visibility:hidden</strong>
          </li>
          <li>
            <strong>{"<meter>"}</strong>
          </li>
          <li>
            <strong>defer and async attributes in the {"<script>"} tag</strong>:
            <ul>
              <li>
                <strong>async</strong> : It tells the browser to download the
                script in the background while the rest of the page is loading.
                Once the script is downloaded, it will be executed immediately,
                which may block the rendering of the page. If there are more
                then one scripts with async attribute then they will be executed
                in the order they are downloaded and not in the order they are
                defined in the html.
              </li>
              <li>
                <strong>defer</strong> : It tells the browser to download the
                script in the background while the rest of the page is loading.
                Once the script is downloaded, it will wait for the html parsing
                to finish and then the script will be executed. If there are
                more then one scripts with defer attribute then they will be
                executed in the order they are defined in the html.
              </li>
            </ul>
          </li>
          <li>
            <strong>preload</strong>
          </li>
          <li>
            <strong>different types of content-type</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Javascript">
        <ul>
          <li>
            <strong>Global Objects of BOM and DOM</strong>:
            <ul>
              <li>window</li>
              <li>document</li>
              <li>navigator</li>
              <li>location</li>
              <li>history</li>
              <li>screen</li>
            </ul>
          </li>
          <li>
            <strong>innerwidth vs outerwidth</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Virtual DOM and Rendering">
        <ol>
          <li>What is the Virtual DOM, and how does it work.</li>
          <li>Why is the Virtual DOM faster than the real DOM.</li>
          <li>
            What is reconciliation in React, and how does it optimize
            performance.
          </li>
          <li>How does React decide when to re-render a component.</li>
          <li>What are key props in React, and why are they important.</li>
          <li>How can you prevent unnecessary re-renders in React.</li>
          <li>What is React.memo, and how does it optimize performance.</li>
          <li>What is the difference between PureComponent and React.memo.</li>
          <li>What are synthetic events in React, and how do they work.</li>
          <li>
            What are the common performance issues in React and how to fix them.
          </li>
        </ol>
      </Accordian>
      <Accordian header="Component Lifecycle">
        <ol>
          <li>
            What are the different phases of the React component lifecycle.
          </li>
          <li>
            What is the difference between mounting, updating, and unmounting in
            React.
          </li>
          <li>What lifecycle methods are available in class components.</li>
          <li>
            What is the difference between componentDidMount,
            componentDidUpdate, and componentWillUnmount.
          </li>
          <li>
            How do lifecycle methods compare to useEffect in functional
            components.
          </li>
          <li>How does React handle cleanup when a component unmounts.</li>
          <li>
            What is the role of shouldComponentUpdate in class components.
          </li>
          <li>
            What are the side effects in React, and how should they be managed.
          </li>
          <li>How does error handling work in React components.</li>
          <li>What is getDerivedStateFromProps, and when should it be used.</li>
        </ol>
      </Accordian>
      <Accordian header="React Hooks">
        <ol>
          <li>What are React Hooks, and why were they introduced.</li>
          <li>What is useState, and how does it work.</li>
          <li>What is useEffect, and what are its common use cases.</li>
          <li>
            What is the difference between useEffect and lifecycle methods in
            class components.
          </li>
          <li>What is useRef, and how does it help manage DOM elements.</li>
          <li>What is useMemo, and how does it optimize performance.</li>
          <li>
            What is useCallback, and how does it prevent unnecessary re-renders.
          </li>
          <li>What is useContext, and how does it simplify prop drilling.</li>
          <li>
            What is useReducer, and when should you use it instead of useState.
          </li>
          <li>What are custom hooks, and how can they be useful.</li>
          <li>Difference between useRef and createRef.</li>
          <li>What is forwardRef.</li>
        </ol>
      </Accordian>
      <Accordian header="State Management in React">
        <ul>
          <li>
            What is the difference between controlled and uncontrolled
            components.
          </li>
          <li>
            How does state management work in React without external libraries.
          </li>
          <li>
            What is Context API, and how does it help manage global state.
          </li>
          <li>What are the advantages and limitations of using Context API.</li>
          <li>What is the difference between Redux and Context API.</li>
          <li>What is Recoil, and how does it compare to Redux.</li>
          <li>What is Zustand, and how does it simplify state management.</li>
        </ul>
      </Accordian>
      <Accordian header="Miscellnious">
        <ul>
          <li>
            <strong>Render Hijacking</strong> : The ability to control the
            output of one component by another component. Example : wrapping a
            componenet inside a higher order component.
          </li>
          <li>What is the purpose of registerServiceWorker in React?</li>
          <li>What is React memo function?</li>
          <li>
            <strong>Keyed Fragments</strong> : React Fragments with keys but
            here we cant simply use {"<></>"} we have to use
            {"<React.Fragment key={key}></React.Fragment>"}
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default InterviewQuestion;
