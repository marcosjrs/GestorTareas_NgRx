import * as fromTodo from "../actions/todo.action";
import { Todo } from "../model/todo.model";
import { TOOOGLE_ALL_TODO, BORRAR_COMPLETADOS_TODO } from '../actions/todo.action';

/** fake todos */
let todo1 = new Todo("tarea 1");
todo1.completado = true;
let todo2 = new Todo("tarea 2");
let todo3 = new Todo("tarea 3");
const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state: any = estadoInicial,
  action: fromTodo.Actions
): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const nuevoToDo = new Todo(action.texto);
      return [...state, nuevoToDo];

    case fromTodo.TOOOGLE_TODO:
      const todos = state.map((todo: Todo) => {
        return todo.id === action.id
          ? { ...todo, completado: !todo.completado }
          : todo;
      });
      return todos;

    case fromTodo.TOOOGLE_ALL_TODO:
      return state.map((todo: Todo) => {
        return { ...todo, completado: action.completado };
      });

    case fromTodo.EDITAR_TODO:
      const todosEditados = state.map((todo: Todo) => {
        return todo.id === action.id
          ? { ...todo, texto: action.texto }
          : todo;
      });
      return todosEditados;

    case fromTodo.BORRAR_TODO:
      return state.filter((todo: Todo) =>   todo.id !== action.id );

    case fromTodo.BORRAR_COMPLETADOS_TODO:
      return state.filter((todo: Todo) =>   !todo.completado );

    default:
      return state;
  }
}
