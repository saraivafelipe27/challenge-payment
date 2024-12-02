import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { DashboardComponent } from './dashboard.component';
import { ApiService } from '../../services/api.service';
import { TabelaPagamentosComponent } from 'src/app/shared/components/tabela-pagamentos/tabela-pagamentos.component';
import { ActionBarCriarEditarPagamentosComponent } from 'src/app/shared/components/action-bar-criar-editar-pagamentos/action-bar-criar-editar-pagamentos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, TabelaPagamentosComponent],
      imports: [FormsModule, HttpClientTestingModule, SharedModule], 
      providers: [ApiService],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});