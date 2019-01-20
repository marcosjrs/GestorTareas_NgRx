import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Todo } from "../model/todo.model";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../reducer/app.reducers";
import { ToogleTodoAction } from "../actions/todo.action";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;
  @ViewChild("inputEdit") inputEdit: ElementRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(value =>
      this.store.dispatch(new ToogleTodoAction(this.todo.id))
    );
  }

  editar() {
    this.editando = !this.editando;
    setTimeout(() => {
      this.inputEdit.nativeElement.select();
    }, 0);
  }

  terminarEdicion() {
    this.editando = false;
  }
}
