import { entity, persistence } from "simpler-state";
import { ITodo } from "../types";

export const todoEntity = entity<ITodo[]>(
  [
    {
      id: "1sjkssk",
      text: "Learn typescript",
      completed: false,
    },
  ],
  [persistence("mufidat-todo")]
);

// actions
// export const addTodo = (text: string) =>
//   todoEntity.set((store) => [
//     ...store,
//     { id: Math.random().toString(36).substring(2), text, completed: false },
//   ]);
export const addTodo = (text: string) =>
  todoEntity.set((store) =>
    store.concat({
      id: Math.random().toString(36).substring(2),
      text,
      completed: false,
    })
  );

export const toggleTodo = (id: string) =>
  todoEntity.set((store) =>
    store.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    })
  );

export const deleteTodo = (id: string) =>
  todoEntity.set((store) => store.filter((todo) => todo.id !== id));
