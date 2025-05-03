import Accordian from "../shared/accordian/accordian";

const Contest = () => {
  return (
    <>
      <Accordian header="Matrix">
        <ol>
          <li>Count Covered Buildings (Leetcode)</li>
        </ol>
      </Accordian>

      <Accordian header="Graph">
        <ol>
          <li>Path Existence Queries in a Graph I (Leetcode)</li>
        </ol>
      </Accordian>

      <Accordian header="Some Intutions">
        <ul>
          <li>
            <strong>Grouping Teching in normal array</strong> : In some
            questions we can keep a array where we can specify that in which
            group the ith element comes based on some logic and iterating
            through the array.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Contest;
