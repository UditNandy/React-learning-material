import { Component } from "react";
import Accordian from "../../shared/accordian/accordian";

class ClassComponent extends Component {
  count;
  constructor(props) {
    super(props);
    this.state = { count: 0, count1: 100 };
  }
  render() {
    return (
      <>
        <Accordian header="Class Components">
          <ul>
            <li>Older way of component creation.</li>
            <li>
              It is a normal JS class which extends Component class from React
              and has a render method which returns some piece of JSX.
            </li>
            <li>
              Here <strong>Component</strong> is a class which is given by React
              and is inherited by the class to make it a class component.
            </li>
          </ul>
        </Accordian>
        <Accordian header="Props in Class components">
          <ul>
            <li>You can get the props in constructor.</li>
            <li>You have to pass the props to super method in constructor.</li>
            <li>
              To access the props values anywhere inside the class component we
              have to use <strong>this.props</strong>
            </li>
            <li>
              Whenever an instance of a class is created the constructor is
              called.
            </li>
          </ul>
        </Accordian>
        <Accordian header="State Variables">
          <ul>
            <li>
              Whenever an instance of a class is created the state variable is
              created
            </li>
            <li>The best place to create state variables is constructor.</li>
            <li>
              In class components we have a object called state which can be
              accessed using <strong>this.state</strong>.
            </li>
            <li>
              If you want to add a state variable you can a new key value pair
              in <strong>this.state</strong> object.
            </li>
            <li>
              The this variable of class component contains the refs, states,
              props, etc.
            </li>
            <li>
              In functional components we declare all the state variables
              seperatly but behind the scenes React maintains a big object which
              contains all the state variables.
            </li>
            <li>
              Like in functional component never update state variables directly
              using = operator.
            </li>
            <li>You can use this.setState method to update state variables.</li>
            <li>
              Just like setterMethod of useState you can either pass the updated
              state or pass a callback method with takes prev value and return
              the updated state.
            </li>
            <li>
              Suppose the state object has many states and we just want to
              updated a single state, we can pass that single state in the
              setState method and React will only update that key of this.state
              without touching the other states.
            </li>
            <li>
              <strong>Example</strong> : Count {this.state.count} ,
              {this.state.count1}{" "}
              <button
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                }}
              >
                +
              </button>
            </li>
          </ul>
        </Accordian>
        <Accordian header="Lifecycle Methods">
          It has 3 phases
          <ul>
            <li>Mounting</li>
            <li>Updating</li>
            <li>Unmounting</li>
          </ul>
          <Accordian header="React mounting phases">
            <ul>
              <li>It has 2 phases.</li>
              <li>
                <strong>Render</strong>
                <ul>
                  <li>
                    It consists of <strong>constructor</strong> and{" "}
                    <strong>render</strong>
                  </li>
                  <li>
                    After these methods are called react will update the DOM.
                  </li>
                  <li>In this phase react deals with the virtual DOM.</li>
                  <li>It is really fast.</li>
                </ul>
              </li>
              <li>
                <strong>Commit</strong>
                <ul>
                  <li>Once the DOM is updated commit phase begins</li>
                  <li>It includes componentDidMount, componentDidUpdate</li>
                  <li>
                    Its a perfect place to run side effects like api call or DOM
                    manipulation.
                  </li>
                  <li>This phase takes time.</li>
                </ul>
              </li>
              <li>
                In case of sibling react will call the render phase of all the
                children first and then the commit phase of all the children.
              </li>
              <li>
                As DOM manipulation is expensive react tries to batch up the
                task by keeping one phase with virtual DOM and diff algo stuffs
                , and another phase with actual DOM manipulation stuffs.
              </li>
              <li>This optimisation makes react fast.</li>
              <li>
                Refer :{" "}
                <a
                  href="
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram"
                  target="blank"
                >
                  React Lifecycle image
                </a>
              </li>
              <li>
                <strong>Example</strong>
                <ul>
                  <li>Parent Constructor</li>
                  <li>Parent Render</li>
                  <li>First Child Constructor</li>
                  <li>First Child Render</li>
                  <li>Second Child Constructor</li>
                  <li>Second Child Render</li>
                  <li>First Child ComponentDidMount</li>
                  <li>Second Child ComponentDidMount</li>
                  <li>Parent ComponentDidMount</li>
                </ul>
              </li>
            </ul>
          </Accordian>
          <Accordian header="constructor">
            <ul>
              <li>It is called whenever a class is instantiated.</li>
              <li>It's called only in mounting phase.</li>
            </ul>
          </Accordian>
          <Accordian header="render">
            <ul>
              <li>This is a mandatory lifecycle method.</li>
              <li>It is called in both mounting and updating phase.</li>
            </ul>
          </Accordian>
          <Accordian header="componentDidMount">
            <ul>
              <li>
                Once the view and all the child components are rendered on the
                DOM then this method is called.
              </li>
              <li>
                You can call the dom apis here or make api calls here. Its
                similar to useEffect with blank dependency array. Remember not
                to compare hooks with lifecycle methods.
              </li>
              <li>
                As it is a part of commit phase it will be called only after all
                the DOMs are mounted.
              </li>
              <li>
                We can make componentDidMount async using the async keyword.
              </li>
              <li>
                To make api calls inside componentDidMount we can make it async.
              </li>
              <li>Its called only in mounting phase.</li>
            </ul>
          </Accordian>
          <Accordian header="componentDidUpdate">
            <ul>
              <li>
                Updating phase is called once the state variables, props are
                updated.
              </li>
              <li>Its called only in updating phase.</li>
              <li>
                It also gives us 2 arguments prevProps and prevState with which
                we can compare the previous and current props/states.
              </li>
            </ul>
          </Accordian>
          <Accordian header="componentWillUnmount">
            <ul>
              <li>Its called just before our component is unmounting.</li>
              <li>We can clear the intervals here.</li>
            </ul>
          </Accordian>
        </Accordian>
        <Accordian header="Interview Questions">
          <ul>
            <li>Why is it mandatory to use super props in class components.</li>
            <li>
              Is it possible to call 2nd child's dom elements from 1st child(in
              class and functional components).
            </li>
            <li>What are the lifecycle methods which we can make async.</li>
            <li>Is componentDidUpdate called in the mounting phase.</li>
            <li>
              Cons of single page application : Even after the component is
              removed the subscriptions, setIntervals, setTimeouts all the async
              callback which have been already attached are still active.
            </li>
            <li>Why we need to unmount.</li>
            <li>
              What will happen if you start a setInterval in
              componentWillUnmount.
            </li>
          </ul>
        </Accordian>
      </>
    );
  }
}

export default ClassComponent;
