import React from "react";
import { SketchPicker } from "react-color";

export default class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: "#fcfcfc"
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeComplete = color => {
    if(!this.props.dropZoneElements.length) {
      this.setState({ color: '#fcfcfc' }, () =>
      this.props.handleColorPickerForFormBackground(this.state.color)
    );
    }
    
    this.setState({ color: color.hex }, () =>
      this.props.handleColorPickerForFormBackground(this.state.color)
    );
    console.log(this.props.dropZoneElements.length)
  };

  render() {
    

    return (
      <div>
        <div
          style={{
            padding: "5px",
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            display: "inline-block",
            cursor: "pointer"
          }}
          onClick={this.handleClick}
        >
          <div
            style={{
              width: "36px",
              height: "14px",
              borderRadius: "2px",
              background: `${this.state.color}`
            }}
          />
        </div>
        {this.state.displayColorPicker ? (
          <div style={{ position: "absolute", zIndex: "2" }}>
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


<div
          style={{
            padding: "5px",
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            display: "inline-block",
            cursor: "pointer"
          }}
          onClick={this.handleClick}
        >
          <div
            style={{
              width: "36px",
              height: "14px",
              borderRadius: "2px",
              background: `${this.state.color}`
            }}
          />
        </div>
        {this.state.displayColorPicker ? (
          <div style={{ position: "absolute", zIndex: "2" }}>
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
    );
  }
}
