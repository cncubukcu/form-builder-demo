import React, { Component } from "react";

export default class CreatedForm extends Component {
  state = { inputValue: "", formResult: false };

  deneme = e => {
    console.log(e.target.checked);
  };

  onSubmit = e => {
    e.preventDefault();
    let results = {};
    this.props.formElements.map((item, index) => {
       if(item.type === 'checkbox') {
         return results = {...results, [index]: {[item.style.name || item.defaultName] : item.style.ifCheckbox}}
       } else {

       
       return results = {...results, [index] : {[item.style.name || item.defaultName] : item.value}}
      }
        
      
    }); 
    console.log(results)
    alert(JSON.stringify(results));
  };

  handleInput = (e, itemKey) => {
    this.setState({ inputValue: e.target.value }, () =>
      this.props.setValue(itemKey, this.state.inputValue)
    );
  };

  /* handlePlaceholder = e => {
    this.setState({ placeholderValue: e.target.value }, () =>
      this.props.stylePlaceholder(
        this.props.itemKey,
        this.state.placeholderValue
      )
    );
  };

  handleTextarea = (e) => {
    this.setState({ textareaValue: e.target.value }, () =>
      this.props.styleCustomize(this.props.itemKey, this.state.textareaValue)
    );
  } */

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
                      onChange={e => this.handleInput(e, item.key)}
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
                      onChange={e => this.handleInput(e, item.key)}
                    />
                  </div>
                );

              case "checkbox":
                return (
                  <div key={index.toString()}>
                    <label htmlFor={this.props.formElements.key}>
                      {item.name || "Question"}
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
                    <label htmlFor={item.key}>{item.style.name}</label>
                    <textarea
                      rows={item.style.textarea.rows}
                      cols={item.style.textarea.cols}
                      id={item.key}
                      type="text"
                      placeholder={item.style.placeholder}
                      required={item.style.required ? true : null}
                      onChange={e => this.handleInput(e, item.key)}
                    ></textarea>
                  </div>
                );

              default:
                return <div></div>;
            }
          })}
          <input type="submit" />
        </form>

      </div>
    );
  }
}
