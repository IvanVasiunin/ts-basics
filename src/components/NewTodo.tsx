import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);

  const toDoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    ctx.addToDo(enteredText);
    toDoTextInputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={toDoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
