import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "./reducer/app.reducers";
import { ToogleAllTodoAction } from "./actions/todo.action";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styles: []
})
export class TodoComponent implements OnInit {
  chkToogleAll: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkToogleAll = new FormControl();
    this.chkToogleAll.valueChanges.subscribe(valor => this.toogleAll());
  }

  toogleAll() {
    this.store.dispatch(new ToogleAllTodoAction(this.chkToogleAll.value));
  }
}
