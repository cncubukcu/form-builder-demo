import React, { Component } from "react";
import uuid from "uuid/v4";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IconInitialDrag from "./Icons/IconInitialDrag";

import DeleteButton from "./DeleteButton";
import FormElementGenerator from "./FormElementGenerator";
import CustomizeSection from "./CustomizeSection";
import ResetButton from "./ResetButton";
import CreateFormButton from "./CreateFormButton";
import CreatedForm from "./CreatedForm";
import Header from "./Header";
import HomeLeftSection from "./HomeLeftSection";

export default class App extends Component {
  state = {
    draggedElement: {},
    dropZoneElements: [],
    elementClicked: false,
    customizeSectionType: null,
    key: "",
    formCreated: false,
    ColorPickerForFormBackground: "#fcfcfc",
    ColorPickerForFormColor: "#000000"
  };

  handleColorPickerForFormBackground = color => {
    this.setState({ ColorPickerForFormBackground: color });
  };

  handleColorPickerForFormColor = color => {
    this.setState({ ColorPickerForFormColor: color });
  };

  onDragStart = (e, el) => {
    this.setState({ draggedElement: el });
  };
  onDragOver = e => {
    e.preventDefault();
  };
  onDrop = e => {
    const { dropZoneElements, draggedElement } = this.state;
    if (draggedElement.type) {
      this.setState({
        dropZoneElements: [
          ...dropZoneElements,
          {
            ...draggedElement,
            key: uuid(),
            value: "",
            style: {
              name: "",
              placeholder: "",
              required: false,
              maxLength: 50,
              ifCheckbox: [
                { value: "Option", checked: false },
                { value: "Option", checked: false }
              ],
              textarea: { rows: 10, cols: 30 }
            }
          }
        ],
        draggedElement: {}
      });
    }
  };

  deleteForm = key => {
    if (this.state.dropZoneElements.length === 1) {
      this.setState({
        dropZoneElements: this.state.dropZoneElements.filter(
          item => key !== item.key
        ),
        ColorPickerForFormBackground: "#fcfcfc",
        ColorPickerForFormColor: "#000000"
      });
    }
    this.setState({
      dropZoneElements: this.state.dropZoneElements.filter(
        item => key !== item.key
      )
    });
  };

  handleCheck = (index, itemKey) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        console.log(item["style"]["ifCheckbox"][index]);
        item["style"]["ifCheckbox"][index].checked
          ? (item["style"]["ifCheckbox"][index].checked = false)
          : (item["style"]["ifCheckbox"][index].checked = true);
      }
    });
    console.log(newArr);
    this.setState({ dropZoneElements: newArr });
  };

  styleCustomize = (itemKey, value) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["name"] = value;
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  stylePlaceholder = (itemKey, value) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["placeholder"] = value;
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  styleCheckbox = (itemKey, value, index) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["ifCheckbox"][index].value = value;
      }
    });
    this.setState({ dropZoneElements: newArr });
  };

  checkboxAddOption = itemKey => {
    const newArr = [...this.state.dropZoneElements];
    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        console.log("found");
        item["style"]["ifCheckbox"].push({ value: "Option", checked: false });
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  typeHandler = (type, key) => {
    this.setState({ customizeSectionType: type, key: key });
  };
  //Checkbox
  deleteOneOfMultipleSelections = (itemKey, index) => {
    const newArr = [...this.state.dropZoneElements];
    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item.style.ifCheckbox = item["style"]["ifCheckbox"].filter(
          (item, idx) => idx !== index
        );
      }
    });

    this.setState({ dropZoneElements: newArr });
    console.log("geldik geldik");
  };

  changeRowValue = (itemKey, row) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["textarea"]["rows"] = row;
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  changeColValue = (itemKey, col) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["textarea"]["cols"] = col;
      }
    });

    this.setState({ dropZoneElements: newArr });
  };
  resetForm = () => {
    this.setState({
      dropZoneElements: [],
      ColorPickerForFormBackground: "#fcfcfc",
      ColorPickerForFormColor: "#000000"
    });
  };

  onDragEnd = result => {
    console.log(this.state.dropZoneElements);
    const { destination, source, draggableId } = result;
    //outside of droppable
    if (!destination) {
      return;
    }
    //dragged on itself
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //use result object of the library, create new indexes and create a new array of form elements of that indexes, update the state
    const newIds = this.state.dropZoneElements.map((el, index) => index);
    newIds.splice(source.index, 1);
    newIds.splice(destination.index, 0, draggableId);

    console.log(newIds);
    const newArray = newIds.map(el => this.state.dropZoneElements[el]);
    this.setState({ dropZoneElements: newArray });
  };

  handleRequiredState = itemKey => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["required"]
          ? (item.style.required = false)
          : (item.style.required = true);
      }
    });
    this.setState({ dropZoneElements: newArr });
  };

  handleElementClicked = () => {
    this.setState({ elementClicked: this.state.elementClicked ? false : true });
  };

  setMaxLength = (itemKey, value) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["maxLength"] = value;
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  createForm = trueOrFalse => {
    this.setState({ formCreated: trueOrFalse });
  };

  setValue = (itemKey, value) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["value"] = value;
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  render() {
    if (!this.state.formCreated) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="main-container">
            <Header name="FORMOD" text="Form Builder" />

            <div className="form-section-container">
              <ResetButton resetForm={this.resetForm} />
              <HomeLeftSection
                onDragStart={this.onDragStart}
                title="FORM ELEMENTS"
              />

              <Droppable droppableId="form">
                {provided => (
                  <div
                    className="drop-zone"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    onDrop={e => this.onDrop(e)}
                    onDragOver={e => this.onDragOver(e)}
                    style={{
                      backgroundColor: this.state.dropZoneElements.length
                        ? this.state.ColorPickerForFormBackground
                        : "#fcfcfc",
                      color: this.state.dropZoneElements.length
                        ? this.state.ColorPickerForFormColor
                        : "#000000"
                    }}
                  >
                    {!this.state.dropZoneElements.length ||
                    !this.state.dropZoneElements[0].type ? (
                      <div className="initial-form-message">
                        <IconInitialDrag />
                        <p>To start, drag items from left panel to here.</p>
                      </div>
                    ) : null}
                    {/*eslint-disable-next-line*/}
                    {this.state.dropZoneElements.map((el, index) => {
                      if (el.type) {
                        return (
                          <div key={index}>
                            <Draggable
                              draggableId={index.toString()}
                              index={index}
                              key={index.toString()}
                            >
                              {provided => (
                                <div
                                  key={index}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  className="drop-zone-elements"
                                >
                                  {
                                    <FormElementGenerator
                                      itemKey={el.key}
                                      type={el.type}
                                      style={el.style}
                                      typeHandler={this.typeHandler}
                                      checkboxAddOption={this.checkboxAddOption}
                                      deleteOneOfMultipleSelections={
                                        this.deleteOneOfMultipleSelections
                                      }
                                      handleElementClicked={
                                        this.handleElementClicked
                                      }
                                      elementClicked={this.state.elementClicked}
                                      stateKey={this.state.key}
                                    />
                                  }
                                  {this.state.key === el.key ? (
                                    <DeleteButton
                                      deleteForm={this.deleteForm}
                                      itemKey={el.key}
                                    />
                                  ) : null}
                                </div>
                              )}
                            </Draggable>
                            {this.state.key === el.key &&
                            this.state.elementClicked ? (
                              <CustomizeSection
                                type={this.state.customizeSectionType}
                                itemKey={this.state.key}
                                style={el.style}
                                styleCustomize={this.styleCustomize}
                                stylePlaceholder={this.stylePlaceholder}
                                styleCheckbox={this.styleCheckbox}
                                changeRowValue={this.changeRowValue}
                                changeColValue={this.changeColValue}
                                handleRequiredState={this.handleRequiredState}
                                setMaxLength={this.setMaxLength}
                                handleElementClicked={this.handleElementClicked}
                                handleColorPickerForFormBackground={
                                  this.handleColorPickerForFormBackground
                                }
                                handleColorPickerForFormColor={
                                  this.handleColorPickerForFormColor
                                }
                                dropZoneElements={this.state.dropZoneElements}
                                dragName={el.dragName}
                                ColorPickerForFormBackground={
                                  this.state.ColorPickerForFormBackground
                                }
                                ColorPickerForFormColor={
                                  this.state.ColorPickerForFormColor
                                }
                              />
                            ) : null}
                          </div>
                        );
                      }
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <CreateFormButton createForm={this.createForm} />
            </div>
          </div>
        </DragDropContext>
      );
    } else {
      return (
        <CreatedForm
          formElements={this.state.dropZoneElements}
          setValue={this.setValue}
          handleCheck={this.handleCheck}
          createForm={this.createForm}
          ColorPickerForFormBackground={this.state.ColorPickerForFormBackground}
          ColorPickerForFormColor={this.state.ColorPickerForFormColor}
        />
      );
    }
  }
}

/* <CreateFormZone
            dropZoneElements={this.state.dropZoneElements}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          /> */
/* import React, { Component } from "react";

          const formElements = [{ id: 1, type: "formName" }, { id: 2, type: "email" }];
          const dropZoneElementss = {
            formName: (
              <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"></input>
              </div>
            ),
            email: (
              <div>
                <label htmlFor="name">E-Mail</label>
                <input id="name" type="text"></input>
              </div>
            )
          };

          export default class App extends Component {
            state = {
              formElements: formElements,
              draggedElement: null,
              dropZoneElements: []
            };
            onDragOver = e => {
              e.preventDefault();
            };
            onDrop = e => {
              const { dropZoneElements, draggedElement } = this.state;
              this.setState({
                dropZoneElements: [...dropZoneElements, draggedElement]
                //draggedElement: {}
              });
            };
            onDrag = (e, el) => {
              e.preventDefault();
              this.setState({ draggedElement: el });
            };

            draggableMapping = () => {};
            render() {
              return (
                <div className="container">
                  <div className="drag-zone">
                    {this.state.formElements.map((el, index) => {
                      return (
                        <div
                          className="drag-zone-elements"
                          key={el.id}
                          draggable
                          //onDragStart={e => this.onDrag(e, el)}
                          onDrag={e => this.onDrag(e, el)}
                        >
                          {el.type}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="drop-zone"
                    onDrop={e => this.onDrop(e)}
                    onDragOver={e => this.onDragOver(e)}
                  >
                    {this.state.dropZoneElements.map((el, index) => {
                      return (
                        <div
                          onDrop={e => this.onDrop(e)}
                          onDragOver={e => this.onDragOver(e)}
                          key={index}
                        >
                          {dropZoneElementss[el.type]}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          } */

/*  import React, { Component } from "react";

const formElements = [{ id: 1, type: "formName" }, { id: 2, type: "email" }];
const dropZoneElementss = {
  formName: (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text"></input>
    </div>
  ),
  email: (
    <div>
      <label htmlFor="email">E-Mail</label>
      <input id="email" type="text"></input>
    </div>
  )
};

export default class App extends Component {
  state = {
    formElements: formElements,
    draggedElement: {},
    dropZoneElements: []
  };
  onDragOver = e => {
    e.preventDefault();
  };
  onDrop = e => {
    const { dropZoneElements, draggedElement } = this.state;
    this.setState({
      dropZoneElements: [...dropZoneElements, draggedElement],
      draggedElement: {}
    });
  };
  onDrag = (e, el) => {
    e.preventDefault();
    this.setState({ draggedElement: el });
  };
  onDragStart = (e, index) => {
    this.draggedItem = index;
    //e.dataTransfer.effectAllowed = "move";
    //e.dataTransfer.setData("text/html", e.target.parentNode);
    //e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOverRight = index => {
    const draggedOverItem = index;

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.dropZoneElements.filter((item,index) => index !== this.draggedItem);


    // add the dragged item after the dragged over item
    items.splice(index, 0, this.state.dropZoneElements[this.draggedItem]);

    this.setState({ dropZoneElements:items });
  };

  onDragEnd = () => {
    this.draggedItem = null;
  };

  render() {
    return (
      <div className="container">
        <div className="drag-zone">
          {this.state.formElements.map((el, index) => {
            return (
              <div
                className="drag-zone-elements"
                key={el.id}
                draggable
                //onDragStart={e => this.onDrag(e, el)}
                onDrag={e => this.onDrag(e, el)}
              >
                {el.type}
              </div>
            );
          })}
        </div>
        <div
          className="drop-zone"
          onDrop={e => this.onDrop(e)}
          onDragOver={e => this.onDragOver(e)}
        >
          {this.state.dropZoneElements.map((el, index) => {
            return (
              <div
              className="form-elements"
                //onDrop={e => this.onDrop(e)}
                onDragOver={() => this.onDragOverRight(index)}
                draggable
                onDragStart={e=> this.onDragStart(e,index)}
                key={index}
                onDragEnd={this.onDragEnd}
              >
                {dropZoneElementss[el.type]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
} */

/* const dropZoneElementss = {
  formName: (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text"></input>
    </div>
  ),
  email: (
    <div>
      <label htmlFor="email">E-Mail</label>
      <input id="email" type="text"></input>
    </div>
  )
}; */
