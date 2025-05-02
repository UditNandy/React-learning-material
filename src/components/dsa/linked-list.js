import Accordian from "../shared/accordian/accordian";

const LinkedList = () => {
  return (
    <>
      <Accordian header="Easy">
        <ol>
          <li>Reverse a linked list (iterative and recursion)</li>
          <li>Delete Node in a Linked List (Leetcode 237)</li>
        </ol>
      </Accordian>
      <Accordian header="Medium">
        <ol>
          <li>Reverse Nodes in k-Group</li>
        </ol>
      </Accordian>
    </>
  );
};

export default LinkedList;
