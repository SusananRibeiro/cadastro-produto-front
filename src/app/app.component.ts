import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from './models/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private codigo = 1;
  produtos: Produto[] = [];

  @ViewChild("formulario") formulario: NgForm | undefined;

  addProduto(formulario: NgForm) {
    if (formulario.valid) {
      let produto: Produto = formulario.value;
      if (produto.codigo > 0) {
        this.excluir(produto);
        this.produtos.push(produto);
      } else {
        this.produtos.push({ 
          ...formulario.value, 
          codigo: this.codigo++ 
        })
      }
      this.formulario?.resetForm();
    }
  }

  editar(item: Produto) {
    if (this.formulario) {
      this.formulario.setValue(item);
    }
  }

  excluir(item: Produto) {
    this.produtos = this.produtos.filter(p => p.codigo != item.codigo);
  }

}
