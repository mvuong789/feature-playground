import React from 'react';

import { ITodo } from './Todos.config';
import Todo from '../../components/todo/Todo';

type TodosProps = {
  todos: ITodo[]
};

const Todos = ({ todos }: TodosProps) => {
  const displayTodos = todos.map((todo) => {
    const { id } = todo;
    return (
      <Todo
        key={`todo-${id}`}
        todo={todo}
      />
    );
  });

  return (
    <div>
      {displayTodos}
    </div>
  )
};

export default Todos;
