import { useEffect, useState } from "react";
import "./accordian.css";

export const Accordian = ({ header, children, checkOpen = (val) => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    checkOpen(isOpen);
  }, [isOpen]);

  return (
    <div className="wrapper">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="accordian-header"
      >
        <div className="accordian-heading">{header}</div>
        <div>
          {isOpen ? (
            <img src="./up-arrow.svg" alt="^" />
          ) : (
            <img src="./down-arrow.svg" alt="v" />
          )}
        </div>
      </div>
      <div className="accordian-content">{isOpen && <div>{children}</div>}</div>
    </div>
  );
};

export default Accordian;
