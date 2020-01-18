import React from 'react'
import InitialDraggableElements from './InitialDraggableElements';

import X from "../assets/theX.svg";

export default function HomeLeftSection({onDragStart, title}) {
  return (
    <div className="drag-zone">
                <div className="close-button">
                  <img src={X} alt="close button" />
                </div>
                <h3>{title}</h3>
                <InitialDraggableElements onDragStart={onDragStart}/>
                <div className="unneccessary-hack"></div>
              </div>
  )
}
