import Accordian from "../../shared/accordian/accordian.js";
import "./reconciliation.css";
import "./reconciliation.js";

const Reconciliation = () => {
  return (
    <>
      <Accordian header="Reconciliation">
        <ul>
          <li>
            It refers to the process of comparing the current and previous state
            of virtual DOM efficiently.
          </li>
          <li>
            It has different phases
            <ul>
              <li>
                <strong>Render Phase</strong>
                <ul>
                  <li>
                    render() method is called to generate a new representation
                    of virtual DOM.
                  </li>
                  <li>
                    This virtual DOM is then compared with the previous state of
                    virtual DOM.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Diff Algorithm</strong>
                <ul>
                  <li>
                    The old and new virtual DOMs are compared to determine the
                    differnece
                  </li>
                </ul>
              </li>
              <li>
                <strong>Commit Phase</strong>
                <ul>
                  <li>
                    Once the differences are determined, React applies the
                    update to the real DOM at most efficient way.
                  </li>
                  <li>
                    React batches updates and minimise reflow and repaint for
                    better optimisation.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="React Fiber">
        <ul>
          <li>It was introduced in React 16.</li>
          <li>It is a new way of updating the DOM.</li>
          <li>
            It's main highlight was incremental rendering, which means rendering
            the UI in chunks.
          </li>
          <li>
            Suppose the state changes like A {"->"} B, B {"->"} C, the the
            render can be A {"->"} C.
          </li>
          <li>
            In UI its not important that every update has to be applied
            immediatly. It can lead to frame drops giving a bad user experience.
          </li>
          <li>
            Different updates have different priorities like animation update
            needs to triggered more quickly then an update from state.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Diff Algorithm">
        <ul>
          <li>
            It calculates the difference between 2 virtual DOMS (previous and
            the current) and update the actual DOM on every render cycle.
          </li>
          <li>
            It check if two root elements type are different then react will
            simply tear down the old tree and rebuild the new tree from scratch.
          </li>
          <li>
            If two element type are same :
            <ul>
              <li>
                It will compare and make necessary updates to the attributes
                keeping the dom node same.
              </li>
            </ul>
          </li>
          <li>Diffing of list is performed using keys. It should be unique.</li>
        </ul>
      </Accordian>
      <Accordian header="Virtual DOM">
        <ul>
          <li>It is not an actual DOM.</li>
          <li>It is representation of an actual DOM.</li>
          <li>It is nothing else but the React Element Object.</li>
          <li>It is basically the root level React element.</li>
        </ul>
      </Accordian>
    </>
  );
};

export default Reconciliation;
