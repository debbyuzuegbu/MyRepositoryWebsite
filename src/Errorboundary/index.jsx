import React, {useState} from "react";
import ErrorboundaryTest from "./ErrorboundaryTest";
import {
  ErrorBoundTitle,
  ErrorBoundLabel,
  Input
} from './Errorboundary.styles';


function Errorbound() {
    const [personName, setPersonName] = useState("")
  return (
    <ErrorBoundTitle>
      <div className="errorBoundContent">
      <ErrorBoundLabel>Welcome:</ErrorBoundLabel>
      <p>
        <Input
          onChange={(e) => setPersonName(e.target.value)}
          name="person"
          type="text"
          placeholder="insert a name"
          value={personName}
        />
      </p>
      <p>kindly type Lot to see the effect of the error boundary</p>
      <p>Any other name typed would display below</p>
      <ErrorboundaryTest personName={personName} />
      </div>
    </ErrorBoundTitle>
  );
}

export default Errorbound;
