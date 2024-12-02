import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar-criar-editar-pagamentos',
  templateUrl: './action-bar-criar-editar-pagamentos.component.html',
  styleUrls: ['./action-bar-criar-editar-pagamentos.component.scss']
})
export class ActionBarCriarEditarPagamentosComponent {
  @Input() showActionBar: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() selectedTask: any = null;

  @Output() saveChanges = new EventEmitter();
  @Output() closeActionBar = new EventEmitter();

  onSave() {
    this.saveChanges.emit();
  }

  onCancel() {
    this.closeActionBar.emit();
  }
}
