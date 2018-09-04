import { Component, OnInit } from '@angular/core';
import {ToggleAllTodoAction} from './todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducers';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styles: []
})
export class TodoappComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggeAll() {
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion);
  }
}
