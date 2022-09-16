import { CadastrosService } from 'src/app/cadastrados/cadastro-services/cadastros.service';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroModel } from 'src/app/cadastrados/cadastro-model/cadastro.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'spa-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  contato: CadastroModel = new CadastroModel();
  cadastro:  Array<any> = new Array();
  contatoId: number = 0;

  constructor(
    private cadastroService: CadastrosService,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.contatoId = (params['contatoId']) ? params['contatoId'] : 0;
      }
    )

    this.obterCadastroPorId(this.contatoId);
  }

  Cadastrar() {
    this.cadastroService.cadastrarContato(this.contato)
    .subscribe((contato) =>{
      this.contato = new CadastroModel();
      this.listarCadastro();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  } 

  Atualizar() {
    this.cadastroService.atualizarCadastro(this.contatoId, this.contato)
    .subscribe(() =>{
      this.contato = new CadastroModel();
      this.listarCadastro();
    },
      err => {console.log('Erro ao alterar o aluno', err)})
  } 

  listarCadastro(){
    this.cadastroService.listarCadastro().subscribe(cadastrados =>{
      this.cadastro = cadastrados;
    }, err => {
        console.log('Erro ao Listar os Contatos', err);
    })
  }

  obterCadastroPorId(id: number) {
    this.http.get<CadastroModel>(`http://localhost:4000/cadastrados/${id}`)
    .subscribe((data) => {
      this.contato.id = data.id;
      this.contato.email = data.email;
      this.contato.nome = data.nome;
      this.contato.nomedaempresa = data.nomedaempresa;
      this.contato.numero = data.numero;
    }, err => {
        console.log('Erro ao obter o Contato por Id', err);
    })
  }
}
