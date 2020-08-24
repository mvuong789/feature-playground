import React from 'react';

import { ITodo } from '../../features/todos/Todos.config';

type TodoProps = {
  todo: ITodo
};

const Todo = ({ todo }: TodoProps) => {
  const { text, dateAdded, done } = todo;

  return (
    <article>
      <span>{text}</span>
      <span>{dateAdded.toString()}</span>
      <span>{done.toString()}</span>
    </article>
  )
};

export default Todo;
