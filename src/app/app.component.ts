import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Menu principal - "APP-Estacionamento"';
  modaltitulo = ""
  primeira  = ""
  segunda = ""
  terceira = ""

  configuraModal( opcao: Number ){
    if (opcao == 0){
      this.modaltitulo = "Cadastro de Clientes";  
      this.primeira = "CPF"
      this.segunda = "Nome"
      this.terceira = "Telefone"
    }else if (opcao == 1){
      this.modaltitulo = "Cadastro de Veículos";  
      this.primeira = "Placa"
      this.segunda = "Modelo"
      this.terceira = "Cor"
    }else if (opcao == 2){
        this.modaltitulo = "Cadastro de Patio";  
        this.primeira = "Descricao"
        this.segunda ="Quantidade"
        this.terceira = "Valor / Hora"
    }    
  }
}
