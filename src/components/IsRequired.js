import React from "react";

export default function IsRequired({
  itemKey,
  handleRequiredState,
  isRequired
}) {
  console.log(isRequired);
  return (
    <div className="IsRequired">
      <p>Required ?</p>
      <div
        className={`IsRequired-outer-div ${
          isRequired ? "background-main-yellow" : null
        }`}
        onClick={() => handleRequiredState(itemKey)}
      >
        <div
          className={
            isRequired
              ? "IsRequired-inner-div absolute-right"
              : "IsRequired-inner-div absolute-left"
          }
        ></div>
        <span style={{ color: isRequired ? "#f1af27" : null }}>
          {isRequired ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
}
