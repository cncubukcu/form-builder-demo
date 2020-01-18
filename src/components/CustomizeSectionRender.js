import React from 'react'
import IsRequired from './IsRequired';

export default function CustomizeSectionRender(props) {
  if (
    props.type === "formName" &&
    props.itemKey === props.itemKey2
  ) {
    return (
      <div className="customize-section">
        Title
        <input
          type="text"
          value={props.inputValue}
          onChange={e => props.handleInput(e)}
        />
        Placeholder
        <input
          type="text"
          value={props.placeholderValue}
          onChange={e => props.handlePlaceholder(e)}
        />
        <IsRequired
          handleRequiredState={props.handleRequiredState}
          itemKey={props.itemKey}
        />
        <label>Max Char Length</label>
        <input
          value={props.maxLength}
          type="number"
          onChange={e => props.handleMaxLength(e)}
        />
        <div>MAX CHARACTER</div>
        <div> - ALIGN SECTION</div>
      </div>
    );
  }
  if (
    props.type === "email" &&
    props.itemKey === props.itemKey2
  ) {
    return (
      <div className="customize-section">
        Title
        <input
          type="text"
          value={props.inputValue}
          onChange={e => props.handleInput(e)}
        />
        Placeholder
        <input
          type="text"
          value={props.placeholderValue}
          onChange={e => props.handlePlaceholder(e)}
        />
        <IsRequired
          handleRequiredState={props.handleRequiredState}
          itemKey={props.itemKey}
        />
        <label>Max Char Length</label>
        <input
          value={props.maxLength}
          type="number"
          onChange={e => props.handleMaxLength(e)}
        />
        <div>MAX CHARACTER</div>
        <div> - ALIGN SECTION</div>
      </div>
    );
  }
  if (
    props.type === "checkbox" &&
    props.itemKey === props.itemKey2
  ) {
    return (
      <div className="customize-section">
         <label>Title</label>
        <input
          type="text"
          value={props.inputValue}
          onChange={e => props.handleInput(e)}
        />
        {props.style.ifCheckbox.map((item, index) => {
          return (
            <div key={index}>
              <label>Option {index + 1}.</label>
              <input
                value={item.value}
                onChange={e => props.handleCheckbox(e, index)}
              />
            </div>
          );
        })}
        <IsRequired
          handleRequiredState={props.handleRequiredState}
          itemKey={props.itemKey}
        />
      </div>
    );
  }
  if (
    props.type === "textarea" &&
    props.itemKey === props.itemKey2
  ) {
    return (
      <div className="customize-section">
        Title
        <input
          type="text"
          value={props.inputValue}
          onChange={e => props.handleInput(e)}
        />
        Placeholder
        <input
          type="text"
          value={props.placeholderValue}
          onChange={e => props.handlePlaceholder(e)}
        />
        Rows{" "}
        <input
          type="number"
          value={props.style.textarea.rows}
          onChange={e => props.handleTextareaRows(e)}
        />
        Columns{" "}
        <input
          type="number"
          value={props.style.textarea.cols}
          onChange={e => props.handleTextareaCols(e)}
        />
        <label>Max Char Length</label>
        <input
          value={props.maxLength}
          type="number"
          onChange={e => props.handleMaxLength(e)}
        />
      </div>
    );
  }
}
