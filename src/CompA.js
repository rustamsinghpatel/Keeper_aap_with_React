import { useState } from "react";

function CompA() {
  const [name, setName] = useState("rohan");
  const HandleForm = (e) => {
    e.preventDefult();
    console.log(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={HandleForm}>
        <label>Enter name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CompA;
