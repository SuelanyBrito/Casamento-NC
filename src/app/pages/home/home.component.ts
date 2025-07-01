import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ClipboardModule } from 'ngx-clipboard';
import { LucideAngularModule } from 'lucide-angular';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ClipboardModule,
    LucideAngularModule,
    NgClass
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('content') contentElement!: ElementRef;
  isAtBottom = false;
  countdownInterval: any;

  // Flags de breakpoint
  isHandset = false;
  isTablet = false;
  isWeb = false;
  isWebLandscape = false;
  isWebPortrait = false;

  mainImageDesktop = '/assets/img/casal/5.webp';
  mainImageMobile = '/assets/img/casal/principal.webp';


  ngOnInit(): void {
    this.startCountdown();
  }


  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait
    ]).subscribe(result => {
      this.isHandset = result.breakpoints[Breakpoints.HandsetPortrait] || result.breakpoints[Breakpoints.HandsetLandscape];
      this.isTablet = result.breakpoints[Breakpoints.Tablet] ?? false;
      this.isWeb = result.breakpoints[Breakpoints.Web] ?? false;
      this.isWebLandscape = result.breakpoints[Breakpoints.WebLandscape] ?? false;
      this.isWebPortrait = result.breakpoints[Breakpoints.WebPortrait] ?? false;

      console.log('Breakpoints:', {
        result: result.breakpoints,
        test: result.breakpoints[Breakpoints.TabletLandscape],
        isHandset: this.isHandset,
        isTablet: this.isTablet,
        isWeb: this.isWeb,
        isWebLandscape: this.isWebLandscape,
        isWebPortrait: this.isWebPortrait
      });
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      this.isAtBottom = scrollPosition >= pageHeight - 50;
    });
  }

  startCountdown(): void {
    const weddingDate = new Date('2025-10-04T15:30:00');

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.updateCountdownDisplay(0, 0, 0, 0);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.updateCountdownDisplay(days, hours, minutes, seconds);
    }, 1000);
  }

  updateCountdownDisplay(dias: number, horas: number, minutos: number, segundos: number): void {
    const setText = (id: string, value: number) => {
      const el = document.getElementById(id);
      if (el) el.innerText = value.toString().padStart(2, '0');
    };

    setText('dias', dias);
    setText('horas', horas);
    setText('minutos', minutos);
    setText('segundos', segundos);
  }

  scrollToContent() {
    if (this.isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetPosition = this.contentElement.nativeElement.offsetTop;
      window.scrollTo({ top: targetPosition + 200, behavior: 'smooth' });
    }
  }
}
