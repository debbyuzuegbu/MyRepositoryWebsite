import React, {useState} from "react";
import ErrorboundaryTest from "./ErrorboundaryTest";

function Errorbound() {
    const [personName, setPersonName] = useState("")
  return (
    <div style={{padding:"5em"}}>
      <label style={{fontSize: "30px"}}>Welcome:</label>
      <p>
        <input
          onChange={(e) => setPersonName(e.target.value)}
          name="person"
          type="text"
          value={personName}
        ></input>
      </p>
      <p>kindly type Lot to see the effect of the error boundary</p>
      <p>Any other name typed would display below</p>
      <ErrorboundaryTest personName={personName} />
    </div>
  );
}

export default Errorbound;
