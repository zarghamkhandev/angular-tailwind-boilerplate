import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  constructor() {}
  @Input() book: any;
  @Output() showDetails = new EventEmitter<boolean>();
  @Output() selectedBook = new EventEmitter<any>();
  ngOnInit(): void {}

  showModal(): void {
    this.showDetails.emit(true);
    this.emitSelectedBook();
  }

  emitSelectedBook() {
    this.selectedBook.emit(this.book);
  }
}
