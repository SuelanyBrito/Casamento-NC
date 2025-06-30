import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-about',
  templateUrl: './thanks.component.html',
  imports: [
    RouterLink,
    MatFabButton
  ],
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
