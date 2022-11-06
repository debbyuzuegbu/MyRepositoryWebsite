import React from 'react'

function ErrorboundaryTest({personName}) {
    if(personName === "Lot" || personName === "lot") {
        throw new Error("Lot is  not a person")
    } 
  return (
    <div>
        <h3>Name: {personName} is a person</h3>
    </div>
  )
}

export default ErrorboundaryTest