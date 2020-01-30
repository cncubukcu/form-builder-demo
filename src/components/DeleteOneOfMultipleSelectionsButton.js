import React from "react";
import IconSelectionDelete from "./Icons/IconSelectionDelete";

export default function DeleteOneOfMultipleSelectionsButton({
  itemKey,
  index,
  deleteOneOfMultipleSelections
}) {
  return (
    <div
      className="delete-selections-button"
      onClick={() => deleteOneOfMultipleSelections(itemKey, index)}
    >
      <IconSelectionDelete />
    </div>
  );
}
