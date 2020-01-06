import React from 'react'

export default function SettingsOpenClose({typeHandler, type, itemKey}) {
  return (
    <div>
      <button onClick={() => typeHandler(type, itemKey)}>Settings</button>
    </div>
  )
}
