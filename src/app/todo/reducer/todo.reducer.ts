import * as fromTodo from "../actions/todo.action";
import { Todo } from '../model/todo.model';

const estadoInicial: Todo[] = [];

export function todoReducer(state: any = estadoInicial, action: fromTodo.Actions):Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const nuevoToDo = new Todo(action.texto);
      return [...state, nuevoToDo];

    default:
      return state;
  }
}
