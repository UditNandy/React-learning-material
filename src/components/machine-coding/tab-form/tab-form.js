import { useEffect, useState } from "react";
import Intrests from "./intrests";
import Profile from "./profile";
import Settings from "./settings";
import "./tab-form.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [isValidated, setIsValidate] = useState(false);
  const tabConfig = [
    {
      name: "Profile",
      component: Profile,
      validator: (data) => {
        let error = {};
        if (!data.name) error = { ...error, name: "Name is Required" };
        if (!data.age) error = { ...error, age: "Age is Required" };
        if (!data.email) error = { ...error, email: "Email is Required" };
        setError(error);
        return Object.keys(error).length ? false : true;
      },
    },
    {
      name: "Intrest",
      component: Intrests,
      validator: (data) => {
        let error = {};
        if (!data?.intrest?.length)
          error = { ...error, intrest: "Intrest is Required" };
        setError(error);
        return Object.keys(error).length ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validator: (data) => {
        let error = {};
        if (!data?.theme) error = { ...error, theme: "Theme is Required" };
        setError(error);
        return Object.keys(error).length ? false : true;
      },
    },
  ];
  useEffect(() => {
    let valid = tabConfig[activeTab].validator(data);
    setIsValidate(valid);
  }, [data, activeTab]);
  const ActiveTabComponent = tabConfig[activeTab].component;
  return (
    <>
      <div className="tab-container">
        {tabConfig.map((t, i) => (
          <div className="tab" key={t.name}>
            {t.name}
          </div>
        ))}
      </div>
      <ActiveTabComponent value={data} setValue={setData} error={error} />

      {activeTab > 0 && (
        <button
          onClick={() => {
            setActiveTab(activeTab - 1);
          }}
        >
          Prev
        </button>
      )}
      {activeTab < tabConfig.length - 1 && (
        <button
          disabled={!isValidated}
          onClick={() => {
            setActiveTab(activeTab + 1);
          }}
        >
          Next
        </button>
      )}
      {activeTab === tabConfig.length - 1 && (
        <button
          disabled={!isValidated}
          onClick={() => {
            console.log(data);
          }}
        >
          Submit
        </button>
      )}
    </>
  );
};

export default TabForm;
