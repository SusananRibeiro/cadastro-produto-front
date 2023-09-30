import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

// Nessa parte vai chamar o serviço
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent implements OnInit{

  private service: ProdutoService = inject(ProdutoService);
  public produtos: Produto[] = [];
  @ViewChild("formulario") formulario: NgForm | undefined;

  // Vazio
  ngOnInit(): void {
    this.get();
  }

  // Método GET (READ/CONSULTA)
  public get() {
    this.service.get().subscribe(
      (response: any) => {
        this.produtos = response;
      },
      (error: any) => {
        alert("Erro ao buscar produtos!")
      }
    )
  }

    // Método POST e PUT (CREATE/INSERIR) e PUT (UPDATE/ATUALIZAR)
    public save(formulario: NgForm) {
      if(!formulario.valid) {
        alert("Dados inválidos")
        return;
      }
      this.service.save(formulario.value, formulario.value.id).subscribe(
        (response: any) => {
          alert("Produto salvo com sucesso.")
          formulario.reset();
          this.get();
        },
        (error: any) => {
          alert("Erro ao salvar produto. " + error)
        }
      )
    }

  // Método DELETE (DELETE/REMOVER)
  public delete(id: number) {
    this.service.delete(id).subscribe(
      (response) => {
        alert("Produto excluido com sucesso");
        this.get();
      },
      (error) => {
        alert("Erro ao excluir o produto. " + error);
      }
    )
  }

}
