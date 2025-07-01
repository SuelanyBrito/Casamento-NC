import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from "../../sharepage/navbar/navbar.component";

@Component({
  selector: 'app-casal',
  templateUrl: './casal.component.html',
  styleUrls: ['./casal.component.scss'],
  standalone: true,
  imports: [NavbarComponent]
})
export class CasalComponent implements OnInit, OnDestroy {
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
  private intervalId: any;

  constructor() {}

  ngOnInit(): void {
    // Começa a trocar automaticamente a cada 4 segundos
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  ngOnDestroy(): void {
    // Limpa o intervalo quando o componente for destruído
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
  }

  prevImage() {
    this.currentImage = (this.currentImage - 1 + this.carouselImages.length) % this.carouselImages.length;
  }
}
