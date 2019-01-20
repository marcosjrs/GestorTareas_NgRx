//Se trata de "manejar" el estado del filtro que se está aplicando. A igual que en todos.reducer "se maneja" el estado de los Todos
import * as fromFiltro from "../actions/filtro.actions";
const estadoInicial: fromFiltro.filtrosValidos = "todos";

export function filtroReducer(
  state = estadoInicial,
  action: fromFiltro.Actions
) {
  switch (action.type) {
    case fromFiltro.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }
}
