import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro-produto',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-produto',
    component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
