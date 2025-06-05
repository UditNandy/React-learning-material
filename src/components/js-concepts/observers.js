import { useEffect, useRef, useState } from "react";
import Accordian from "../shared/accordian/accordian";

const Observers = () => {
  const arr = new Array(10).fill(null).map((_, i) => i);
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const [currentIntersectingElement, setCurrentIntersectingElement] = useState(
    new Set()
  );
  useEffect(() => {
    if (isAccordianOpen) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentIntersectingElement((prev) => {
                prev.add(entry.target.innerHTML);
                return new Set(prev);
              });
            } else {
              setCurrentIntersectingElement((prev) => {
                prev.delete(entry.target.innerHTML);
                return new Set(prev);
              });
            }
          });
        },
        { root: containerRef.current }
      );

      elementRef.current.forEach((e) => {
        observer.observe(e);
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [isAccordianOpen]);
  useEffect(() => {}, [currentIntersectingElement]);
  return (
    <>
      <Accordian header="Intersection Observer" checkOpen={setIsAccordianOpen}>
        <ul>
          <li>
            It is a web API that allows us to asynchronously observe changes in
            the intersection of a target element with a root element or the
            viewport.
          </li>
          <li>
            In simple terms, it lets us know when an element enters or leaves
            the visible area of a webpage (or another container).
          </li>
        </ul>
        <span>Current visible elements : </span>
        {Array.from(currentIntersectingElement)?.map((v) => (
          <span style={{ display: "inline-block", marginRight: "10px" }}>
            {v}
          </span>
        ))}
        <div
          ref={containerRef}
          style={{
            border: "1px solid black",
            height: "300px",
            width: "100%",
            overflowY: "scroll",
          }}
        >
          {arr.map((_, i) => (
            <div
              key={i}
              style={{
                border: "1px solid black",
                height: "90px",
                margin: "20px",
                position: "relative",
              }}
            >
              <div
                ref={(r) => {
                  if (elementRef.current.length % arr.length === 0)
                    elementRef.current = [];
                  if (r) elementRef.current.push(r);
                }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: 600,
                }}
              >
                Div:{i + 1}
              </div>
            </div>
          ))}
        </div>
      </Accordian>
    </>
  );
};

export default Observers;
