import { CadastrosService } from 'src/app/cadastrados/cadastro-services/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { CadastroModel } from 'src/app/cadastrados/cadastro-model/cadastro.model';
@Component({
  selector: 'spa-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  contato: CadastroModel = new CadastroModel();
  cadastro:  Array<any> = new Array();
  constructor(private cadastroService: CadastrosService) { }

  ngOnInit(): void {
  }
  Cadastrar(){
    console.log(this.contato);
    this.cadastroService.cadastrarContato(this.contato).subscribe(contato =>{
      this.contato = new CadastroModel();
      this.listarCadastro();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  } 
  listarCadastro(){
    this.cadastroService.listarCadastro().subscribe(cadastrados =>{
      this.cadastro = cadastrados;
    }, err => {
        console.log('Erro ao Listar os Contatos', err);
    })                   
  }
}
