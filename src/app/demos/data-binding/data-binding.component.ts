import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

 public contador : number = 0;

 aumentar(){
   this.contador++;
 }

 zerar(){
   this.contador = 0;
 }

}
