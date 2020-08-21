import React from "react";

function TodoItems(props) {
  if (props.status) {
    return (
      <p className={props.checked} value={props.id}>
        {props.description}
      </p>
    );
  } else {
    return (
      <p className={props.unchecked} value={props.id}>
        {props.description}
      </p>
    );
  }
}
export default TodoItems;
