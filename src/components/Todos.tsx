import { useContext } from "react";
import ListItem from "./ListItem";

import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <ListItem key={item.id} text={item.text} onRemove={ctx.removeToDo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
