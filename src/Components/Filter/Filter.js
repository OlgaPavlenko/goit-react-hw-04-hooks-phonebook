const Filter = ({ onFilterChanged }) => {
  const handleFilterChanged = e => {
    const value = e.currentTarget.value;
    onFilterChanged(value);
  };

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleFilterChanged}></input>
    </label>
  );
};

export default Filter;
