import React from "react";

const DeleteButton = ({ deleteForm, itemKey }) => {
  return <button onClick={() => deleteForm(itemKey)}>DELETE</button>;
};

export default DeleteButton;
