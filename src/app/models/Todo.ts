export class Todo {
  id: number;
  title: string;
  isDone: boolean;
  isFound: boolean;

  constructor( id, title ) {
    this.id = id;
    this.title = title;
    this.isDone = false;
    this.isFound = false;
  }
}
