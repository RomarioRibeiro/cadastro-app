import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';

const routes: Routes = [{
  path: '',
  component: PessoaListComponent
},
{
  path: 'novo',
  component: PessoaCadastroComponent
},
{
  path: ':id',
  component: PessoaCadastroComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
