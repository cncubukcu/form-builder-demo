import React, { Component } from "react";

export default class CreateTheForm extends Component {
  render() {
    return (
      <div>
        <form>
          {this.props.formElements.map((item, index) => {
            switch (item.type) {
              case "formName":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>{item.style.name || 'Name:' }</label>{" "}
                    <input
                      type="text"
                      placeholder={item.style.placeholder}
                      maxLength={item.style.maxLength}
                    />
                  </div>
                );
              case "email":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>{item.style.name || 'E-Mail:'}</label>{" "}
                    <input
                      type="email"
                      placeholder={item.style.placeholder}
                      maxLength={item.style.maxLength}
                    />
                  </div>
                );
              case "checkbox":
                return (
                  <div key={index.toString()}>
                    {item.style.ifCheckbox.map((item, index) => {
                      return (
                        <div key={index}>
                          <label htmlFor={index}>{item.value}</label>
                          <input type="checkbox" />
                        </div>
                      );
                    })}
                  </div>
                );
              case "textarea":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>{item.style.name}</label>
                    <textarea
                      rows={item.style.textarea.rows}
                      cols={item.style.textarea.cols}
                      id={item.key}
                      type="text"
                      placeholder={item.style.placeholder}
                    ></textarea>
                  </div>
                );
              default:
                return <div>Troll</div>;
            }
          })}
        </form>
      </div>
    );
  }
}
