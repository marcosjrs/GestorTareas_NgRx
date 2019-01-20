import { Action } from "@ngrx/store";
import { Todo } from "../model/todo.model";

export const AGREGAR_TODO = "[TODO] Agregar todo";
export const TOOOGLE_TODO = "[TODO] Toogle todo";

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public texto: string) {}
}

export class ToogleTodoAction implements Action {
  readonly type = TOOOGLE_TODO;
  constructor(public id: number) {}
}


export type Actions = AgregarTodoAction | ToogleTodoAction;
