import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/folder/home', icon: 'home' },
    { title: 'amigos', url: '/amigos/amigos.page', icon: 'people' },
    { title: 'viagens', url: '/viagens/viagens.page', icon: 'paper-plane' },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
