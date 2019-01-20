import { Todo } from '../model/todo.model';

//Este archivo servirá para unificar todos los reducers de la aplicación
//En la mayoría de los casos no se haría así, sino con lazyload, para que los users no autenticados puedan tener info...
export interface AppState {
  todos:Todo[]
}
