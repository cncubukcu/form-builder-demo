import React from "react";
import IconNameInput from "./Icons/IconNameInput";
import IconEmailInput from "./Icons/IconEmailInput";
import IconSelection from "./Icons/IconSelection";
import IconTextarea from "./Icons/IconTextarea";

const formElements = [
  {
    type: "formName",
    dragName: "Name",
    defaultName: "Name"
  },
  {
    type: "email",
    dragName: "E-Mail",
    defaultName: "E-Mail"
  },
  {
    type: "checkbox",
    dragName: "Selection",
    defaultName: "Question"
  },
  {
    type: "textarea",
    dragName: "Text Area",
    defaultName: "Question"
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
        {element.type === "formName" ? (
          <IconNameInput />
        ) : element.type === "email" ? (
          <IconEmailInput />
        ) : element.type === "checkbox" ? (
          <IconSelection />
        ) : element.type === "textarea" ? (
          <IconTextarea />
        ) : null}

        {element.dragName}
      </div>
    );
  });
}
