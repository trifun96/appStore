import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeButton() {
    this.closeEvent.emit(true);
  }

  preventModalClose(event: Event) {
    event.stopPropagation();
  }
}