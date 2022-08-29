import { AppState } from './../app.state.model';
import { Store } from '@ngrx/store';
import { Todo } from './todo.model';
import { Component, Input, OnInit } from '@angular/core';
import { deleteTodo, updateTodo } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Readonly<Todo> | null = null;
  isEditing: boolean = false;
  title: string | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.title = this.todo?.title;
  }

  onClickEdit() {
    this.isEditing = true;
  }

  onSave() {
    console.log('onSave');
    this.store.dispatch(
      updateTodo({
        ...this.todo!,
        title: this.title!
      })
    );
    this.isEditing = false;
  }

  onClickDelete() {
    this.store.dispatch(deleteTodo(this.todo as Todo));
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
