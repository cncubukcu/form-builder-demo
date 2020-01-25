import React from "react";
import deleteSvg from '../assets/delete.svg'
import IconDeleteButton from './Icons/IconDeleteButton'

const DeleteButton = ({ deleteForm, itemKey }) => {
  return <div className="form-element-delete"  onClick={() => deleteForm(itemKey)}>
    < IconDeleteButton/>
  </div>;
};

export default DeleteButton;
