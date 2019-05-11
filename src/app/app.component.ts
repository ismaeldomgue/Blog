import { Component } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crée une application de type blog';
  posts = new Promise((resolve, reject) => {
    const data = [
      new Post('Mon Premier Post'), new Post('Mon Deuxième Post'),
      new Post('Mon Troisieme Post'), new Post('Et Encore Post')
    ];
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
