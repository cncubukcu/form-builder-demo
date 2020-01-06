import React from 'react'

export default function ResetButton({resetForm}) {
  return (
    <div>
      <button onClick={() => resetForm()}>Reset Form</button>
    </div>
  )
}
