import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 75_000
    }, {
        id: uuid(),
        name: 'Gohan',
        power: 1_950_000
    }, {
        id: uuid(),
        name: 'Piccolo',
        power: 1_200_000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 150_000_000
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 3_000_000
    }, {
        id: uuid(),
        name: 'Frieza',
        power: 120_000_000
    },];

    addCharacter(character: Character): void {
        //const newCharacter: Character = { id: uuid(), ...character } // operador 'spread'
        this.characters.push(character);
    }

/*     onDeleteIndex(index: number): void {
        this.characters.splice(index, 1);
    } */

    deleteCharacter(id: string): void {
        this.characters = this.characters.filter(character => character.id != id);
    } 

}