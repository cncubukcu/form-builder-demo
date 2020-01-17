import React, { Component } from "react";
import AddOption from "./AddOption";
import DeleteOneOfMultipleSelectionsButton from "./DeleteOneOfMultipleSelectionsButton";
import SettingsOpenClose from "./SettingsOpenClose";

export default class FormElementGenerator extends Component {
 
  render() {
    const { name, placeholder } = this.props.style;
    const { style } = this.props;
    if (this.props.type === "formName") {
      return (
        <div onClick={() => this.props.typeHandler(this.props.type, this.props.itemKey)}>
          <label htmlFor={this.props.itemKey}>{name || "Name:"}</label>
          <input
            id={this.props.itemKey}
            type="text"
            readOnly
            placeholder={placeholder}
          ></input>
          {this.props.stateKey === this.props.itemKey ? <SettingsOpenClose
            type={this.props.type}
            itemKey={this.props.itemKey}
            typeHandler={this.props.typeHandler}
            handleElementClicked={this.props.handleElementClicked}
          /> : null }
          
        </div>
      );
    }
    if (this.props.type === "email") {
      return (
        <div onClick={() => this.props.typeHandler(this.props.type, this.props.itemKey)}>
          <label htmlFor={this.props.itemKey}>{name || "Email:"}</label>
          <input
            id={this.props.itemKey}
            type="text"
            readOnly
            placeholder={placeholder}
          ></input>
          {this.props.stateKey === this.props.itemKey ? <SettingsOpenClose
            type={this.props.type}
            itemKey={this.props.itemKey}
            typeHandler={this.props.typeHandler}
            handleElementClicked={this.props.handleElementClicked}
          /> : null }
        </div>
      );
    }
    if (this.props.type === "checkbox") {
      return (
        /* <div onClick={() => this.props.typeHandler(this.props.type, this.props.itemKey)}>
          <label htmlFor={this.props.itemKey}>{name ? name : 'Email:'}</label>
          <input id={this.props.itemKey} type="text" readOnly placeholder={placeholder}></input>
        </div> */
        <div onClick={() => this.props.typeHandler(this.props.type, this.props.itemKey)}>
    <label htmlFor={this.props.itemKey}>{name || "Question"}</label>
          {style.ifCheckbox.map((item, index) => {
            return (
              <div key={index}>
                <input type="checkbox" value={item.value} />
                {item.value}{" "}
                <DeleteOneOfMultipleSelectionsButton
                  index={index}
                  itemKey={this.props.itemKey}
                  deleteOneOfMultipleSelections={
                    this.props.deleteOneOfMultipleSelections
                  }
                />
              </div>
            );
          })}
          {this.props.stateKey === this.props.itemKey ? <SettingsOpenClose
            type={this.props.type}
            itemKey={this.props.itemKey}
            typeHandler={this.props.typeHandler}
            handleElementClicked={this.props.handleElementClicked}
          /> : null }

          <AddOption
            type={this.props.type}
            itemKey={this.props.itemKey}
            checkboxAddOption={this.props.checkboxAddOption}
          />
        </div>
      );
    }
    if (this.props.type === "textarea") {
      return (
        <div onClick={() => this.props.typeHandler(this.props.type, this.props.itemKey)}>
          <label htmlFor={this.props.itemKey}>{name  || "TextArea"}</label>
          <textarea
            rows={style.textarea.rows}
            cols={style.textarea.cols}
            id={this.props.itemKey}
            type="text"
            readOnly
            placeholder={placeholder}
          ></textarea>
          {this.props.stateKey === this.props.itemKey ? <SettingsOpenClose
          handleElementClicked={this.props.handleElementClicked}
            type={this.props.type}
            itemKey={this.props.itemKey}
            typeHandler={this.props.typeHandler}
          /> : null }
        </div>
      );
    }
  }
}
