import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened: boolean = false;

  listTitles = [{
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões da Galáxia",
    relevance: 98,
    age: 12,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem no Espaço']
  }, {
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões da Galáxia 2",
    relevance: 80,
    age: 0,
    parts: 2,
    categories: ['Épico', 'Documentário', 'Viagem no Espaço']
  }, {
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões da Galáxia 3",
    relevance: 55,
    age: 18,
    parts: 2,
    categories: ['Épico', 'Fantasia', 'Viagem no Tempo']
  }];

  setMenuState(state: boolean): void {
    this.menuOpened = state;
  }

  closeMenu(): void {
    this.menuOpened = false;
  }
}
