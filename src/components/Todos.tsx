import Todo from "../models/todo";
import ListItem from "./ListItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ListItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default Todos;
