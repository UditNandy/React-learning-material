import Accordian from "../shared/accordian/accordian";

const Accessibility = () => {
  return (
    <>
      <Accordian header="Assistive Technology">
        <ul>
          <li>
            Web applications are very much accessible by default (HTML 5) but
            its us the developers who make the app in-accessible.
          </li>
          <li>
            <strong>Keyboard Only</strong>
          </li>
          <li>
            <strong>Screen Reader</strong> : Use Ctrl + Windows + Enter in
            windows
          </li>
          <li>
            <strong>Mouse & Pointer Devices</strong>
          </li>
          <li>
            <strong>Touch screen gestures</strong>
          </li>
          <li>
            <strong>Screen Magnifier</strong>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Accessibility Standards">
        <ul>
          <li>
            <strong>WCAG (Web Content Accessibility Guideline)</strong> :{" "}
            <ul>
              <li>Level A</li>
              <li>Level AA</li>
              <li>Level AAA</li>
            </ul>
          </li>
          <li>
            <strong>Perceivable</strong> : Any one on the internet can access
            the content of our app.
          </li>
          <li>
            <strong>Operable</strong> : People should be able to operate on our
            app.
          </li>
          <li>
            <strong>Understandable</strong> :
          </li>
        </ul>
      </Accordian>
      <Accordian header="Screen Readers">
        <ul>
          <li>
            <strong>In build screen readers</strong>
          </li>
          <li>
            <strong>JAWS</strong>
          </li>
          <li>
            <strong>NVDA</strong>
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Accessibility;
