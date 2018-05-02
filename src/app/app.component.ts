import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit() {
    anime({
      targets: '#name .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay: 1500
    });
  }
}
