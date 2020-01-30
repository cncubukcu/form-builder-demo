import React, { Component } from "react";
import CustomizeSectionDefaultSettingsTab from "./CustomizeSectionDefaultSettingsTab";
import CustomizeSectionCssSettingsTab from "./CustomizeSectionCssSettingsTab";
import IconCloseButton from "./Icons/IconCloseButton";

export default class CustomizeSection extends Component {
  state = {
    inputValue: this.props.style.name,
    placeholderValue: this.props.style.placeholder,
    checkboxOption: "",
    textarea: {
      rows: this.props.style.textarea.rows,
      cols: this.props.style.textarea.cols
    },
    maxLength: this.props.style.maxLength,
    whichTabIsShown: "CustomizeSectionDefaultSettingsTab"
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
      this.props.styleCheckbox(
        this.props.itemKey,
        this.state.checkboxOption,
        index
      )
    );
  };

  handleTextareaRows = e => {
    this.setState({ textarea: { rows: e.target.value } }, () =>
      this.props.changeRowValue(this.props.itemKey, this.state.textarea.rows)
    );
  };

  handleTextareaCols = e => {
    this.setState({ textarea: { cols: e.target.value } }, () =>
      this.props.changeColValue(this.props.itemKey, this.state.textarea.cols)
    );
  };

  handleMaxLength = e => {
    this.setState({ maxLength: e.target.value }, () =>
      this.props.setMaxLength(this.props.itemKey, this.state.maxLength)
    );
  };

  render() {
    return (
      <div className="customize-section">
        <div className="customize-section-close">
          <div onClick={() => this.props.handleElementClicked()}>
            <IconCloseButton />
          </div>
        </div>
        <div className="customize-section-title">
          <h4>{this.props.dragName} </h4>Element Settings
        </div>
        <div className="customize-section-tabs-container">
          <h6
            className={
              this.state.whichTabIsShown ===
              "CustomizeSectionDefaultSettingsTab"
                ? "toggle-border-bottom"
                : null
            }
            onClick={() =>
              this.setState({
                whichTabIsShown: "CustomizeSectionDefaultSettingsTab"
              })
            }
          >
            General
          </h6>
          <h6
            className={
              this.state.whichTabIsShown === "CustomizeSectionCssSettingsTab"
                ? "toggle-border-bottom"
                : null
            }
            onClick={() =>
              this.setState({
                whichTabIsShown: "CustomizeSectionCssSettingsTab"
              })
            }
          >
            Style
          </h6>
        </div>
        <div className="toggle-highlight-container">
          <div
            className={`toggle-highlight ${
              this.state.whichTabIsShown ===
              "CustomizeSectionDefaultSettingsTab"
                ? "opacity1"
                : "opacity0"
            }`}
          ></div>
          <div
            className={`toggle-highlight ${
              this.state.whichTabIsShown === "CustomizeSectionCssSettingsTab"
                ? "opacity1"
                : "opacity0"
            }`}
          ></div>
        </div>
        {this.state.whichTabIsShown === "CustomizeSectionDefaultSettingsTab" ? (
          <CustomizeSectionDefaultSettingsTab
            inputValue={this.state.inputValue}
            placeholderValue={this.state.placeholderValue}
            checkboxOption={this.state.checkboxOption}
            textarea={this.state.textarea}
            maxLength={this.state.maxLength}
            handleInput={this.handleInput}
            handlePlaceholder={this.handlePlaceholder}
            handleCheckbox={this.handleCheckbox}
            handleTextareaRows={this.handleTextareaRows}
            handleTextareaCols={this.handleTextareaCols}
            handleMaxLength={this.handleMaxLength}
            type={this.props.type}
            itemKey={this.props.itemKey}
            handleRequiredState={this.props.handleRequiredState}
            style={this.props.style}
          />
        ) : (
          <CustomizeSectionCssSettingsTab
            handleColorPickerForFormBackground={
              this.props.handleColorPickerForFormBackground
            }
            handleColorPickerForFormColor={
              this.props.handleColorPickerForFormColor
            }
            dropZoneElements={this.props.dropZoneElements}
            ColorPickerForFormBackground={
              this.props.ColorPickerForFormBackground
            }
            ColorPickerForFormColor={this.props.ColorPickerForFormColor}
          />
        )}
      </div>
    );
  }
}
