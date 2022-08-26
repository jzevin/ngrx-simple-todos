import { AppState, selectTodos } from './todo/todo.selectors';
import { addTodo } from './todo/todo.actions';
import { Todo } from './todo/todo.model';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
  constructor(private store: Store<AppState>) {
    this.store.select(({todos})=>todos).pipe(tap((t)=>console.log(t)
    )).subscribe()
    
    this.todos$ = this.store.select(selectTodos);
  }
  ngOnInit() {}

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
}
