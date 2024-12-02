import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loginUrl = 'http://localhost:3030/account'; 
  private tasksUrl = 'http://localhost:3030/tasks';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.loginUrl}?email=${email}&password=${password}`);
  }

  loadTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.tasksUrl);
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(this.tasksUrl, task);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.tasksUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.tasksUrl}/${id}`);
  }
}
