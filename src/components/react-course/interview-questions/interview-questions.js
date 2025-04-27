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
              <li>
                <strong>CDN hosting</strong> : It is a globally distributed
                network of servers that delivers content (like JS/CSS files,
                images, videos) to users from the nearest location, reducing
                latency and improving load speed
              </li>
              <li>
                <strong>File compression</strong>
              </li>
              <li>
                <strong>File concatenation</strong>
              </li>
              <li>
                <strong>Minify scripts</strong>
              </li>
              <li>
                <strong>Lazy Loading</strong>
              </li>
              <li>
                <strong>Preload important assets</strong>
              </li>
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
            (Unicode Transformation Format - 8 bits)
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
            <strong> input</strong> element. It is used to create a dropdown
            list of suggestions for the user to choose from. It is like
            auto-suggestion. It is introduced in HTML5. To achieve this we need
            to add a datalist tag with options inside it and add a id to it. The
            id need to be attached to the list attribute of the input tag.
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
            Please implement it.
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
            <strong>Web components.</strong> : We can use{" "}
            <strong>
              customElements global object present in js to create a web
              component. Like a new type of reusable button.
            </strong>
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
            <strong>Group different radios together.</strong> : Have seperate
            radio buttons but give same name to all of them.
          </li>
          <li>
            <strong>Shadow DOM</strong> : Shadow DOM isolates your component's
            structure and styles, making it easier to build reusable,
            conflict-free UI components. It encapsulates html,js,css into a
            single entity so that no style leakage happens. It is used in web
            components.
          </li>
          <li>
            <strong>ARIA</strong> : (Accessible Rich Internet Applications )
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
            <strong>preload</strong> : It tells the browser to start fetching a
            resource early, because it's needed soon for the current page. Eg :
            fonts, images, scripts, etc.
          </li>
          <li>
            <strong>prefetch</strong> : It tells the browser to load resources
            in the background, because they might be needed for the next page or
            future navigation. Eg: js bundle for next page, images/scripts, etc.
          </li>
          <li>
            <strong>different types of content-type</strong> : text/html,
            text/css, text/javascript, image/png, image/jpeg, application/json,
            multipart/form-data, etc.
          </li>
          <li>
            <strong>srcset attribute in img</strong> : It helps us to provide
            different src for different screen size.
          </li>
        </ul>
      </Accordian>
      <Accordian header="CSS">
        <ul>
          <li>
            <strong>How is css render blocking</strong> : It is render blocking
            because we need to construct the cssom before we can render the
            page. So if we have a css file which is not loaded then the browser
            will not be able to render the page. So we need to load the css file
            before rendering the page.
          </li>
          <li>
            <strong>Different units of css</strong> :{" "}
            <ul>
              <li>
                <strong>px</strong>: It is an absolute unit of measurement. It
                is not responsive.
              </li>
              <li>
                <strong>em</strong>: Relative to the font-size of the parent
                element. Can compound, meaning nesting can multiply sizes if
                you're not careful.
              </li>
              <li>
                <strong>rem</strong> : Relative to the root {"(<html>)"} font
                size.
              </li>
            </ul>
          </li>
          <li>
            <strong>Box Model in CSS</strong>
          </li>{" "}
          <li>
            <strong>Limitations of CSS</strong> :{" "}
            <ul>
              <li>
                <strong>There is no parent selector </strong>: Currently, Using
                CSS, you can’t select a parent tag.
              </li>
              <li>
                <strong>Cross Browser issue</strong> : Some selectors behave
                differently in a different browser).
              </li>
              <li>
                <strong>Browser Compatibility </strong>: Some style selectors
                are supported and some are not. We have to determine which style
                is supported or not using the @support selector).
              </li>
            </ul>
          </li>
          <li>
            <strong>Different ways to embedd css.</strong> :{" "}
            <ul>
              <li>External CSS (link tag)</li>
              <li>Inline CSS</li>
              <li>Style tag</li>
              <li>Import tag</li>
            </ul>
          </li>
          <li>
            <strong>Different types of css selectors</strong> :{" "}
            <ul>
              <li>
                <strong>Universal Selector (*)</strong>
              </li>
              <li>
                <strong>Element Selector</strong>
              </li>
              <li>
                <strong>Class Selector</strong>
              </li>
              <li>
                <strong>ID Selector</strong>
              </li>
              <li>
                <strong>Descendant Combinator (p div) </strong>: Selects all the
                div tags inside p tag.
              </li>
              <li>
                <strong>Child Combinator {"(p>div)"}</strong> : Selects all the
                div tags which are direct child of p tag.
              </li>
              <li>
                <strong>General Sibling Combinator {"(div~p)"} </strong>: It
                selects all the p tags which are sibling to div tag. and comes
                after the div tag.
              </li>
              <li>
                <strong>Adjacent Sibling Combinator {"(div+p)"} </strong>: It
                will only select the first immediate sibling p tag to div. If
                there are more than one p tag then it will not select them. If
                any other tag comes in between div and p so p will not be
                selected.
              </li>
              <li>
                In case of combinator the selection happens from right to left.
                Example browser first finds all the p tags and then it filter
                outs which p tag are child/sibling to div tags.
              </li>
            </ul>
          </li>
          <li>
            <strong>CSS Preprocessors</strong> :{" "}
            <ul>
              <li>
                A CSS Preprocessor is a tool used to extend the basic
                functionality of default vanilla CSS through its own scripting
                language. It helps us to use complex logical syntax like –
                variables, functions, mixins, code nesting, and inheritance to
                name a few, supercharging your vanilla CSS.
              </li>
              <li>
                It uses 2 extensions .sass(it uses indeddation and not curly
                braces) and .scss (it uses curly braces).
              </li>
            </ul>
          </li>{" "}
          <li>
            <strong>
              What is VH/VW (viewport height/ viewport width) in CSS?
            </strong>{" "}
            : It is a unit of measurement in CSS that is relative to the size of
            the viewport. 1vh is equal to 1% of the height of the viewport, and
            1vw is equal to 1% of the width of the viewport.
          </li>{" "}
          <li>
            <strong>Reset CSS </strong> : CSS resets aim to remove all built-in
            browser styling. For example margins, paddings, font-sizes of all
            elements are reset to be the same.
          </li>{" "}
          <li>
            <strong>Normalize CSS</strong> : Normalize CSS aims to make built-in
            browser styling consistent across browsers. It also corrects bugs
            for common browser dependencies. It sets a default styling across
            the browser.
          </li>{" "}
          <li>
            <strong>inline vs inline-block vs block</strong> : inline-block is
            responsive and can have width and height. inline is not responsive
            and cannot have width and height. Inline elements cannot have margin
            top and bottom. Block is responsive and can have width and height.
          </li>{" "}
          <li>
            <strong>Pseudo elements</strong>:
            <ul>
              <li>
                <strong>::before </strong>: Adds content before the element
              </li>
              <li>
                <strong>::after </strong>: Adds content after the element
              </li>
              <li>
                <strong>::first-letter </strong>: Targets the first letter of
                the element.
              </li>
              <li>
                <strong>::first-line </strong>: Targets the first line of the
                element.
              </li>
              <li>
                <strong>::selection</strong> : Targets the selected text in the
                element.(for example when we select a text in the browser using
                cursor dragging).
              </li>
            </ul>
          </li>
          <li>
            <strong>Pseudo Class</strong> :{" "}
            <ul>
              <li>
                <strong>:link</strong>
              </li>
              <li>
                <strong>:hover</strong>
              </li>
              <li>
                <strong>:visited</strong>
              </li>
              <li>
                <strong>:active</strong>
              </li>
              <li>
                <strong>:nth-child(n) and nth-of-type(even/odd)</strong>
              </li>
              <li>
                <strong>:focus</strong>
              </li>
            </ul>
          </li>{" "}
          <li>
            <strong>Cascading</strong> : Cascading in CSS refers to the order of
            precedence that determines which style rules are applied to an
            element when multiple conflicting styles are defined for that
            element.
          </li>
          <li>
            <strong>Adaptive Design</strong> : Desiging the UI based on some
            fixed layouts.
          </li>
          <li>
            <strong>Responsive Design</strong> : Responsive design focuses on
            showing content on the basis of available browser space.
          </li>
          <li>
            <strong>border-box vs content-box vs padding-box</strong> :
            <ul>
              <li>
                <strong>content-box</strong> : Default box model as the name
                suggests the specified height width contains only the content.
                The final height and width will be padding + border + content.
              </li>
              <li>
                <strong>border-box</strong> : The specified height and width
                will contains content + padding + border. The final height and
                width will be same as the specified height and width.
              </li>
              <li>
                <strong>Padding-box </strong> : Width and height values apply to
                the element's content and its padding. The border is added to
                the outside of the box. Currently, only Firefox supports the
                padding-box value.
              </li>
            </ul>
          </li>
          <li>
            <strong>float</strong> : Used to align an element to left or right
            of its container.
          </li>
          <li>
            <strong>z-index</strong>
          </li>
          <li>
            <strong>grid vs flexbox</strong> : grid is used to create 2D layouts
            and flexbox is used to create 1D layouts.
          </li>
          <li>
            <strong>positions</strong> :
            <ul>
              <li>
                <strong>absolute</strong>
              </li>
              <li>
                <strong>relative</strong>
              </li>
              <li>
                <strong>static</strong>
              </li>
              <li>
                <strong>fixed</strong>
              </li>
              <li>
                <strong>sticky</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>DOM reflow</strong> : It is the name of the web browser
            process for re-calculating the positions and geometries of elements
            in the document, for the purpose of re-rendering part or all of the
            document.
          </li>
          <li>
            <strong>Center align a div</strong> :{" "}
            <ul>
              <li>Using position relative and absolute(with transform)</li>
              <li>Using flex box</li>
            </ul>
          </li>
          <li>
            <strong>@media properties</strong> :{" "}
            <ul>
              <li>
                <strong>all</strong> : It’s the default property. Used for all
                media-type devices.
              </li>
              <li>
                <strong>Screen</strong> : Used for computer screen, mobile
                screen.
              </li>
              <li>
                <strong>Print</strong> : Used for printers.
              </li>
              <li>
                <strong>Speech</strong> : Used for screen readers.
              </li>
            </ul>
          </li>
          <li>
            <strong>Different ways to hide element</strong> :{" "}
            <ul>
              <li>
                <strong>Display none</strong>
              </li>
              <li>
                <strong>Visibility Hidden</strong>
              </li>
              <li>
                <strong>Position Absolute</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>:root</strong> : It’s most commonly used to define CSS
            variables (custom properties) that can be accessed globally. These
            variables can be used anywhere in the CSS file, making it easier to
            maintain and update styles. It is used to target the root element of
            the document, which is usually the {"<html>"} element. We can even
            use html to define the css but :root has higher specificity.
          </li>
          <li>
            <strong>calc()</strong>
          </li>{" "}
          <li>
            <strong>custom variables in css.</strong>
          </li>{" "}
          <li>
            <strong>css vs sass variables</strong>
          </li>{" "}
          <li>
            <strong>!important</strong> : The style will take the highest
            precedence
          </li>{" "}
          <li>
            <strong>specificity</strong> : A process of determining which CSS
            rule will be applied to an element. It actually determines which
            rules will take precedence. Inline style usually wins then ID then
            the class value (or pseudo-class or attribute selector), the
            universal selector (*) has no specificity. ID selectors have a
            higher specificity than attribute selectors. If two rules have the
            same specificity, the one that appears last in the CSS will be
            applied.
          </li>{" "}
          <li>
            <strong>progressive rendering</strong> : Progressive rendering is
            the process of improving the performance of a webpage for loading
            time to display the content speedily. The use of loading the lazy
            loading of the image with the help of Intersection Observer API via
            viewport.
          </li>{" "}
          <li>
            <strong>width, max-width, min-width</strong>
          </li>{" "}
          <li>
            <strong> gradients in CSS</strong>
          </li>{" "}
          <li>
            <strong>object-fit</strong>
          </li>{" "}
          <li>
            <strong>CSS paint API</strong>
          </li>{" "}
          <li>
            <strong>clip-path</strong>
          </li>{" "}
          <li>
            <strong>CSS Counters</strong> : CSS Counters are variables
            maintained by CSS whose values can be incremented by CSS rules to
            track how many times they're used. They're often used for
            automatically numbering sections of a document or for creating
            complex numbered lists. They're manipulated using the counter-reset,
            counter-increment, and counter() properties and functions.
          </li>{" "}
          <li>
            <strong>progressive enhancement and graceful degradation.</strong> :
            Progressive enhancement starts with a basic, functional version of a
            website that works for all users, then adds advanced features for
            browsers that support them. Graceful degradation starts with a
            fully-featured website and ensures it remains functional (albeit
            with reduced features) on older browsers. Progressive enhancement is
            generally preferred as it ensures a base level of functionality for
            all users.
          </li>{" "}
          <li>
            <strong>CSS Containment and the contain property</strong>
          </li>
          <li>
            <strong>stacking context</strong>
          </li>
          <li>
            <strong>How do you select elements by attribute in CSS?</strong> :
            <ul>
              <li>
                Exact Match: [] selects an exact attribute value.
                ([class="important"])
              </li>
              <li>
                Value Starts With: [^] targets attributes with specified
                starting values. ([href^="https"])
              </li>
              <li>
                Case Insensitive: Selectors are usually case-sensitive, but by
                using i, you can make them case-insensitive. ([alt="home" i])
              </li>
            </ul>
            progressive rendering
          </li>
          <li>
            <strong>@ rules</strong> : special instructions that start with @
            and control how CSS behaves. Example @media, @import, @font-face,
            @keyframes, @supports, @namespace, @page.
          </li>
          <li>
            <a
              href="https://github.com/Devinterview-io/css-interview-questions"
              target="_blank"
            >
              CSS Important Questions
            </a>
            <a
              href="https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions"
              target="_blank"
            >
              CSS Important Question (2)
            </a>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Javascript">
        <ol>
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
          <li>
            Whats the use of <strong>Promise.resolve()</strong> and{" "}
            <strong>Promise.reject()</strong>
          </li>
          <li>Garbage Collection in js</li>
          <li>Map vs WeakMap</li>
          <li>
            What are the parametes that map and filter takes :{" "}
            <strong>
              callback and thisArgs(used to control the this of callback
              function)
            </strong>
            . Reduce donot take thisArgs .
          </li>
          <li>
            What are the params that the callback method of map and filter
            takes. : <strong>currVal,index,currentArray(this).</strong> Reduce
            takes acc as well.
          </li>
        </ol>
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
