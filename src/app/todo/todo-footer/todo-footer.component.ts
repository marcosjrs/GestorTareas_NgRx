import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../reducer/app.reducers";
import * as fromFiltro from "../actions/filtro.actions";
import { SetFiltroAction } from "../actions/filtro.actions";
import { Todo } from "../model/todo.model";
import { BorrarCompletadosTodoAction } from "../actions/todo.action";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  //fromFiltro.filtrosValidos unos string determinados 'todos' | 'completados' | 'pendientes'
  filtrosValidos: fromFiltro.filtrosValidos[] = [
    "todos",
    "completados",
    "pendientes"
  ];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  setFiltro(filtro: fromFiltro.filtrosValidos) {
    this.store.dispatch(new SetFiltroAction(filtro));
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(element => !element.completado).length;
  }

  borrarCompletados() {
    this.store.dispatch(new BorrarCompletadosTodoAction());
  }
}
