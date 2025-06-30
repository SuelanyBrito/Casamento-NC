import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../../sharepage/navbar/navbar.component";

@Component({
  selector: 'app-casal',
  templateUrl: './casal.component.html',
  imports: [
    NavbarComponent
  ],
  styleUrls: ['./casal.component.scss']
})
export class CasalComponent {

  constructor() { }

  carouselImages = [
    'assets/img/carousel/1.png',
    'assets/img/carousel/11.png'
  ];
  currentImage = 0;

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
  }

  prevImage() {
    this.currentImage = (this.currentImage - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

}
