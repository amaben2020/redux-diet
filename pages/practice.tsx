import { Spinner } from 'flowbite-react';
import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchAllTodos } from '../features/todos/todosAction';

const Practice = () => {
  const { todos, loading, error } = useAppSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <div>
      {loading && (
        <div style={{ width: 160 }}>
          Loading ...
          <Spinner color='info' size='sm' aria-label='Info spinner example' />
        </div>
      )}
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default Practice;
