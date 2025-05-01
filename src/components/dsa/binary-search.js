import Accordian from "../shared/accordian/accordian";

const BinarySearch = () => {
  return (
    <>
      <Accordian header="Easy">
        <ol>
          <li>Interscrtion of 2 array.</li>
          <li>Minimum Common Value.</li>
          <li>Lower and Upper bound.</li>
          <li>Search Insert Position.</li>
          <li>Search in a sorted rotated 1 and 2.</li>
          <li>Peak element.</li>
          <li>Single element in a sorted array.</li>
          <li>
            Element Occuring more then 25%.
            <ul>
              <li>
                <strong>Approach 1 </strong>: As the array is sorted we can find{" "}
                <strong>target = arr.length/4</strong> and we need to check if
                <strong> arr[i] === arr[i+target]</strong>
              </li>
              <li>
                <strong>Approach 2</strong> : Here the idea is what are the
                indices where the element can actually lie. Its{" "}
                <strong>n/4 , n/2 and 3*(n/4)</strong>. We can now apply binary
                search to get the ans.
              </li>
            </ul>
          </li>
          <li>Count Negative Numbers in a Sorted Matrix</li>
        </ol>
      </Accordian>
      <Accordian header="Medium">
        <ol>
          <li>Koko eating bananas.</li>
          <li>Special Array With X Elements Greater Than or Equal X</li>
          <li>Find the Duplicate Number (Leetcode - 287)</li>
          <li>Minimum Time to Repair Cars</li>
          <li>Minimum Limit of Balls in a Bag</li>
          <li>
            Shortest Subarray to be Removed to Make Array Sorted (Similar to
            Binary Search but not exactly, more of a 2 pointer approach.)
          </li>
          <li>Minimized Maximum of Products Distributed to Any Store</li>
          <li>Most Beautiful Item for Each Query</li>
        </ol>
      </Accordian>
      <Accordian header="Matrix Search">
        <ul>
          <li>Search in a 2d Matrix 1 and 2.</li>
        </ul>
      </Accordian>
    </>
  );
};

export default BinarySearch;
