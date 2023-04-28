import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 35;

  public get capitalizedName(): string {
    return String(this.name).toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }


  changeHeroe(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 90;
  }



}
