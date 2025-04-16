const Settings = ({ value, setValue }) => {
  const updateValue = (e, name) => {
    setValue((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const isChecked = (v) => {
    return v === value["theme"];
  };
  return (
    <>
      <input
        type="radio"
        name="theme"
        value="light"
        checked={isChecked("light")}
        onChange={(e) => {
          updateValue(e, "theme");
        }}
      />{" "}
      Light
      <input
        type="radio"
        name="theme"
        value="dark"
        checked={isChecked("dark")}
        onChange={(e) => {
          updateValue(e, "theme");
        }}
      />{" "}
      Dark
    </>
  );
};

export default Settings;
