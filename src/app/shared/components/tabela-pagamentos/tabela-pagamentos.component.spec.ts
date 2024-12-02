import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPagamentosComponent } from './tabela-pagamentos.component';

describe('TabelaPagamentosComponent', () => {
  let component: TabelaPagamentosComponent;
  let fixture: ComponentFixture<TabelaPagamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaPagamentosComponent]
    });
    fixture = TestBed.createComponent(TabelaPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
