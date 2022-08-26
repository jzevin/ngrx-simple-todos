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
  constructor(private store: Store<{todos:[]}>) {
    this.store.select(({todos})=>todos).pipe(tap((t)=>console.log(t)
    )).subscribe()
    
    this.todos$ = this.store.select(selectTodos);
  }
  ngOnInit() {}

  onAddTodo() {
    const id = Math.random();
    this.store.dispatch(addTodo({
      id: `${id}`,
      title: `Todo: ${id}`,
      isComplete: id < 0.5 ? true : false,
      createdAt: new Date(),
      modifiedAt: new Date()
    }))
  }
}
