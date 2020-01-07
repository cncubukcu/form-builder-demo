import React, { Component } from "react";
import uuid from "uuid/v4";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import DeleteButton from "./DeleteButton";
import FormElementGenerator from "./FormElementGenerator";
import CustomizeSection from "./CustomizeSection";
import ResetButton from "./ResetButton";
import CreateFormButton from "./CreateFormButton";
import FormCreator from './FormCreator'

const formElements = [
  {
    type: "formName"
  },
  {
    type: "email"
  },
  {
    type: "checkbox"
  },
  {
    type: "textarea"
  }
];

export default class App extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      formElements: formElements,
      draggedElement: {},
      dropZoneElements: []
    };
    React.createRef();
  } */

  state = {
    draggedElement: {},
    dropZoneElements: [],
    elementClicked: '',
    customizeSectionType: null,
    key: "",
    formCreated: false
  };

  onDragStart = (e, el) => {
    //e.preventDefault();
    this.setState({ draggedElement: el });
  };
  onDragOver = e => {
    e.preventDefault();
  };
  onDrop = e => {
    const { dropZoneElements, draggedElement } = this.state;
    this.setState({
      dropZoneElements: [
        ...dropZoneElements,
        {
          ...draggedElement,
          key: uuid(),
          style: {
            name: "",
            placeholder: "",
            required: false,
            maxLength: 50,
            ifCheckbox: [
              { value: "First Option", checked: false },
              { value: "Second Option", checked: false }
            ],
            textarea: { rows: 10, cols: 30 }
          }
        }
      ],
      draggedElement: {}
    });
  };

  deleteForm = key => {
    this.setState({
      dropZoneElements: this.state.dropZoneElements.filter(
        item => key !== item.key
      )
    });
  };

  styleCustomize = (itemKey, value) => {
    console.log(this.state.dropZoneElements);
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
        item["style"]["ifCheckbox"].push({ value: "", checked: false });
      }
    });

    this.setState({ dropZoneElements: newArr });
  };

  typeHandler = (type, key) => {
    this.setState({ customizeSectionType: type, key: key });
  };

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
    this.setState({ dropZoneElements: [] });
  };

  onDragEnd = result => {
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

  handleElementClicked = itemKey => {
    this.setState({ elementClicked: itemKey });
  };

  setMaxLength = (itemKey, value) => {
    const newArr = [...this.state.dropZoneElements];

    newArr.forEach(item => {
      if (item["key"] === itemKey) {
        item["style"]["maxLength"] = value;
      }
    });

    this.setState({ dropZoneElements: newArr });
  }

  createForm = () => {
    this.setState({formCreated: true})
  }

  render() {
    if(!this.state.formCreated) {
    //console.log(this.state.dropZoneElements);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          <div className="drag-zone">
            {formElements.map((el, index) => {
              return (
                <div
                  className="drag-zone-elements"
                  key={index}
                  draggable
                  onDragStart={e => this.onDragStart(e, el)}
                >
                  {el.type}
                </div>
              );
            })}
          </div>

          <Droppable droppableId="form">
            {provided => (
              <div
                className="drop-zone"
                {...provided.droppableProps}
                ref={provided.innerRef}
                onDrop={e => this.onDrop(e)}
                onDragOver={e => this.onDragOver(e)}
              >
                {this.state.dropZoneElements.map((el, index) => {
                  return (
                    <div key={index}>
                      {this.state.key === el.key ? (
                        <CustomizeSection
                          type={this.state.customizeSectionType}
                          itemKey={this.state.key}
                          style={el.style}
                          itemKey2={el.key}
                          styleCustomize={this.styleCustomize}
                          stylePlaceholder={this.stylePlaceholder}
                          styleCheckbox={this.styleCheckbox}
                          changeRowValue={this.changeRowValue}
                          changeColValue={this.changeColValue}
                          handleRequiredState={this.handleRequiredState}
                          setMaxLength={this.setMaxLength}
                        />
                      ) : null}
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
                            <FormElementGenerator
                              itemKey={el.key}
                              type={el.type}
                              style={el.style}
                              typeHandler={this.typeHandler}
                              checkboxAddOption={this.checkboxAddOption}
                              deleteOneOfMultipleSelections={
                                this.deleteOneOfMultipleSelections
                              }
                              handleElementClicked={this.handleElementClicked}
                              elementClicked={this.state.elementClicked}
                            />
                            {this.state.elementClicked === el.key ? (
                              <DeleteButton
                                deleteForm={this.deleteForm}
                                itemKey={el.key}
                              />
                            ) : null}
                          </div>
                        )}
                      </Draggable>
                    </div>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <ResetButton resetForm={this.resetForm} />
        <CreateFormButton createForm={this.createForm}/>
      </DragDropContext>
    );
        }
        else {
          return <FormCreator formElements={this.state.dropZoneElements}/>
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
