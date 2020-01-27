import React from "react";
import DeleteOneOfMultipleSelectionsButton from "./DeleteOneOfMultipleSelectionsButton";
import AddOption from "./AddOption";

export default function ConditionalFormElementGenerator({
  type,
  name,
  itemKey,
  placeholder,
  deleteOneOfMultipleSelections,
  checkboxAddOption,
  rows,
  cols,
  ifCheckbox,
  stateKey
}) {
  /*  if(type === false) {
    return null;
  } */
  if (type === "formName") {
    return (
      /*aşağıya app.jsde state olarak attığın flex-direction classını ekle align durumunda*/
      <div
        className={`dropped-elements-inputs ${
          stateKey === itemKey ? "click-border" : null
        }`}
      >
        <label htmlFor={itemKey}>{name || "Name:"}</label>
        <input
          id={itemKey}
          type="text"
          readOnly
          placeholder={placeholder}
        ></input>
      </div>
    );
  }
  if (type === "email") {
    return (
      <div
        className={`dropped-elements-inputs ${
          stateKey === itemKey ? "click-border" : null
        }`}
      >
        <label htmlFor={itemKey}>{name || "E-Mail:"}</label>
        <input
          id={itemKey}
          type="text"
          readOnly
          placeholder={placeholder}
        ></input>
      </div>
    );
  }
  if (type === "checkbox") {
    return (
      <div
        className={`dropped-elements-inputs checkbox ${
          stateKey === itemKey ? "click-border" : null
        }`}
      >
        <label htmlFor={itemKey}>{name || "Question:"}</label>
        {ifCheckbox.map((item, index) => {
          return (
            <div className="flex-start font-12-grey" key={index}>
              <input type="checkbox" value={item.value} readOnly />
              {item.value}{" "}
              <DeleteOneOfMultipleSelectionsButton
                index={index}
                itemKey={itemKey}
                deleteOneOfMultipleSelections={deleteOneOfMultipleSelections}
              />
            </div>
          );
        })}
        <AddOption
          type={type}
          itemKey={itemKey}
          checkboxAddOption={checkboxAddOption}
        />
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div
        className={`textarea ${stateKey === itemKey ? "click-border" : null}`}
      >
        <label htmlFor={itemKey}>{name || "Question:"}</label>
        <br />
        <textarea
          rows={rows}
          cols={cols}
          id={itemKey}
          type="text"
          readOnly
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
}
