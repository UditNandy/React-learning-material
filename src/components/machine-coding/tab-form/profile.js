const Profile = ({ value, setValue, error }) => {
  const updateValue = (e) => {
    setValue((prev) => {
      let name = e.target.name;
      return { ...prev, [name]: e.target.value };
    });
  };
  return (
    <>
      <div>
        <label>Name</label>
        <input value={value?.name} name="name" onChange={updateValue} />
        {error?.name && <div>{error?.name}</div>}
      </div>
      <div>
        <label>Age</label>
        <input value={value?.age} name="age" onChange={updateValue} />
        {error?.age && <div>{error?.age}</div>}
      </div>
      <div>
        <label>Email</label>
        <input value={value?.email} name="email" onChange={updateValue} />
        {error?.email && <div>{error?.email}</div>}
      </div>
    </>
  );
};

export default Profile;
