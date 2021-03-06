import React from "react";
import IconAddOption from "./Icons/IconAddOption";

export default function AddOption({ type, itemKey, checkboxAddOption }) {
  if (type === "checkbox") {
    return (
      <div className="add-option-button">
        <IconAddOption />{" "}
        <button onClick={() => checkboxAddOption(itemKey)}>
          Add New Option
        </button>
      </div>
    );
  }
}
