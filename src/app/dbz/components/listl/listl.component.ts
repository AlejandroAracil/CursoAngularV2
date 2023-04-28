import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-listl',
  templateUrl: './listl.component.html',
  styleUrls: ['./listl.component.css']
})
export class ListlComponent {

  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 100 }];

  @Output()
  public onDeleteCharacterEmitter: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string) {
    if (!id) return;

    this.onDeleteCharacterEmitter.emit(id);
  }


}
