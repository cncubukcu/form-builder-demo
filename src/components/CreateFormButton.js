import React from "react";

export default function CreateFormButton({ createForm }) {
  return (
    <div className="create-form-button-container">
      <button onClick={() => createForm(true)}>Create</button>
    </div>
  );
}
