import React from "react";
import IconSettingsButton from "./Icons/IconSettingsButton";

export default function SettingsOpenClose({ handleElementClicked }) {
  return (
    <div>
      <div
        className="form-element-settings"
        onClick={() => handleElementClicked()}
      >
        <IconSettingsButton />
      </div>
    </div>
  );
}
