import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    anime({
      targets: '.links-btn',
      translateX: [
        { value: -70, duration: 1200 },
        { value: 0, duration: 800 }
      ],
      rotate: '2turn',
      duration: 2000,
      delay: 500,
      loop: false
    });

    anime({
      targets: '#name .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 1500,
      delay: 500
    });
  }

  openURL( url: string ): void {
    window.open(url, '_blank');
  }
}
