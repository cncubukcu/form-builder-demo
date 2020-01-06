import React from 'react'

export default function IsRequired({itemKey, handleRequiredState}) {
  return (
    <div style={{width: '100px', height: '20px', backgroundColor:'blue'}} onClick={() => handleRequiredState(itemKey)}>
      Required?
    </div>
  )
}
