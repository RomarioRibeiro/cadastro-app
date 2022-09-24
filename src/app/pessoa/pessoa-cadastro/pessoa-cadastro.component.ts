import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/core/models/pessoa.model';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { PessoaService } from '../pessoa.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css'],
})
export class PessoaCadastroComponent implements OnInit {
  pessoa = new Pessoa();
  idpesso: string;
  constructor(
    private pessoaService: PessoaService,
    private alert: AlertService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {

    // eslint-disable-next-line @typescript-eslint/dot-notation
    this.idpesso = this.route.snapshot.params['id'];
    this.title.setTitle('Pessoa  Atulizada');
    if (this.idpesso) {
      this.carregarCliente(this.idpesso);
    }
    else { }
  }
  carregarCliente(id: string) {
    this.pessoaService.getById(id)
      .then(obj => {
        this.pessoa = obj;
      });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get editando() {
    return Boolean(this.pessoa.id);
  }
  async onSubmit() {
    try {
      let result: Pessoa;
      if (this.idpesso) {
        result = await this.pessoaService.update(this.idpesso, this.pessoa);
        this.toast.showSucess('Pessoa atualizado com sucesso');
      } else {
        result = await this.pessoaService.create(this.pessoa);
        this.toast.showSucess('Pessoa cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar Pessoa');
    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Pessoa: ${this.pessoa.nome}`);
  }

}
