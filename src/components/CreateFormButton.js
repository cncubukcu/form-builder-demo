import React from 'react'

export default function CreateFormButton({createForm}) {
  return (
    <div>
      <button onClick={() => createForm()}>Create The Form</button>
    </div>
  )
}
