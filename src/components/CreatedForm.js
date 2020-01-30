import React, { Component } from "react";
import CreatedFormRender from "./CreatedFormRender";
import Header from "./Header";

export default class CreatedForm extends Component {
  state = { inputValue: "", formResult: false };

  onSubmit = e => {
    e.preventDefault();
    let results = {};
    this.props.formElements.map((item, index) => {
      if (item.type === "checkbox") {
        return (results = {
          ...results,
          [index]: {
            [item.style.name || item.defaultName]: item.style.ifCheckbox
          }
        });
      } else {
        return (results = {
          ...results,
          [index]: { [item.style.name || item.defaultName]: item.value }
        });
      }
    });
    alert(JSON.stringify(results));
  };

  handleInput = (e, itemKey) => {
    this.setState({ inputValue: e.target.value }, () =>
      this.props.setValue(itemKey, this.state.inputValue)
    );
  };

  render() {
    return (
      <div className="main-container">
        <Header name="FORMOD" text="Form Builder" />
        <CreatedFormRender
          formElements={this.props.formElements}
          handleInput={this.handleInput}
          onSubmit={this.onSubmit}
          createForm={this.props.createForm}
          handleCheck={this.props.handleCheck}
          ColorPickerForFormBackground={this.props.ColorPickerForFormBackground}
          ColorPickerForFormColor={this.props.ColorPickerForFormColor}
        />
      </div>
    );
  }
}
