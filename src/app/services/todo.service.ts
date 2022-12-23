import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';
import {data} from '../data/data';  


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList():ToDo[]{
    let toDos=data;
    return toDos;
  }

  deleteToDo(id:number){
    console.log("Deleted")
  }




}
