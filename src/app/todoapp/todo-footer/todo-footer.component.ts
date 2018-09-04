import { Component, OnInit } from '@angular/core';
import {filtrosValidos, SetFiltroAction} from '../../filter/filter.actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Todo} from '../model/todo.model';
import {BorrarCompletedTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['todos','completados','pendientes'];
  filtroActual: filtrosValidos;
  pendientes: number;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
        this.filtroActual = state.filtro;
        this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    const accion = new SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;

  }

  quitarCompletados() {
    const accion = new BorrarCompletedTodoAction();
    this.store.dispatch(accion);
  }
}
