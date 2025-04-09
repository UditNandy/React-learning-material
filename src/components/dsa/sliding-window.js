import Accordian from "../shared/accordian/accordian";

const SlidingWindow = () => {
  return (
    <>
      <Accordian header={"Intution"}></Accordian>
      <Accordian header={"Question"}>
        <ul>
          <li>Arithmetic Slices(Leetcode - 413)</li>
        </ul>
      </Accordian>
    </>
  );
};

export default SlidingWindow;
