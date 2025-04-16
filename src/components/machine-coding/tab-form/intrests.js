const Intrests = ({ value, setValue, error }) => {
  const updateValue = (e, name) => {
    let val = value[name] || [];

    if (val.includes(e.target.value)) {
      val = val.filter((v) => v !== e.target.value);
    } else {
      val.push(e.target.value);
    }
    setValue((prev) => ({ ...prev, [name]: val }));
  };

  const isChecked = (v, name) => {
    if (!value[name]) return false;
    return value[name]?.includes(v);
  };

  return (
    <>
      <input
        type="checkbox"
        value="javascript"
        checked={isChecked("javascript", "intrest")}
        onChange={(e) => {
          updateValue(e, "intrest");
        }}
      />
      Javascript
      <input
        type="checkbox"
        value="typescript"
        checked={isChecked("typescript", "intrest")}
        onChange={(e) => {
          updateValue(e, "intrest");
        }}
      />
      TypeScript
      <input
        type="checkbox"
        value="java"
        checked={isChecked("java", "intrest")}
        onChange={(e) => {
          updateValue(e, "intrest");
        }}
      />
      Java
      {error?.intrest && <div>{error?.intrest}</div>}
    </>
  );
};

export default Intrests;
