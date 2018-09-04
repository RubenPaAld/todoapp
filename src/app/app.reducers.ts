import {Todo} from './todoapp/model/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import * as fromTodo from './todoapp/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import {filtrosValidos} from './filter/filter.actions';

export interface AppState {
  todos: Todo[]
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer,
};
