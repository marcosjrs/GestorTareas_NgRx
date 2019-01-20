import { Action } from "@ngrx/store";
import { Todo } from "../model/todo.model";

export const AGREGAR_TODO = "[TODO] Agregar todo";
export const TOOOGLE_TODO = "[TODO] Toogle todo";
export const TOOOGLE_ALL_TODO = "[TODO] Toogle all todo";
export const EDITAR_TODO = "[TODO] Editar todo";
export const BORRAR_TODO = "[TODO] Borrar todo";
export const BORRAR_COMPLETADOS_TODO = "[TODO] Borrar completados todo";

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public texto: string) {}
}

export class ToogleTodoAction implements Action {
  readonly type = TOOOGLE_TODO;
  constructor(public id: number) {}
}

export class ToogleAllTodoAction implements Action {
  readonly type = TOOOGLE_ALL_TODO;
  constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;
  constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;
  constructor(public id: number) {}
}

export class BorrarCompletadosTodoAction implements Action {
  readonly type = BORRAR_COMPLETADOS_TODO;
}

export type Actions =
  | AgregarTodoAction
  | ToogleTodoAction
  | EditarTodoAction
  | BorrarTodoAction
  | ToogleAllTodoAction
  | BorrarCompletadosTodoAction;
