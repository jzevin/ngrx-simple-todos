import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from './todo.model';

export type AppState = {
  todos: ReadonlyArray<Todo>;
};

// const selectTodoss = createFeatureSelector<ReadonlyArray<Todo>>('todos');

export const selectTodos = createSelector(
  (state: AppState) => state.todos,
  (todos) => todos
);