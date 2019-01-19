import { Action } from "@ngrx/store";
import { Todo } from "../model/todo.model";

export const AGREGAR_TODO = "[TODO] Agregar todo";

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public texto: string) {}
}


export type Actions = AgregarTodoAction;
