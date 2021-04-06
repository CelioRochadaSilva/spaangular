import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';



@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;
  fechaTabela: boolean = false;
  

  listaAlunos: alunos [] = [
    { nome: 'Carlos', idade: 57, email: 'carlos.tama@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Eduardo', idade: 65, email: 'dude@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Paulo ', idade: 31, email: 'pp2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Cassio', idade: 45, email: 'csste3@gmail.com', curso: 'Sistemas da informacao' }
   
  ];
  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];
  
  ngOnInit(): void {
    this.valor = 8;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }
    
}










