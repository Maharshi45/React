import { useState } from "react";

function App() {

  let [name, setName] = useState("");
  let [isManager, setManager] = useState(false);
  let [role, setRole] = useState("Employee");

  const handleInput = e => {
    setName(name = e.target.value)
  };

  const handleCheckBox = e => {
    setManager(isManager = e.target.checked)
    setRole(role = isManager ? "Manager" : "Employee");
  };

  return (
    <>
      <h2>State Example</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleInput} />
      </div>
      <div>
        <label>Manager</label>
        <input type="checkbox" value={isManager} onChange={handleCheckBox} />
      </div>
      <div>
        {name} is {role}
      </div>
    </>
  );
}

export default App;
