import React from "react";
import './TodoList.css';

interface TodoListProp {
  items: Array<{ id: string, text: string }>;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProp> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
