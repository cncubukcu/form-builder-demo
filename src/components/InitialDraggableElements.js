import React from "react";
import formName from "../assets/name-input.svg";
import email from "../assets/email.svg";
import checkbox from "../assets/multiple.svg";
import textarea from "../assets/textarea.svg";

const formElements = [
  {
    type: "formName",
    dragName: "Name Input",
    defaultName: 'Name'
  },
  {
    type: "email",
    dragName: "E-Mail",
    defaultName: 'E-Mail'

  },
  {
    type: "checkbox",
    dragName: "Multiple Selection",
    defaultName: 'Question'

  },
  {
    type: "textarea",
    dragName: "Text Area",
    defaultName: 'Question'

  }
];

export default function InitialDraggableElements({ onDragStart }) {
  return formElements.map((element, index) => {
    return (
      <div
        className="drag-zone-elements"
        key={index}
        draggable
        onDragStart={e => onDragStart(e, element)}
      >
        <img
          src={
            element.type === "formName"
              ? formName
              : element.type === "email"
              ? email
              : element.type === "checkbox"
              ? checkbox
              : element.type === "textarea"
              ? textarea
              : null
          }
          alt="form element images"
        />{" "}
        {element.dragName}
      </div>
    );
  });
}
