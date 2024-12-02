import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarCriarEditarPagamentosComponent } from './action-bar-criar-editar-pagamentos.component';

describe('ActionBarCriarEditarPagamentosComponent', () => {
  let component: ActionBarCriarEditarPagamentosComponent;
  let fixture: ComponentFixture<ActionBarCriarEditarPagamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionBarCriarEditarPagamentosComponent]
    });
    fixture = TestBed.createComponent(ActionBarCriarEditarPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
