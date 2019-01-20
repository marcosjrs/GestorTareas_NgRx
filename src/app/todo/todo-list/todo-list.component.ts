import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../reducer/app.reducers";
import { Todo } from "../model/todo.model";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private store: Store<AppState>) {
    this.store.select("todos").subscribe(todos => (this.todos = todos));
  }

  ngOnInit() {}
}
