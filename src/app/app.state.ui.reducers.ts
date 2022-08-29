import { createReducer, on } from '@ngrx/store';
import { UiState } from './app.state.model';
import *  as UiActions from './app.state.ui.actions';

const initialUiState: UiState = {
  isLoading: false,
  error: null,
  viewMode: 'light'
};

export const UiStateReducer = createReducer(
  initialUiState,
  on(UiActions.toggleViewMode, (UiState) => {
    return {
      ...UiState,
      viewMode: UiState.viewMode === 'light' ? 'dark' : 'light'
    };
  })
);