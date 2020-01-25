import React, { Component } from 'react'

export default class CreatedFormRender extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          {this.props.formElements.map((item, index) => {
            switch (item.type) {
              case "formName":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>
                      {item.style.name || "Name:"}
                    </label>{" "}
                    <input
                      type="text"
                      placeholder={item.style.placeholder}
                      maxLength={item.style.maxLength}
                      id={item.key}
                      required={item.style.required ? true : null}
                      onChange={e => this.props.handleInput(e, item.key)}
                    />
                  </div>
                );

              case "email":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>
                      {item.style.name || "E-Mail:"}
                    </label>{" "}
                    <input
                      type="email"
                      placeholder={item.style.placeholder}
                      maxLength={item.style.maxLength}
                      id={item.key}
                      required={item.style.required ? true : null}
                      onChange={e => this.props.handleInput(e, item.key)}
                    />
                  </div>
                );

              case "checkbox":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>
                      {item.style.name || "Question"}
                    </label>

                    {item.style.ifCheckbox.map((option, index) => {
                      return (
                        <div key={index}>
                          <label htmlFor={item.key}>{option.value}</label>
                          <input
                            type="checkbox"
                            index={index}
                            value={item.value}
                            onClick={() => this.props.handleCheck(index, item.key)}
                          />
                        </div>
                      );
                    })}
                  </div>
                );

              case "textarea":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={item.key}>{item.style.name || 'Question'}</label>
                    <textarea
                      rows={item.style.textarea.rows}
                      cols={item.style.textarea.cols}
                      id={item.key}
                      type="text"
                      placeholder={item.style.placeholder}
                      required={item.style.required ? true : null}
                      onChange={e => this.props.handleInput(e, item.key)}
                      maxLength={item.style.maxLength}
                    ></textarea>
                  </div>
                );

              default:
                return <div key={index.toString()}></div>;
            }
          })}
          <input type="submit" value="Submit" /> 
        </form>
          <button onClick={() => this.props.createForm(false)}>EDIT</button>
      </div>
    );
  }
}
