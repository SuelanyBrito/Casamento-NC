import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  imports: [
    RouterLink,
    MatFabButton
  ],
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent {

  constructor() { }

}
