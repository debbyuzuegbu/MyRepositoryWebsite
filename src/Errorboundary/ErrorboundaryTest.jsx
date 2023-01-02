import React from 'react';
import {
  ErrorboundText, 
} from './Errorboundary.styles';


function ErrorboundaryTest({personName}) {
    if(personName === "Lot" || personName === "lot") {
        throw new Error("Lot is  not a person")
    } 
  return (
    <ErrorboundText>
        <h4>Name: {personName} is a person</h4>
    </ErrorboundText>
  )
}

export default ErrorboundaryTest