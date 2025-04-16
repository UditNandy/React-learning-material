import "./checkbox.css";
const CheckBox = ({ chk, originalValue, value, setValue }) => {
  const checkAllChildren = (value, boolValue) => {
    value["checked"] = boolValue;
    value.children.forEach((v) => {
      checkAllChildren(v, boolValue);
    });
  };

  const updateValue = (val) => {
    value["checked"] = val.target.checked;
    checkAllChildren(value, value["checked"]);
    setValue(structuredClone(originalValue));
  };

  return (
    <div>
      {value.checked}
      <input
        type="checkbox"
        checked={value.checked}
        value={value.name}
        onChange={(e) => {
          updateValue(e);
        }}
      />
      {value.name}
      <div className="checkbox-children">
        {value.children.map((c, i) => (
          <CheckBox
            key={c.name}
            originalValue={originalValue}
            value={value.children[i]}
            setValue={setValue}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
