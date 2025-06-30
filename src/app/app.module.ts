import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { CasalComponent } from './pages/casal/casal.component';
import { HomeComponent } from './pages/home/home.component';
import { ThanksComponent } from './pages/about/thanks.component';
import { GeneralListComponent } from './pages/general-list/general-list.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';
import { DialogComponent } from './sharepage/dialog/dialog.component';

import { graphqlProvider } from 'src/libs';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

import { IgxCarouselModule, IgxSliderModule } from "igniteui-angular";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

import { LucideAngularModule, Heart, MapPinned, CircleAlert, Gift } from 'lucide-angular';

import { LayoutModule } from '@angular/cdk/layout';

import { NgOptimizedImage } from '@angular/common';
import {MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    NgOptimizedImage,
    NgbCarouselModule,
    IgxCarouselModule,
    IgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,

    // Angular Material modules:
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,

    // Lucide Icons Module with pick:
    LucideAngularModule.pick({ Heart, MapPinned, CircleAlert, Gift }),
  ],
  providers: [
    graphqlProvider
  ]
})
export class AppModule { }
