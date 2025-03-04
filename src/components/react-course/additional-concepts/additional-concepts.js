import { forwardRef, useEffect, useRef } from "react";
import Accordian from "../../shared/accordian/accordian";

const AdditionalConcepts = () => {
  const demoRef = useRef(null);
  useEffect(() => {
    console.log("Ref is", demoRef);
  });

  return (
    <>
      <Accordian header="Portals">
        <ul>
          <li>
            Portals in react allows us to render something outside the normal
            DOM hierarchy.
          </li>
          <li>
            In general everything is rendered inside the root node of
            index.html.
          </li>
          <li>
            But in some cases we want to render some UI components above all the
            child and parent components like modals, tooltips, spinners,etc.
          </li>
          <li>
            If we create them inside a parent then there might be a case where
            parent's css is affecting these components styles.
          </li>
          <li>
            So in these cases we can create another element in the same
            hierarchy of root tag in index.html like modal-portal,
            tooltip-portal ,etc.
          </li>
          <li>We can render our components in these elements.</li>
          <li>
            To create a portal we have to use{" "}
            <strong>createPortal(JSX,domElement)</strong> method from{" "}
            <strong>ReactDOM</strong>.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Synthetic Events">
        <ul>
          <li>These are a wrapper above the native events in js.</li>
          <li>
            JS native events may vary from browser to browser so react's
            synthetic events provides a cross browser consistent event object.
          </li>
          <li>
            It supports event pooling means the synthetic events are not
            destroyed.
          </li>
          <li>
            Whenever a event is triggered a new native event object is created
            by JS and is destroyed as soon as it leaves the event handler method
            but synthetic events in React are not destroyed only their values
            are reset.
          </li>
          <li>
            We can even access the nativeEvent inside the synthetic event object
            in react.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Forward Ref">
        <ul>
          <li>
            Forward Ref is a higher order component which allows the parent
            component to pass its ref to the child component.
          </li>
          <li>
            In many cases we need to do some dom manipulation in child component
            in that case it will be helpful.
          </li>
          <li>
            We have to pass the child component inside forwardRef function
            durring the creation of the child component.
          </li>
          <li>
            Thr child component will take 2 parameters <strong>props</strong>{" "}
            and <strong>ref</strong>
          </li>
          <li>
            Note its not possible to directly attach the ref to the child
            component in the parent component JSX.
          </li>
          <li>
            Remember we cannot simply pass refs as a regular props because refs
            are reserved keywords and not a normal prop.
          </li>
        </ul>
      </Accordian>
      <ForwardRefDemo hello="123" ref={demoRef} />
    </>
  );
};
export default AdditionalConcepts;

const ForwardRefDemo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="wrapper">
      This is the forward ref component
    </div>
  );
});
