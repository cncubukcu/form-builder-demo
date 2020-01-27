import React from "react";
import ColorPicker from "./ColorPicker";

export default function CustomizeSectionCssSettingsTab({
  handleColorPickerForFormBackground,
  dropZoneElements,
  handleColorPickerForFormColor,
  ColorPickerForFormBackground,
  ColorPickerForFormColor
}) {
  return (
    <ColorPicker
      handleColorPickerForFormBackground={handleColorPickerForFormBackground}
      dropZoneElements={dropZoneElements}
      handleColorPickerForFormColor={handleColorPickerForFormColor}
      ColorPickerForFormBackground={ColorPickerForFormBackground}
      ColorPickerForFormColor={ColorPickerForFormColor}
    />
  );
}
