import React, { Component } from "react";
import IsRequired from './IsRequired'

export default class CustomizeSection extends Component {
  state = {
    inputValue: this.props.style.name,
    placeholderValue: this.props.style.placeholder,
    checkboxOption: "",
    textarea:{rows: this.props.style.textarea.rows, cols: this.props.style.textarea.cols},
    maxLength:this.props.style.maxLength
  };

  handleInput = e => {
    this.setState({ inputValue: e.target.value }, () =>
      this.props.styleCustomize(this.props.itemKey, this.state.inputValue)
    );
  };

  handlePlaceholder = e => {
    this.setState({ placeholderValue: e.target.value }, () =>
      this.props.stylePlaceholder(
        this.props.itemKey,
        this.state.placeholderValue
      )
    );
  };

  handleCheckbox = (e, index) => {
    this.setState({ checkboxOption: e.target.value }, () =>
      this.props.styleCheckbox(this.props.itemKey, this.state.checkboxOption, index )
    );
  };

  handleTextareaRows = (e) => {
    this.setState({ textarea: {rows: e.target.value} }, () =>
      this.props.changeRowValue(this.props.itemKey, this.state.textarea.rows)
    );
  }

  handleTextareaCols = (e) => {
    this.setState({ textarea: {cols: e.target.value} }, () =>
      this.props.changeColValue(this.props.itemKey, this.state.textarea.cols)
    );
  }

  handleMaxLength = (e) => {
    this.setState({ maxLength: e.target.value }, () =>
      this.props.setMaxLength(this.props.itemKey, this.state.maxLength)
    );
  }

  render() {
    if (
      this.props.type === "formName" &&
      this.props.itemKey === this.props.itemKey2
    ) {
      return (
        <div className="customize-section">
          Title
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.handleInput(e)}
          />
          Placeholder
          <input
            type="text"
            value={this.state.placeholderValue}
            onChange={e => this.handlePlaceholder(e)}
          />
          <IsRequired handleRequiredState={this.props.handleRequiredState} itemKey={this.props.itemKey}/>
          <label>Max Char Length</label><input value={this.state.maxLength} type="number" onChange={e => this.handleMaxLength(e)}/>
          <div>MAX CHARACTER</div>
          <div> - ALIGN SECTION</div>
        </div>
      );
    }
    if (
      this.props.type === "email" &&
      this.props.itemKey === this.props.itemKey2
    ) {
      return (
        <div className="customize-section">
          Title
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.handleInput(e)}
          />
          Placeholder
          <input
            type="text"
            value={this.state.placeholderValue}
            onChange={e => this.handlePlaceholder(e)}
          />
          <IsRequired handleRequiredState={this.props.handleRequiredState} itemKey={this.props.itemKey}/>
          <label>Max Char Length</label><input value={this.state.maxLength} type="number" onChange={e => this.handleMaxLength(e)}/>

          <div>MAX CHARACTER</div>
          <div> - ALIGN SECTION</div>
        </div>
        
      );
    }
    if (
      this.props.type === "checkbox" &&
      this.props.itemKey === this.props.itemKey2
    ) {
      return (
        <div className="customize-section">
          {this.props.style.ifCheckbox.map((item, index) => {
            return (
              <div key={index}>
                <label>{index + 1}.</label>
                <input
                  value={item.value}
                  onChange={e => this.handleCheckbox(e, index)}
                />
              </div>
            );
          })}
                    <IsRequired handleRequiredState={this.props.handleRequiredState} itemKey={this.props.itemKey}/>

        </div>
      );
    }
    if (
      this.props.type === "textarea" &&
      this.props.itemKey === this.props.itemKey2
    ) {
      return (
        <div className="customize-section">
          Title
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.handleInput(e)}
          />
          Placeholder
          <input
            type="text"
            value={this.state.placeholderValue}
            onChange={e => this.handlePlaceholder(e)}
          />
          Rows <input type="number" value={this.props.style.textarea.rows} onChange={e => this.handleTextareaRows(e)}/>
          Columns <input type="number" value={this.props.style.textarea.cols} onChange={e => this.handleTextareaCols(e)}/>
          <label>Max Char Length</label><input value={this.state.maxLength} type="number" onChange={e => this.handleMaxLength(e)}/>

        </div>
      );
    }
  }
}
