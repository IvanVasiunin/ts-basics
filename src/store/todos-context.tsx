import React, { useState } from "react";
import Todo from "../models/todo";

type ToDoContextObj = {
  items: Todo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
}

export const TodosContext = React.createContext<ToDoContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (toDoText: string) => {
    const newToDo = new Todo(toDoText);

    setTodos((prevToDos) => [...prevToDos, newToDo]);
  };

  const removeToDoHandler = (id: string) => {
    setTodos((prevToDoList) => prevToDoList.filter((item) => item.id !== id));
  };

  const contextValues: ToDoContextObj = {
    items: todos,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler,
  };

  return (
    <TodosContext.Provider value={contextValues}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;