import { useState } from "react";
import "./progress-bar.css";
import { useEffect } from "react";
import { useRef } from "react";
const Bar = ({ percent = 0 }) => {
  return (
    <>
      <div className="progress-bar-container">
        <div style={{ width: `${percent}%` }} className="progress"></div>
      </div>
    </>
  );
};

const ProgressBar = () => {
  const [percent, setPercent] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          console.log("Being called");
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <>
      <Bar percent={percent} />
    </>
  );
};

export default ProgressBar;
