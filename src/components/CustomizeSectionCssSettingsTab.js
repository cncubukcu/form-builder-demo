import React from 'react'
import ColorPicker from "./ColorPicker";

export default function CustomizeSectionCssSettingsTab({handleColorPickerForFormBackground,dropZoneElements}
) {
  return (
    
      <ColorPicker  handleColorPickerForFormBackground={
        handleColorPickerForFormBackground
      }
      dropZoneElements={dropZoneElements}
      />

    
  )
}
