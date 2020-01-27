import React from "react";
import { SketchPicker } from "react-color";

export default class ColorPicker extends React.Component {
  state = {
    displayColorPickerBg: false,
    displayColorPicker: false,
    bgColor: this.props.ColorPickerForFormBackground,
    color: this.props.ColorPickerForFormColor
  };

  handleClickBg = () => {
    this.setState({ displayColorPickerBg: !this.state.displayColorPickerBg });
  };

  handleCloseBg = () => {
    this.setState({ displayColorPickerBg: false });
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeCompleteBackground = color => {
    if (!this.props.dropZoneElements.length) {
      this.setState({ bgColor: "#fcfcfc" }, () =>
        this.props.handleColorPickerForFormBackground(this.state.bgColor)
      );
    }

    this.setState({ bgColor: color.hex }, () =>
      this.props.handleColorPickerForFormBackground(this.state.bgColor)
    );
    console.log(this.props.dropZoneElements.length);
  };

  handleChangeComplete = color => {
    if (!this.props.dropZoneElements.length) {
      this.setState({ color: "#000000" }, () =>
        this.props.handleColorPickerForFormColor(this.state.color)
      );
    }

    this.setState({ color: color.hex }, () =>
      this.props.handleColorPickerForFormColor(this.state.color)
    );
    console.log(this.props.dropZoneElements.length);
  };

  render() {
    return (
      <div className="color-picker">
        <div className="color-picker-bg-container">
          <p>Form Background Color</p>
          <div className="color-picker-bg" onClick={this.handleClickBg}>
            {" "}
            <p className="color-picker-bg-hex-value">{this.state.bgColor}</p>
            <div
              className="color-picker-bg-color-div"
              style={{
                background: `${this.state.bgColor}`
              }}
            />
          </div>
          {this.state.displayColorPickerBg ? (
            <div className="sketch-picker-for-bg">
              <div
                style={{
                  position: "fixed",
                  top: "40px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px"
                }}
                onClick={this.handleCloseBg}
              />
              <SketchPicker
                color={this.state.bgColor}
                onChangeComplete={this.handleChangeCompleteBackground}
              />
            </div>
          ) : null}
        </div>
        <div className="color-picker-bg-container">
          <p>Form Text Color</p>
          <div className="color-picker-bg" onClick={this.handleClick}>
            <p className="color-picker-bg-hex-value">{this.state.color}</p>
            <div
              style={{
                background: `${this.state.color}`
              }}
              className="color-picker-bg-color-div"
            />
          </div>
          {this.state.displayColorPicker ? (
            <div
              style={{
                position: "absolute",
                zIndex: "2",
                top: "85px",
                left: "20px"
              }}
            >
              <div
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px"
                }}
                onClick={this.handleClose}
              />
              <SketchPicker
                color={this.state.color}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
