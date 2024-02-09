import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number;
  constructor() {}

  ngOnInit(): void {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }
}
