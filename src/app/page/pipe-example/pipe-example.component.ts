import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {
  number = 0;
  text = 'hello world';
  pessoa = {
    nome: 'guilherme',
    idade: '23',
    profissao: 'front-end'
  }
  nomes = ['guilherme']
  date = new Date();
  constructor(
    private uperCasePipe: UpperCasePipe
  ){

  }
  ngOnInit(): void {
    // this.text = this.uperCasePipe.transform(this.text)
  }
  mudarValor(){
    this.text = 'novo texto'
  }
  add(text: string) {
    console.log(text);
    
    this.nomes.push(text)
  
  }

}
