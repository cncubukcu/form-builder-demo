import React from 'react'

export default function SettingsOpenClose({typeHandler, type, itemKey, handleElementClicked}) {
  return (
    <div>
      <button onClick={() => handleElementClicked()}>Settings</button>
    </div>
  )
}
