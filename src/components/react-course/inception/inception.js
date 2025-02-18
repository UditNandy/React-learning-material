import Accordian from "../../shared/accordian/accordian";
import "./inception.css";
const Inception = () => {
  return (
    <>
      <Accordian header="How to inject react in a normal HTML page">
        <ul>
          <li>
            As soon as you add these cdn links in your html you will be able to
            use React in you normal html app.
          </li>
          <li>We import two links.</li>
          <li>
            First link is react.development.js which is the core file of react
            and has all the core algorithms of react.
          </li>
          <li>
            Second file is reacr-dom.development.js which contains logic related
            to DOM manipulation.
          </li>
          <li>
            There are two different links we need to include this is because
            react does not only work on web.
          </li>
          <li>
            React core file gives the core logic where as the dom file gives the
            dom manipulation.
          </li>
          <li>
            In case of react native which is used for mobile phones we can use
            the react core with some other link for mobile dom manipulation.
          </li>
          <li>
            After injecting these 2 files we can access "React" and "ReactDOM"
            objects in our console.
          </li>
          <li>
            These 2 objects has something called
            <strong>__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED</strong>
          </li>
          <li>
            This key contains an object which is used by React for internal
            operations like managing react hooks, fibers, debugging tools, etc.
            This is not for public use or for building web app as it might
            change over time and can break the application.
          </li>
          <li>
            After injecting react cdn links we can create our react element and
            render it in the html file.
          </li>
          <li>
            To create a element in react we can use{" "}
            <strong>createElement()</strong> method of{" "}
            <strong>React(comes from react core library)</strong> which takes 3
            parameters : tagname, attribute object and (array of
            childElements)/single element/ plain text inside it. This will
            return an object.
          </li>
          <li>
            To render the react element we need to create a reactRoot which can
            be done by invoking <strong>createRoot</strong> method of{" "}
            <strong>ReactDOM (comes from React DOM library)</strong> which takes
            the html element as an argument.
          </li>
          <li>
            After creating the root we just need to render the react element
            inside the root using <strong>root.render()</strong> method which
            takes the element as an argument.
          </li>
          <li>
            We can also say that the arguments in React.createElement() are
            tagName, normal props, children props or array of children props.
          </li>
          <li>
            The job of root.render() method is to take the react element, create
            the tag in the browser and put the content inside it. This render
            method is responsible for taking the react element and convert it to
            a dom element or the tag.
          </li>
          <li>
            To create nested elements we can simply pass react element/ array of
            react elements as the 3rd paramater in createElement method.
          </li>
          <li>
            Creating a nested structure in react can be really messy this is the
            reason why we need JSX.
          </li>
          <li>
            Suppose we are having something within the root tag of out html in
            that case root.render of react will replace the content present
            inside the root tag and will render the react elements inside
          </li>
          <li>
            If you want to have something alreay written inside react in that
            case you have to have a seperate div inside body and a seperate div
            for rendering react content.
          </li>
          <li>
            Remeber that the HTML will be read first so if we have anything
            inside the root tag it will be appeared first then as soon as JS
            executes root.render() the content of the root tag will be replaced
            by the react element. You will notice for the 1st few miliseconds
            you will see the initial thing that is written inside the root
            element then it will be replaced by react element.
          </li>
          <li>We can give any attribute to any html tag.</li>
          <li>
            Always remember using cdn links to inject react is not a good
            approach
            <ul>
              <li>The better way to inject react in our app is using npm.</li>
              <li>
                Fetching react from cdn is a costly operation as it will make a
                network call.
              </li>
              <li>
                Its easy to manages react version and its dependencies using
                package.json as we dont have to change the links which are used
                to inject react.
              </li>
              <li>
                We can simply change the version in the package.json file.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>

      <Accordian header="Benifits of React">
        <ul>
          <li>It is a library and not a full fledge framework.</li>
          <li>
            We can apply react to indivisual html, part of html, or inside any
            framework using cdn links. Something which is not possible with
            Angular.
          </li>
          <li>
            It can be used in any part of html like header, footer, card, etc.
          </li>
        </ul>
      </Accordian>

      <Accordian header="Why are these frameworks required">
        <ul>
          <li>
            The most expensive operation is a browser is DOM manipulation.
          </li>
          <li>All the frameworks are trying to reduce this.</li>
          <li>
            React comes with philosophy that whenever you want to do some DOM
            manipulation you do it through javascript.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Inception;
