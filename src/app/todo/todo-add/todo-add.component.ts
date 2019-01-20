import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../reducer/app.reducers";
import { Todo } from "../model/todo.model";
import { AgregarTodoAction } from "../actions/todo.action";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.txtInput = new FormControl("", Validators.required);
  }

  agregarTodo() {
    if (!this.txtInput.valid) {
      return;
    }
    const action = new AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(action);
  }
}
