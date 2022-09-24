import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css'],
})
export class PessoaListComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  pessoa: any [] = [];

  constructor(
    private pessoaService: PessoaService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.carregarLista();
   }


  carregarLista() {
    this.pessoaService.getAll()
      .then(obj => {
        this.pessoa = obj;
      });
  }

  remove(pessoa: any) {
    this.alert.showConfirmDelete(pessoa.nome, () => this.executeRemove(pessoa));
  }

  executeRemove(pessoa: any){
    try {
      const index = this.pessoa.indexOf(pessoa);
      this.pessoa.splice(index, 1);
      this.pessoaService.delete(pessoa.id);

      this.toast.showSucess('pessoa removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o pessoa');
    }
  }



}
