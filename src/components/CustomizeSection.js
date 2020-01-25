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
            dropZoneElements={this.props.dropZoneElements}
          />
        )}
      </div>
    );

    /* if (this.state.whichTabIsShown === "CustomizeSectionCssSettingsTab") {
      return (
        <div className="customize-section">
          <button onClick={() => this.props.handleElementClicked()}>
            Çarpı
          </button>
          <CustomizeSectionCssSettingsTab />
        </div>
      );
    } */
    /* if (
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
          <IsRequired
            handleRequiredState={this.props.handleRequiredState}
            itemKey={this.props.itemKey}
          />
          <label>Max Char Length</label>
          <input
            value={this.state.maxLength}
            type="number"
            onChange={e => this.handleMaxLength(e)}
          />
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
          <IsRequired
            handleRequiredState={this.props.handleRequiredState}
            itemKey={this.props.itemKey}
          />
          <label>Max Char Length</label>
          <input
            value={this.state.maxLength}
            type="number"
            onChange={e => this.handleMaxLength(e)}
          />
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
          <IsRequired
            handleRequiredState={this.props.handleRequiredState}
            itemKey={this.props.itemKey}
          />
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
          Rows{" "}
          <input
            type="number"
            value={this.props.style.textarea.rows}
            onChange={e => this.handleTextareaRows(e)}
          />
          Columns{" "}
          <input
            type="number"
            value={this.props.style.textarea.cols}
            onChange={e => this.handleTextareaCols(e)}
          />
          <label>Max Char Length</label>
          <input
            value={this.state.maxLength}
            type="number"
            onChange={e => this.handleMaxLength(e)}
          />
        </div>
      );
    } */
  }
}
