import React from "react";
import IsRequired from "./IsRequired";

export default function CustomizeSectionDefaultSettingsTab(props) {
  if (props.type === "formName") {
    return (
      <div className="customize-section-elements">
        <div>
          <label>Your Question</label>
          <input
            type="text"
            value={props.inputValue}
            onChange={e => props.handleInput(e)}
          />
        </div>
        <div>
          <label>Placeholder</label>
          <input
            type="text"
            value={props.placeholderValue}
            onChange={e => props.handlePlaceholder(e)}
          />
        </div>
        <div>
          <IsRequired
            handleRequiredState={props.handleRequiredState}
            itemKey={props.itemKey}
            isRequired={props.style.required}
          />
        </div>
        <div>
          <label>Maximum Character</label>
          <input
            value={props.maxLength}
            type="number"
            onChange={e => props.handleMaxLength(e)}
          />
        </div>
      </div>
    );
  }
  if (props.type === "email") {
    return (
      <div className="customize-section-elements">
        <div>
          <label>Your Question</label>
          <input
            type="text"
            value={props.inputValue}
            onChange={e => props.handleInput(e)}
          />
        </div>
        <div>
          <label>Placeholder</label>
          <input
            type="text"
            value={props.placeholderValue}
            onChange={e => props.handlePlaceholder(e)}
          />
        </div>
        <div>
          <IsRequired
            handleRequiredState={props.handleRequiredState}
            itemKey={props.itemKey}
            isRequired={props.style.required}
          />
        </div>
        <div>
          <label>Maximum Character</label>
          <input
            value={props.maxLength}
            type="number"
            onChange={e => props.handleMaxLength(e)}
          />
        </div>
      </div>
    );
  }
  if (props.type === "checkbox") {
    return (
      <div className="customize-section-elements">
        <div>
          <label>Your Question</label>
          <input
            type="text"
            value={props.inputValue}
            onChange={e => props.handleInput(e)}
          />
        </div>
        {props.style.ifCheckbox.map((item, index) => {
          return (
            <div key={index} className="customize-section-checkbox-options">
              <label>Option {index + 1}.</label>
              <input
                value={item.value}
                onChange={e => props.handleCheckbox(e, index)}
              />
            </div>
          );
        })}
      </div>
    );
  }
  if (props.type === "textarea") {
    return (
      <div className="customize-section-elements">
        <div>
          <label>Your Question</label>
          <input
            type="text"
            value={props.inputValue}
            onChange={e => props.handleInput(e)}
          />
        </div>
        <div>
          {" "}
          <label>Placeholder</label>
          <input
            type="text"
            value={props.placeholderValue}
            onChange={e => props.handlePlaceholder(e)}
          />
        </div>
        <div>
          <label>Rows</label>{" "}
          <input
            type="number"
            value={props.style.textarea.rows}
            onChange={e => props.handleTextareaRows(e)}
          />
        </div>
        <div>
          <label>Columns</label>{" "}
          <input
            type="number"
            value={props.style.textarea.cols}
            onChange={e => props.handleTextareaCols(e)}
          />
        </div>
        <div>
          <label>Maximum Character</label>
          <input
            value={props.maxLength}
            type="number"
            onChange={e => props.handleMaxLength(e)}
          />
        </div>
      </div>
    );
  }
}
