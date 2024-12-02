import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('service deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Deve chamar login com paramentros corretos', () => {
    const email = 'testerror.com';
    const password = '12345';

    service.login(email, password).subscribe();

    const req = httpMock.expectOne(`${service['loginUrl']}?email=${email}&password=${password}`);
    expect(req.request.method).toBe('GET');
  });

  it('Deve chamar loadTasks e retornar a lista de tasks', () => {
    const mockTasks = [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }];

    service.loadTasks().subscribe((tasks) => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne(service['tasksUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  it('Deve chamar createTask, verifica body e URL', () => {
    const newTask = { name: 'New Task' };

    service.createTask(newTask).subscribe((response) => {
      expect(response).toEqual(newTask);
    });

    const req = httpMock.expectOne(service['tasksUrl']);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newTask);
    req.flush(newTask);
  });

  it('Deve chamar updateTask, verifica body e URL', () => {
    const updatedTask = { name: 'Updated Task' };
    const id = 1;

    service.updateTask(id, updatedTask).subscribe((response) => {
      expect(response).toEqual(updatedTask);
    });

    const req = httpMock.expectOne(`${service['tasksUrl']}/${id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedTask);
    req.flush(updatedTask);
  });

  it('deve chamar deleteTask com URL e ID corretos', () => {
    const id = 1;

    service.deleteTask(id).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${service['tasksUrl']}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); 
  });
});