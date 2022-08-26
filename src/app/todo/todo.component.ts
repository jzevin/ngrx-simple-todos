import { AppState, selectTodos } from './todo.selectors';
import { Store } from '@ngrx/store';
import { Todo } from './todo.model';
import { Component, Input, OnInit } from '@angular/core';
import { updateTodo } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Readonly<Todo> | null = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  onChangeIsComplete() {
    console.log('onChangeIsComplete');
    console.log(this.todo);
    
    this.store.dispatch(
      updateTodo({
        ...this.todo!,
        isComplete: !this.todo!.isComplete
      })
    );
  }

}
