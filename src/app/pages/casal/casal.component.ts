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
    'assets/img/carousel/70.cmyk.webp',
    'assets/img/carousel/71.cmyk.webp',
    'assets/img/carousel/57.cmyk.webp',
    'assets/img/carousel/64.cmyk.webp',
    'assets/img/carousel/35.cmyk.webp',
    'assets/img/carousel/3.cmyk.webp',
    'assets/img/carousel/4.cmyk.webp'
  ];
  currentImage = 0;

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
  }

  prevImage() {
    this.currentImage = (this.currentImage - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

}
