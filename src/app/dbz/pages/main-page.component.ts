import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageDbz {

  //utilizamos el servicio:
  constructor(private dbzService: dbzService) {

  }


  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCharacter(char: Character): void {
    this.dbzService.addCharacter(char)
  }


}