import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque gravida leo, vel molestie ultrices non.',
      loveIts: 3,
      created_at: new Date(2018, 9, 28, 15, 35)
    },
    {
      title: 'Mon deuxième post',
      content: 'Quisque consequat sed mauris vitae pulvinar.',
      loveIts: -3,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Vivamus eget leo elit. Duis in mattis massa. Class aptent taciti sociosqu ad litora tor nostra, per inceptos himenaeos.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }
}
