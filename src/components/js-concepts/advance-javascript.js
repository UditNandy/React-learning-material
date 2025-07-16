import Accordian from "../shared/accordian/accordian";

const AdvanceJavascript = () => {
  return (
    <>
      <Accordian header="Proxy Class">
        <ul>
          <li>
            A Proxy object lets you intercept and customize operations on
            another object, called the target.
          </li>
          <li>
            <strong>
              <pre>{`const proxy = new Proxy(target, handler);`}</pre>
            </strong>
          </li>
          <li>
            <strong>target</strong>: The object you want to proxy.
          </li>
          <li>
            <strong>handler</strong>: An object containing trap functions to
            override default behaviors.
          </li>
          <li>
            <strong>Common Handler Functions</strong>
            <ul>
              <li>
                <strong>get</strong>: Intercepts reading a property (e.g.,
                obj.prop).
              </li>
              <li>
                <strong>set</strong>: Intercepts writing to a property (e.g.,
                obj.prop = value).
              </li>
              <li>
                <strong>has</strong>: Intercepts the <code>in</code> operator
                (e.g., 'prop' in obj).
              </li>
              <li>
                <strong>deleteProperty</strong>: Intercepts the{" "}
                <code>delete</code> operator (e.g., delete obj.prop).
              </li>
              <li>
                <strong>apply</strong>: Intercepts function calls (used when
                proxying a function).
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default AdvanceJavascript;
