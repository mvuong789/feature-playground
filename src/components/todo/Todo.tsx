import React from 'react';

import { ITodo } from '../../features/todos/Todos.config';
import styles from './Todo.module.sass';

type TodoProps = {
  todo: ITodo
};

const Todo = ({ todo }: TodoProps) => {
  const { text, dateAdded, done } = todo;

  return (
    <article className={styles.todo}>
      <span>{text}</span>
      <span>{dateAdded.toString()}</span>
      <span>{done.toString()}</span>
    </article>
  )
};

export default Todo;
