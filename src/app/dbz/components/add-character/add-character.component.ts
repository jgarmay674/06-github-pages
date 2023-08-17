import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: 'Videl',
    power: 14_000
  }

  emitCharacter():void {
    if (this.character.name.length === 0) return; // controlamos que el nombre no esté vacio.
    this.onNewCharacter.emit(this.character);
    this.character = {id: '', name: '', power: 0 };
  }

}
