import { Component, OnInit } from '@angular/core';
import { Cep } from '../cep.model';
import { CepService } from '../cep.service';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep: Cep = {
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  }

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit(): void {
  }

  buscar(cep:any, form: any){
      this.cepService.buscar(cep).subscribe((dados) => this.preencheForm(dados, form));
  }

  preencheForm(dados:any, form:any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      localidade: dados.localidade,
      bairro: dados.bairro,
      uf: dados.uf

    })
  }

}
