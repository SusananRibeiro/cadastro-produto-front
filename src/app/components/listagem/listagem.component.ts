import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  @Input() colunas: string[] = [];
  @Input() dados: any[] = [];
  @Output() onExcluir = new EventEmitter();
  @Output() onEditar = new EventEmitter();

  editar(item: any) {
    this.onEditar.emit(item);
  }
  
  excluir(item: any) {
    this.onExcluir.emit(item);
  }

}
