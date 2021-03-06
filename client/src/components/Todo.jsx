import React from "react";
import TodoItems from "./TodoItems";

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
    "todo__button-container",
    "todo__item--done",
    "todo__button-checked",
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
      </form>
      <ul className={classes[2]}>
        {
          (console.log(props.list),
          props.list.map((todoItem) => (
            <li className={classes[3]} key={todoItem.id}>
              <button
                className={classes[13]}
                onClick={props.eventListeners[3]}
                value={todoItem.id}
              ></button>
              <TodoItems
                id={todoItem.id}
                description={todoItem.description}
                checked={classes[12]}
                unchecked={classes[4]}
                status={todoItem.status}
              />
              <div className={classes[11]}>
                <button
                  className={classes[6]}
                  onClick={props.eventListeners[2]}
                  value={todoItem.id}
                ></button>
                <button
                  className={classes[5]}
                  onClick={props.eventListeners[1]}
                  value={todoItem.id}
                ></button>
              </div>
            </li>
          )))
        }
      </ul>
    </div>
  );
}

export default Todo;
