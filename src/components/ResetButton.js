import React from 'react';
import reset from '../assets/reset.svg'

export default function ResetButton({resetForm}) {
  return (
    <div className="reset-button">
      <button onClick={() => resetForm()}>RESET FORM <img src={reset} alt="reset icon"/></button>
    </div>
  )
}
