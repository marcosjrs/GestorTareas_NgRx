import { Todo } from '../model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo.reducer';
import * as fromFiltro from './filtro.reducer';
import * as fromFiltroActions from '../actions/filtro.actions';

//Este archivo servirá para unificar todos los reducers de la aplicación
//En la mayoría de los casos no se haría así, sino con lazyload, para que los users no autenticados puedan tener info...
export interface AppState {
  todos:Todo[],
  filtro:fromFiltroActions.filtrosValidos
}

export const reducers:ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};
