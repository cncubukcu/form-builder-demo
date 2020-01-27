import React from "react";
import IconDeleteButton from "./Icons/IconDeleteButton";

const DeleteButton = ({ deleteForm, itemKey }) => {
  return (
    <div className="form-element-delete" onClick={() => deleteForm(itemKey)}>
      <IconDeleteButton />
    </div>
  );
};

export default DeleteButton;
