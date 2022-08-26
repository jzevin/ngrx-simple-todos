import { createReducer, on } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { Todo } from './todo.model';

export const initialState: ReadonlyArray<Todo> = [];

export const TodoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (todos, todo) => {
    return [...todos, todo];
  }),
  // on(TodoActions.updateTodo, (state, todo) => ({
  //   ...state,
  //   todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  // })),
);
