import React from 'react';

import { ITodo } from './Todos.config';

type TodosProps = {
  todos: ITodo[]
};

const Todos = ({ todos }: TodosProps) => {
  const displayTodos = todos.map((todo) => {
    const { id, text, dateAdded, done } = todo;
    return (
      <li key={`todo-${id}`}>
        <div>{text}</div>
        <div>{dateAdded.toISOString()}</div>
        <div>{done.toString()}</div>
      </li>
    )
  });

  return (
    <ul>
      {displayTodos}
    </ul>
  )
};

export default Todos;
