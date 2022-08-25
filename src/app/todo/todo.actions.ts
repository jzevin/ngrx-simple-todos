import { Todo } from './todo.model';
import { createAction, props } from "@ngrx/store";


export const addTodo = createAction('[Todo] Add', props<Todo>());
export const updateTodo = createAction('[Todo] Update', props<Todo>());
export const deleteTodo = createAction('[Todo] Delete', props<Todo>());
export const toggleTodo = createAction('[Todo] Toggle', props<Todo>());
