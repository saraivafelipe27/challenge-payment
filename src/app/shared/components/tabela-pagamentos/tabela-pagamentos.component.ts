import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-pagamentos',
  templateUrl: './tabela-pagamentos.component.html',
  styleUrls: ['./tabela-pagamentos.component.scss']
})
export class TabelaPagamentosComponent  implements OnInit {
  @Input() tasks: any[] = []; // Dados recebidos do componente pai
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  currentPage: number = 1;
  pageSize: number = 5;
  sortOrder: 'asc' | 'desc' = 'asc';
  sortedField: string = '';

  get paginatedTasks() {
    return this.tasks
      .slice()
      .sort((a, b) => this.sortData(a, b))
      .slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.tasks.length / this.pageSize);
  }

  ngOnInit() {}

  changePage(page: number) {
    this.currentPage = page;
  }

  sort(field: string) {
    this.sortedField = field;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  sortData(a: any, b: any): number {
    const valueA = a[this.sortedField];
    const valueB = b[this.sortedField];
    if (!valueA || !valueB) return 0;

    return this.sortOrder === 'asc'
      ? valueA > valueB
        ? 1
        : -1
      : valueA < valueB
      ? 1
      : -1;
  }

  editTask(task: any) {
    this.edit.emit(task);
  }

  deleteTask(id: number) {
    this.delete.emit(id);
  }
}
