import { AppState } from './../app.state.model';
import { createSelector } from '@ngrx/store';

// const selectTodoss = createFeatureSelector<ReadonlyArray<Todo>>('todos');

export const selectTodos = createSelector(
  (state: AppState) => state.todos,
  (todos) => todos
);