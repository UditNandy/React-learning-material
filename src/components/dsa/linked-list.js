import Accordian from "../shared/accordian/accordian";

const LinkedList = () => {
  return (
    <>
      <Accordian header="Easy">
        <ol>
          <li>Reverse a linked list (iterative and recursion) ✅</li>
          <li>Delete Node in a Linked List (Leetcode 237) ✅</li>
          <li>Middle of the Linked List ✅</li>
          <li>Detect a loop in LL ✅</li>
          <li>Linked List Cycle II (Find the starting node of the loop) ✅</li>
          <li>
            Find length of Loop ✅
            <ul>
              <li>
                <strong>Approach 1</strong> Find the start or the point where
                fast and slow collided of the loop and then iterate through the
                loop once.
              </li>
              <li>
                <strong>Approach 2</strong> : Keep a hash which will keep a
                track of all the visited nodes and their pos.
              </li>
            </ul>
          </li>
          <li>Palindrome Linked List ✅</li>
          <li>Remove Nth Node From End of List ✅</li>
          <li>Delete the Middle Node of a Linked List ✅</li>
          <li>Sort a linked list of 0s, 1s and 2s ✅</li>
        </ol>
      </Accordian>
      <Accordian header="Medium">
        <ol>
          <li>Reverse Nodes in k-Group ✅</li>
          <li>Swap Nodes in Pairs ✅</li>
          <li>
            Merge k Sorted Lists ✅ : Use priority queue for better complexity.
          </li>
        </ol>
      </Accordian>
    </>
  );
};

export default LinkedList;
