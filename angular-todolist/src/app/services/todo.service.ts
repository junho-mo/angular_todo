import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../modules/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    // return [
    //   {
    //     id:1,
    //     title:'Todo 1',
    //     completed:true
    //   },
    //   {
    //     id:2,
    //     title:'Todo 2',
    //     completed:false
    //   },
    //   {
    //     id:3,
    //     title:'Todo 3',
    //     completed:false
    //   }
    // ];

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  // ----------------------------------------------------------------------
  // Toggle Completed
  // ----------------------------------------------------------------------
  toggleCompleted(todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log('toggleCompleted url', url);
    return this.http.put(url, todo, httpOptions);
  }

  // ----------------------------------------------------------------------
  // Delete Todo
  // ----------------------------------------------------------------------
  deleteTodo(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log('deleteTodo url', url);
    return this.http.delete<Todo>(url, httpOptions);
  }

  // ----------------------------------------------------------------------
  // Add Todo
  // ----------------------------------------------------------------------
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
