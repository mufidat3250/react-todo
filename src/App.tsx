import { KeyboardEvent } from "react";
import styled from "styled-components";
import {
  addTodo,
  deleteTodo,
  todoEntity,
  toggleTodo,
} from "./store/todos.entity";

function App() {
  const todos = todoEntity.use();

  const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const text = e.currentTarget.value;
      if (!text) return;
      addTodo(text);

      e.currentTarget.value = "";
    }
  };

  const TodoText = styled.span<{ completed: boolean }>`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? "gray" : "black")};
  `;

  return (
    <div className="App">
      <h1>Hello Villagers! {todos.length}</h1>
      <input type="text" onKeyPress={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <TodoText completed={todo.completed}>{todo.text}</TodoText>
            <button onClick={() => deleteTodo(todo.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
