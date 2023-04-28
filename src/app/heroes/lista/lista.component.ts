import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public heroesNames: string[] = ['Ironman', 'Hulk', 'Thor', 'Spiderman', 'Butman'];
  public heroesNamesDeleted: string[] = [];
  public deletedHero?: string;


  removeLastHeroe(): void {
    this.deletedHero = this.heroesNames.pop();

  }
}
