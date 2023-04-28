import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

//El decorador del servicio: ()provideiNRoute es que siempre se da ese valor/instancia:
@Injectable({ providedIn: 'root' })
export class dbzService {

  public characters: Character[] = [{
    name: 'Krillin', power: 500, id: uuid()
  }, {
    name: 'Goku', power: 9500, id: uuid()
  }, {
    name: 'Vegetta', power: 7200, id: uuid()
  }];


  addCharacter(char: Character): void {
    const newChar: Character = {
      id: uuid(),
      ...char
    }
    console.log(newChar);
    this.characters.push(newChar);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter((char, charIndex) => ![id].includes(char.id || ''))
    // this, this.characters.splice(index, 1);
  }





  constructor() { }

}