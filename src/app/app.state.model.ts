import { Todo } from './todo/todo.model';

export type uiStateViewMode = 'light' | 'dark';

export type UiState = {
  isLoading: boolean;
  error: string | null;
  viewMode: uiStateViewMode;
};

export type AppState = {
  todos: ReadonlyArray<Todo>;
  ui: UiState;
};