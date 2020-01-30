import React, { Component } from "react";
import SettingsOpenClose from "./SettingsOpenClose";
import ConditionalFormElementGenerator from "./ConditionalFormElementGenerator";

export default class FormElementGenerator extends Component {
  render() {
    const { name, placeholder } = this.props.style;
    const { style, type, itemKey, stateKey } = this.props;
    return (
      <div onClick={() => this.props.typeHandler(type, itemKey)}>
        <ConditionalFormElementGenerator
          name={name}
          type={type}
          itemKey={itemKey}
          placeholder={placeholder}
          deleteOneOfMultipleSelections={
            this.props.deleteOneOfMultipleSelections
          }
          cols={style.textarea.cols}
          rows={style.textarea.rows}
          ifCheckbox={style.ifCheckbox}
          checkboxAddOption={this.props.checkboxAddOption}
          stateKey={stateKey}
        />
        {stateKey === itemKey ? (
          <SettingsOpenClose
            type={type}
            itemKey={itemKey}
            typeHandler={this.props.typeHandler}
            handleElementClicked={this.props.handleElementClicked}
          />
        ) : null}
      </div>
    );
  }
}

