import { Component, EventEmitter, Output, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { 
  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Chi-chi',
    power: 3_000
  }]

/*   emitIndex(index: number): void {
    this.onDeleteIndex.emit(index);
  } */

  emitId(id: string): void {
    this.onDeleteId.emit(id);
  }
}
