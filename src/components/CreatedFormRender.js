import React, { Component } from "react";

export default class CreatedFormRender extends Component {
  render() {
    return (
      <div className="form-section-container">
        <div
          className="drop-zone"
          style={{
            backgroundColor: this.props.ColorPickerForFormBackground,
            color: this.props.ColorPickerForFormColor,
            position: "absolute"
          }}
        >
          <form onSubmit={this.props.onSubmit}>
            {this.props.formElements.map((item, index) => {
              switch (item.type) {
                case "formName":
                  return (
                    <div className="drop-zone-elements" key={index}>
                      <div
                        className="dropped-elements-inputs"
                        key={index.toString()}
                      >
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
                    </div>
                  );

                case "email":
                  return (
                    <div className="drop-zone-elements" key={index}>
                      <div
                        className="dropped-elements-inputs"
                        key={index.toString()}
                      >
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
                    </div>
                  );

                case "checkbox":
                  return (
                    <div className="drop-zone-elements" key={index.toString()}>
                      <div
                        className="dropped-elements-inputs checkbox"
                        key={index.toString()}
                      >
                        <label htmlFor={item.key}>
                          {item.style.name || "Question"}
                        </label>

                        {item.style.ifCheckbox.map((option, index) => {
                          return (
                            <div key={index}>
                              <div className="flex-start font-12-grey">
                                <input
                                  type="checkbox"
                                  index={index}
                                  value={item.value}
                                  onClick={() =>
                                    this.props.handleCheck(index, item.key)
                                  }
                                />
                                {option.value}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );

                case "textarea":
                  return (
                    <div className="drop-zone-elements" key={index}>
                      <div className="textarea" key={index.toString()}>
                        <label htmlFor={item.key}>
                          {item.style.name || "Question"}
                        </label>
                        <br />
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
                    </div>
                  );

                default:
                  return <div key={index.toString()}></div>;
              }
            })}
            <div className="submit-form-container">
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="reset-button created-form-reset-button">
            <button onClick={() => this.props.createForm(false)}>
              EDIT FORM
            </button>
          </div>
        </div>
      </div>
    );
  }
}
