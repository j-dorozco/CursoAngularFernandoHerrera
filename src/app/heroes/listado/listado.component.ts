import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: String[] = ['spiderman','ironman','hulk','thor', 'capitan america']; //arreglo de string


  heroeBorrado: String | undefined ='';
  borrarHeroe(){
  //this.heroes.pop(); //este elemina el ultimo elemto de la lista
  //this.heroes = []; //con este vuelve la lista vacia

  this.heroeBorrado = this.heroes.shift();


  }
}




