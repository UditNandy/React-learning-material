import { useEffect, useState } from "react";
import CheckBox from "./checkbox";

const NestedCheckbox = () => {
  const json = [
    {
      name: "Parent 1",
      children: [
        {
          name: "Parent 8",
          children: [],
        },
        {
          name: "Parent 2",
          children: [
            {
              name: "Parent 4",
              children: [],
            },
            {
              name: "Parent 5",
              children: [],
            },
            {
              name: "Parent 7",
              children: [],
            },
          ],
        },
        {
          name: "Parent 3",
          children: [],
        },
      ],
    },
    {
      name: "Parent 6",
      children: [],
    },
  ];
  const [value, setValue] = useState(null);
  const setChangeDetector = useState(0)[1];

  const setDefaultValue = (val, arr) => {
    arr.push({ name: val.name, checked: false, children: [] });
    val.children.forEach((v) => {
      setDefaultValue(v, arr[arr.length - 1].children);
    });
  };

  const parentCheck = (val) => {
    if (!val.children.length) {
      return val.checked;
    }

    let chk = true;
    for (let v of val.children) {
      let temp = parentCheck(v);
      chk = chk && temp;
    }
    val.checked = chk;
    return val.checked;
  };

  useEffect(() => {
    let temp = [];
    json.forEach((v) => {
      setDefaultValue(v, temp);
    });
    setValue(temp);
  }, []);

  useEffect(() => {
    if (value) {
      for (let v of value) {
        parentCheck(v);
      }
    }
    setChangeDetector((prev) => prev + 1);
  }, [value]);

  return (
    <>
      {value &&
        json.map((chk, i) => (
          <CheckBox
            key={chk.name}
            originalValue={value}
            value={value[i]}
            setValue={setValue}
          />
        ))}
    </>
  );
};

export default NestedCheckbox;
