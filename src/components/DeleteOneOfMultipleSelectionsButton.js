import React from "react";

export default function DeleteOneOfMultipleSelectionsButton({itemKey, index, deleteOneOfMultipleSelections}) {
  return (
    <div>
      <button onClick={() => deleteOneOfMultipleSelections(itemKey, index)}>Del</button>
    </div>
  );
}
