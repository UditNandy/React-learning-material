import { useState } from "react";
import "./accordian.css";

const Accordian = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="accordian-header">
        <div className="accordian-heading">{header}</div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <img src="./assets/icons/up-arrow.svg" alt="^" />
          ) : (
            <img src="./assets/icons/down-arrow.svg" alt="v" />
          )}
        </div>
      </div>
      <div className="accordian-content">{isOpen && <div>{children}</div>}</div>
    </div>
  );
};

export default Accordian;
