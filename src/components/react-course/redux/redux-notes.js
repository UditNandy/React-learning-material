import { useDispatch, useSelector } from "react-redux";
import Accordian from "../../shared/accordian/accordian";
import { add, reset } from "../../../utils/slices/itemSlice";

const ReduxNotes = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => {
    return store.items.items;
  });

  const addItem = (e) => {
    dispatch(add(e.target.value));
  };

  return (
    <>
      <Accordian header="Redux">
        <ul>
          <li>It is not a mandatory stuff.</li>
          <li>Its a predictable state container for Javascript apps.</li>
          <li>It is a organised way/pattern to handle state.</li>
          <li>It should be avoided in small applications.</li>
          <li>
            Redux is a seperate state management library which we use with
            frameworks like React, Angular, etc.
          </li>
          <li>
            There are other state management libraries as well along with Redux.
            Example : <strong>zustand</strong>.
          </li>
          <li>
            Redux provides easy debugging, with the help of Redux dev tools.
          </li>
          <li>
            Redux team offers 2 libraries for React.
            <ul>
              <li>React-Redux (Old Way)</li>
              <li>Redux Toolkit (Recommended Way)</li>
            </ul>
          </li>
          <li>
            We need react-redux and @reduxjs/toolkit to work with redux in
            react.{" "}
          </li>
        </ul>
      </Accordian>
      <Accordian header="Redux Toolkit Architecture">
        <ul>
          <li>
            <strong>Store</strong>
            <ul>
              <li>A big JS object which is kept in a global central place.</li>
              <li>
                This store can be accessed by any component in the application.
              </li>
              <li>
                This store is a single piece of truth where all the states
                managed by redux will be kept.
              </li>
            </ul>
          </li>
          <li>
            <strong>Slices</strong>
            <ul>
              <li>
                As the redux store manages all the state variables so it becomes
                difficult to differentitate the different type of data.
              </li>
              <li>This is the place where slices comes into picture.</li>
              <li>
                This is used to make logical seperation between the states
                inside the store.
              </li>
            </ul>
          </li>
          <li>
            <strong>Actions</strong>
            <ul>
              <li>
                Actions are dispatched whenever we want to modify a certain
                state in the store.
              </li>
              <li>
                These actions are captured by functions known as{" "}
                <strong>reducers</strong> which modifies the state variable
                inside the store.
              </li>
              <li>
                These actions contains the type and payload based on which the
                state changes.
              </li>
            </ul>
          </li>
          <li>
            <strong>Reducers</strong>
            <ul>
              <li>
                These are normal js functions which accepts the actions and
                modified the state variables.
              </li>
            </ul>
          </li>
          <li>
            <strong>Selectors</strong>
            <ul>
              <li>
                These are used to read the data from the store which can be used
                to modify the react component.
              </li>
            </ul>
          </li>
          <li>
            <strong>Subscribing to the Store</strong>
            <ul>
              <li>
                Data present inside the component will be updated as soon as the
                store updates.
              </li>
              <li>The subscription is done using selectors. </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Middlewares">
        <ul>
          <li>
            These are curreyed functions which acts as an interceptor when some
            action is dispatched.
          </li>
          <li>
            It takes 3 arguments <strong>store, next, action</strong>
          </li>
          <li>
            If we want to send the action to the reducer we need to pass the
            original/updated action in the next method.
          </li>
          <li>
            We can associate middlewares in the configureStore when below
            reducer object we can add middleware key and it take a callback
            function which returns a array of middlewares.
          </li>
          <li>
            You can add as many middlewares as you want and they will be
            executed in the order they are placed in array.
          </li>
        </ul>
      </Accordian>
      <Accordian header={"Redux Thunk"}>
        <ul>
          <li>
            It is a middleware for Redux that allows you to write async logic
            (like API calls) in your action creators.
          </li>
          <li>
            Normally, Redux actions must be plain JavaScript objects, but with
            Redux Thunk, we can dispatch functions (thunks) instead of just
            objects.
          </li>
          <li>It is like dispatching a function instead of a object.</li>
          <li>
            The thunk middleware checks for the type of action.
            <ul>
              <li>If its a function it executes it</li>
              <li>Else it executes the next method.</li>
            </ul>
          </li>
          <li>Redux thunks comes preconfigured in redux toolkit.</li>
          <li>
            While adding middlewares we need to concat it with getDefault
            middlewares or it will even work if we dont have any middleware.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Steps to configure Redux">
        <ul>
          <li>Install react-redux and @reduxjs/toolkit</li>
          <li>
            Build the store.
            <ul>
              <li>
                We can build a store using configureStore method from
                '@reduxjs/toolkit'. It comes from @reduxjs/toolkit because its
                the core functionality of redux not of react.
              </li>
              <li>
                The configureStore takes an object which consist of reducers
                (its the store reducer).
              </li>
              <li>
                The reducer here is an object which consists of reducer name and
                the reducer we export from slices.
              </li>
              <li>To modify the store we need reducers.</li>
              <li>This reducer consist of reducers of slices.</li>
              <li>It is basically a reducer of reducers from each slice.</li>
            </ul>
          </li>
          <li>
            Connect the store to the app.
            <ul>
              <li>
                We can provide the store to the root of our app{" "}
                <strong>app.js/index.js</strong>
              </li>
              <li>
                To do this we need to import Provider from 'react-redux'. It
                comes from react-redux because it acts as a bridge between react
                and redux.
              </li>
              <li>
                This provider takes a props store in which we can pass the store
                we created.
              </li>
              <li>Its advisable to provide the store to the root level.</li>
            </ul>
          </li>
          <li>
            Create slices.
            <ul>
              <li>We can have seperate files for seperate slices.</li>
              <li>
                To create a slice we can use createSlice function from
                @reduxjs/toolkit.
              </li>
              <li>
                The create slice method takes an object which consists of
                <ul>
                  <li>name</li>
                  <li>
                    initialState (its an object of states that the slice will
                    have)
                  </li>
                  <li>
                    reducers (object which consists of reducer functions
                    corresponding to each action)
                  </li>
                  <li>
                    The reducer functions take 2 arguments{" "}
                    <ul>
                      <li>
                        <strong>state</strong>: its the current state of the
                        slice.
                      </li>
                      <li>
                        <strong>actions</strong> : It has a payload (based on
                        which change will be made)
                      </li>
                    </ul>
                  </li>
                  <li>We need to export actions and redcers.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Read data using selectors.
            <ul>
              <li>
                To subscribe redux state we can use a hook{" "}
                <strong>useSelector</strong>
              </li>
              <li>
                <strong>useSelector</strong> takes a callback function which
                gives us store and we can return the required slice and state
                from the store using store.['sliceName'].['stateName']
              </li>
              <li>
                Now everytime the store value updates we get the updated value
                from useSelector.
              </li>
            </ul>
          </li>
          <li>
            Dispatch Actions to modify the state.
            <ul>
              <li>
                To dispatch an action we can use <strong>useDispatch</strong>{" "}
                hook.
              </li>
              <li>
                We can store the useDispatch return value in a variable and use
                that variable to dispatch items.
              </li>
              <li>
                the dispatch function will take the actions exported from the
                splice.
              </li>
              <li>
                We can even pass arguments to the actions and these arguments
                will be recived as payload in the reducer of slice.
              </li>
              <li>Please go through the code for better understanding.</li>
            </ul>
          </li>
          <li>
            Example : <input onChange={addItem} />{" "}
            <button
              onClick={() => {
                dispatch(reset());
              }}
            >
              Reset
            </button>
            {items}
          </li>
        </ul>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>We can keep our store in the utils.</li>
          <li>
            While using a selector make sure to subscribe the right portion of
            the store. If we are not doing so it can be a huge performance loss.
          </li>
          <li>
            Whenever we use a selector to fetch some data we are actually
            subscribing to the store. Now if we select the large portion of the
            store then we will get unnecessary subscriptions which are not
            required.
          </li>
          <li>
            The reducer which we use in configStore is one
            <strong>reducer</strong> for the whole app and it can contain
            multiple small reducers.
          </li>
          <li>
            The one we use in slice is <strong>reducers</strong> which contain
            multiple small reducer functions.
          </li>
          <li>While exporting one reducer from the slice.</li>
          <li>
            In older version of redux it was prohibited to modify the state, we
            have to create a new copy of state and modify the new copy.
          </li>
          <li>In redux toolkit we have to mutate the state.</li>
          <li>Redux is mutating the state behind the scenes now.</li>
          <li>
            Redux uses a library called immer behind the scenes to create a new
            immutable state.
          </li>
          <li>
            While working with arrays we to clear it we have to do
            array.length=0 beause in this way we are not changing the reference
            of it.
          </li>
          <li>
            Directly assigning a new value to reference type variables will not
            work because we are not modifying the actual state we are only
            changing the reference. The original state remained as it is.
          </li>
          <li>
            We cannot directly console log the state inside reducer functions it
            will give a proxy object.
          </li>
          <li>
            To view the state we have to use a method current from
            '@reduxjs/toolkit' and we have to pass the state variable in it.
          </li>
          <li>
            We can either mutate the existing state or return the new state.
          </li>
        </ul>
      </Accordian>
      <Accordian header="Interview Questions">
        <ul>
          <li>What are utils.</li>
          <li>
            Why should we always select less the required portion from the store
            while using selectors.
          </li>
          <li>What is immer.</li>
          <li>What is Proxy object.</li>
          <li>What is RTK Query.</li>
        </ul>
      </Accordian>
    </>
  );
};

export default ReduxNotes;
