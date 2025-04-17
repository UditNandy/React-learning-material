import { useState } from "react";
import "./auto-complete.css";
import { useRef } from "react";
const AutoComplete = () => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [timer, setTimer] = useState(null);
  const [memo, setMemo] = useState({});
  const inputRef = useRef();
  const onInputChange = (e) => {
    let name = e.target?.value;
    if (!name) {
      setCurrentOptions([]);
      return;
    }
    if (name in memo) {
      setCurrentOptions(memo[name]);
      return;
    }
    if (timer) clearTimeout(timer);

    let t = setTimeout(() => {
      callRecipe(name);
    }, 500);

    setTimer(t);
  };

  const setInputValue = (val) => {
    inputRef.current.value = val;
    setCurrentOptions([]);
  };

  const callRecipe = async (name) => {
    const d = await fetch(`https://dummyjson.com/recipes/search?q=${name}`);
    const data = await d.json();
    const list = data.recipes.map((m) => m.name);
    setCurrentOptions(list);
    setMemo((prev) => ({ ...prev, [name]: list }));
  };

  return (
    <>
      <div className="auto-complete-container">
        <input
          ref={inputRef}
          onChange={onInputChange}
          className="auto-complete-input"
        ></input>

        {currentOptions?.length !== 0 && (
          <div className="auto-complete-suggestions">
            {currentOptions.map((opt) => (
              <div
                className="auto-complete-item"
                onClick={() => setInputValue(opt)}
                key={opt}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
      Lorem Ipsum
    </>
  );
};

export default AutoComplete;
