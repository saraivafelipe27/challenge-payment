import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaPagamentosComponent } from './components/tabela-pagamentos/tabela-pagamentos.component';
import { ActionBarCriarEditarPagamentosComponent } from './components/action-bar-criar-editar-pagamentos/action-bar-criar-editar-pagamentos.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [TabelaPagamentosComponent, ActionBarCriarEditarPagamentosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TabelaPagamentosComponent, ActionBarCriarEditarPagamentosComponent], 
})
export class SharedModule { }
