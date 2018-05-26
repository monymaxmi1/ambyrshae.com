import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements AfterViewInit {

  ngAfterViewInit() {
    // anime({
    //   targets: '#name .lines path',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'linear',
    //   duration: 2000,
    //   delay: 1500
    // });
  }
}
