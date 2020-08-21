import React from "react";

function Todo(todo, eventListeners) {
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
  return (
    <div className={classes[0]}>
      <h1 className={classes[1]}>TODO List</h1>
      <form className={classes[7]}>
        <label className={classes[8]} htmlFor={classes[9]}>
          What do you need to remember?
        </label>
        <br />
        <input type="text" className={classes[9]} />
        <button className={classes[10]} onClick={eventListeners[0]}>
          ADD
        </button>
      </form>
      <ul className={classes[2]}>
        {todo.map((todoItem) => {
          <li className={classes[3]} key={todoItem.id}>
            <button
              className={classes[5]}
              onClick={eventListeners[1]}
              value={todoItem.id}
            >
              DELETE
            </button>
            <button
              className={classes[6]}
              onClick={eventListeners[2]}
              value={todoItem.id}
            >
              MODIFY
            </button>
            <p className={classes[4]}>{todoItem.todo}</p>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
