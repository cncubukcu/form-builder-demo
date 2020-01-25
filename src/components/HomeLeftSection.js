import React from 'react'
import InitialDraggableElements from './InitialDraggableElements';
import IconCloseButton from './Icons/IconCloseButton'

export default function HomeLeftSection({onDragStart, title}) {
  return (
    <div className="drag-zone">
                <div className="close-button">
                  <IconCloseButton />
                </div>
                <h3>{title}</h3>
                <InitialDraggableElements onDragStart={onDragStart}/>
                <div className="unneccessary-hack"></div>
              </div>
  )
}
