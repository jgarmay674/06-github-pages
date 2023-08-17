import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  changeName(): void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // CUIDADO, con el ciclo de detección de Angular
    let etiquetas = document.querySelectorAll("dt").forEach(element => {
      element.style.fontWeight = 'bold';
    });
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
}
