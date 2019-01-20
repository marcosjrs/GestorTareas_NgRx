import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../reducer/app.reducers";
import * as fromFiltro from "../actions/filtro.actions";
import { SetFiltroAction } from "../actions/filtro.actions";

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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select("filtro")
      .subscribe(filtro => (this.filtroActual = filtro));
  }

  setFiltro(filtro: fromFiltro.filtrosValidos) {
    this.store.dispatch(new SetFiltroAction(filtro));
  }
}
