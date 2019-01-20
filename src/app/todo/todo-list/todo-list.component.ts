import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../reducer/app.reducers";
import { Todo } from "../model/todo.model";
import { filtrosValidos } from '../actions/filtro.actions';

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  filtro: filtrosValidos

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state =>{
      this.todos = state.todos;
      this.filtro = state.filtro;
    } );
  }

  ngOnInit() {}
}
