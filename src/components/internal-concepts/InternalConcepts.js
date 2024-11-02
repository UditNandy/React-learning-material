export const InternaclConcepts = () => {
  return (
    <>
      <h2>Internal Concepts</h2>
      <div className="wrapper">
        <h3>Virtual DOM</h3>
        <ul>
          <li>
            React is responsible for managing the components and their states
            and it re evaluates a component whenever the state changes.
          </li>
          <li>
            React also compares and checks th difference between the previous
            and the current states and pass the information to the React DOM.
          </li>
          <li>React is not responsible for rendering something in the DOM.</li>
          <li>
            React handovers the information about the components and their
            states to React DOM, which is the interface to the web.
          </li>
          <li>
            React DOM is responsible for rendering something on the screen.
          </li>
          <li>
            React will always check if some state got changed or not and if
            something got chaged React will inform this to React DOM and React
            DOM will bring these changes to the screen.
          </li>
          <li>
            If React would had the direct access to the actual DOM then in case
            of single change the entire DOM would get rerendered which is quite
            costly.
          </li>
          <li>
            To overcome this React modifies the virtual DOM (React DOM) and this
            virtual DOM gets compared with the real DOM. Whereever there is a
            difference that particular part/node of the DOM will get replaced.
          </li>
          <li>
            The child component by default re renders whenever the parent
            component changes. Even if there is no change in props of child
            components.
          </li>
          <li>
            To overcome this we can wrap the child component with memo during
            exporting.
          </li>
          <li>
            memo will not render the child component if the props does not
            changes.
          </li>
          <li>
            But if we are passing a reference type like array,objects,etc or any
            function then the child component will get rendered even if the
            props does not changes.
          </li>
          <li>
            The main reason behind this is even if the value does not changes
            every time the parent component renders the memory location does
            change and due to this even if the value dont change the memory
            location change.
          </li>
        </ul>
      </div>
    </>
  );
};
