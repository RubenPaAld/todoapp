import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const EDITAR_TODO = '[TODO] editar todo';
export const BORRAR_TODO = '[TODO] borrar todo';
export const BORRAR_COMPLETED_TODO = '[TODO] borrar todos completados';

export class AgregarTodoAction implements Action {
  readonly  type = AGREGAR_TODO;

  constructor(public  txt: string) {}
}

export class ToggleTodoAction implements Action {
  readonly  type = TOGGLE_TODO;

  constructor(public  id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly  type = TOGGLE_ALL_TODO;

  constructor(public  completado:boolean) {}
}

export class BorrarTodoAction implements Action {
  readonly  type = BORRAR_TODO;

  constructor(public  id: number) {}
}

export class BorrarCompletedTodoAction implements Action {
  readonly  type = BORRAR_COMPLETED_TODO;

}

export class EditTodoAction implements Action {
  readonly  type = EDITAR_TODO;

  constructor(public  id: number, public txt: string) {}
}

export type Acciones = AgregarTodoAction |
                        ToggleTodoAction |
                        ToggleAllTodoAction |
                        EditTodoAction |
                        BorrarTodoAction |
                        BorrarCompletedTodoAction;
