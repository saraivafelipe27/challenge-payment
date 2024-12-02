import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit{
  tasks: any[] = [];
  selectedTask: any = null;
  showActionBar: boolean = false;
  isEditMode = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.apiService.loadTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  onEdit(task: any) {
    this.selectedTask = { ...task };
    this.showActionBar = true;
  }

  openActionBarForEdit(task: any) {
    this.isEditMode = true;
    this.selectedTask = { ...task };
    this.showActionBar = true;
  }

  openActionBarForCreate() {
    this.isEditMode = false;
    this.selectedTask = {
      name: '',
      username: '',
      title: '',
      value: 0,
      date: '',
      image: 'https://robohash.org/' + Math.random() + '?size=150x150&set=set1',
      isPayed: false,
    };
    this.showActionBar = true;
  }

  onDelete(id: number) {
    this.apiService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      error: (err) => {
        console.error('Erro ao deletar a tarefa:', err);
      },
    });
  }

  saveChanges() {
    if (this.isEditMode) {
      this.apiService.updateTask(this.selectedTask.id, this.selectedTask).subscribe(() => {
        this.tasks = this.tasks.map((task) =>
          task.id === this.selectedTask.id ? this.selectedTask : task
        );
        this.closeActionBar();
      });
    } else {
      this.apiService.createTask(this.selectedTask).subscribe((newTask: any) => {
        this.tasks.push(newTask);
        this.closeActionBar();
      });
    }
  }

  closeActionBar() {
    this.showActionBar = false;
    this.selectedTask = null;
  }
}
