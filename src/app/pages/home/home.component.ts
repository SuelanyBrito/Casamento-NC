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

  // Flags de breakpoint
  isHandset = false;
  isTablet = false;
  isWeb = false;
  isWebLandscape = false;
  isWebPortrait = false;

  mainImageDesktop = '/assets/img/casal/principal1.png';
  mainImageMobile = '/assets/img/casal/principal.png';


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

  scrollToContent() {
    if (this.isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetPosition = this.contentElement.nativeElement.offsetTop;
      window.scrollTo({ top: targetPosition + 200, behavior: 'smooth' });
    }
  }
}
