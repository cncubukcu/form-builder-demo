/* import React, { Component } from "react";
import uuid from "uuid/v4";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DeleteButton from './DeleteButton'

const formElements = [
  {
    id: uuid(),
    type: "formName",
    formVersion: (
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
      </div>
    )
  },
  {
    id: uuid(),
    type: "email",
    formVersion: (
      <div>
        <label htmlFor="email">E-Mail</label>
        <input id="email" type="text"></input>
      </div>
    )
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

  /* state = {
    formElements: formElements,
    draggedElement: {},
    dropZoneElements: [],
    elementStyle:[]
  };

  onDragStart = (e, el) => {
    //e.preventDefault();
    this.setState({ draggedElement: el });
  };
  onDragOver = e => {
    e.preventDefault();
  };
  onDrop = e => {
    const { dropZoneElements, draggedElement} = this.state;
    this.setState({
      dropZoneElements: [...dropZoneElements, {...draggedElement, key:uuid(), custom:{label:'fff'}}],
      draggedElement: {},
      
    });
  };

  deleteForm = key => {
    this.setState({dropZoneElements: this.state.dropZoneElements.filter(item => key !== item.key) })
  } */

  /* onDragStart = result => {
    //this.setState({ draggedElement: el }); TODO
  }; */

  /* onDragEnd = result => {
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

  render() {
    console.log(this.state.dropZoneElements)
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          <div className="drag-zone">
            {this.state.formElements.map((el, index) => {
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
          </div> */
          /* <Droppable droppableId="form">
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
                        >
                          {el.formVersion}
                          <DeleteButton deleteForm={this.deleteForm} itemKey={el.key}/>
                          
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
} */
 
//-----------------------------------------------------

/* import React, { Component } from "react";
const dropZoneElementss = {
  formName: `Name: ${<input type="text"></input>}`,
  email: 'E-Mail : <input type="email"><input/>'
};
export default class CreateFormZone extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.dropZoneElements.map((el, index) => {
          return (
            <div
              onDrop={e => this.props.onDrop(e)}
              onDragOver={e => this.props.onDragOver(e)}
              key={index}
            >
              {dropZoneElementss[el.type]}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
} */

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
  onDragStart = (e, el) => {
    //e.preventDefault();
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
                //onDragStart={e => this.onDragStart(e, el)}
                onDragStart={e => this.onDragStart(e, el)}
                //onDrag={e=> this.onDragOver(e)}
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
                //onDrop={e => this.onDrop(e)}
                //onDragOver={e => this.onDragOver(e)}
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
}
 */