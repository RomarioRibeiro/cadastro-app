import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';


@NgModule({
  declarations: [
    PessoaListComponent,
    PessoaCadastroComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule,
    IonicModule

  ]
})
export class PessoaModule { }
