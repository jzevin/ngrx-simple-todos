import { AppState, UiState } from './app.state.model';
import { createSelector } from '@ngrx/store';

export const selectUiState = createSelector(
  (state: AppState) => state.ui,
  (uiSate: UiState) => uiSate 
);