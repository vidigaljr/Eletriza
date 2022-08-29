import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroModel } from '../cadastro-model/cadastro.model';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
 
  constructor(private http: HttpClient) {
}
  cadastrarContato(contato: CadastroModel): Observable<any>{
  return this.http.post("http://localhost:4000/cadastrados/", contato)
 }

  listarCadastro(): Observable<any>{
    return this.http.get("http://localhost:4000/cadastrados");
  }
  atualizarCadastro(id:any, contato: CadastroModel): Observable<any>{
    return this.http.put("http://localhost:4000/cadastrados/".concat(id), contato);
  }

  removerCadastro(id: any): Observable<any>{
    return this.http.delete("http://localhost:4000/cadastrados/".concat(id));
  }
}

