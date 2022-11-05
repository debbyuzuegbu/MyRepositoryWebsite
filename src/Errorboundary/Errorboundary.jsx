import React, {useState} from "react";
import ErrorboundaryTest from "./ErrorboundaryTest";

function Errorbound() {
    const [personName, setPersonName] = useState("")
  return (
    <div>
      <label>Name:</label>
      <p>
        <input
          onChange={(e) => setPersonName(e.target.value)}
          name="person"
          type="text"
          value={personName}
        ></input>
      </p>
      <ErrorboundaryTest personName={personName} />
    </div>
  );
}

export default Errorbound;
