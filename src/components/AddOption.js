import React from 'react'

export default function AddOption({type, itemKey, checkboxAddOption}) {
  if(type === 'checkbox'){
  return (
    <div>
      <button onClick={() =>  checkboxAddOption(itemKey)}>Add an Option</button>
    </div>
  )
  }
}
