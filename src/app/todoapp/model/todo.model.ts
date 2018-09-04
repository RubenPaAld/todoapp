

export class Todo {

  private static count = 0;

  id: number;
  txt: string;
  completado: boolean;

  constructor(txt: string) {
    this.txt = txt.charAt(0).toUpperCase() + txt.slice(1);
    this.completado = false;
    this.id = Todo.count++;
  }
}
