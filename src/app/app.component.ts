import { toggleViewMode } from './app.state.ui.actions';
import { selectUiState } from './app.state.ui.selectors';
import { AppState, UiState, uiStateViewMode } from './app.state.model';
import { selectTodos } from './todo/todo.selectors';
import { addTodo } from './todo/todo.actions';
import { Todo } from './todo/todo.model';
import { Component, HostBinding } from '@angular/core';
import { first, map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-simple-todos';
  todos$: Observable<ReadonlyArray<Todo>>;
  titleInput = '';
  uiStateViewMode$: Observable<uiStateViewMode> = this.store.select(selectUiState).pipe(map(state => state.viewMode));

  @HostBinding('class') get getViewModeClass() {
    let val;
    this.uiStateViewMode$.pipe(first()).subscribe(mode => val = mode);
    return val;
  }

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(selectTodos);
  }
  
  ngOnInit() {
    for (let i = 0; i < Array(5).length; i++) {
      this.titleInput = `This is a Todo - ${i+1}`;
      this.onAddTodo();
    }

  }

  onAddTodo() {
    if (!this.titleInput) return;
    const id = Math.random();
    this.store.dispatch(addTodo({
      id: `${id}`,
      title: this.titleInput,
      isComplete: false,
      createdAt: new Date(),
      modifiedAt: new Date()
    }));
    this.titleInput = '';
  }

  onClickToggleViewMode() {
    this.store.dispatch(toggleViewMode());
  }
}
