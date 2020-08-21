import React from "react";

function Todo(props) {
  const classes = [
    "todo",
    "todo__title",
    "todo__list",
    "todo__list-item",
    "todo__item",
    "todo__delete-button",
    "todo__modify-button",
    "todo__form",
    "todo__form-label",
    "todo__form-input",
    "todo__form-post-button",
  ];
  if (props.list === undefined) return <p>loading</p>;

  return (
    <div className={classes[0]}>
      <h1 className={classes[1]}>TODO List</h1>
      <form className={classes[7]}>
        <label className={classes[8]} htmlFor={classes[9]}>
          What do you need to remember?
        </label>
        <br />
        <input type="text" className={classes[9]} />
        <button className={classes[10]} onClick={props.eventListeners[0]}>
          ADD
        </button>
        <p>
          To modify please enter the new item here and press the modify button
          on the line you want to change.
        </p>
      </form>
      <ul className={classes[2]}>
        {
          (console.log(props.list),
          props.list.map((todoItem) => (
            <li className={classes[3]} key={todoItem.id}>
              <button
                className={classes[5]}
                onClick={props.eventListeners[1]}
                value={todoItem.id}
              >
                DELETE
              </button>
              <button
                className={classes[6]}
                onClick={props.eventListeners[2]}
                value={todoItem.id}
              >
                MODIFY
              </button>
              <p className={classes[4]} value={todoItem.id}>
                {todoItem.todo}
              </p>
            </li>
          )))
        }
      </ul>
    </div>
  );
}

export default Todo;
