import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
})
export class BookDetailsModalComponent implements OnInit {
  constructor(private firestore: AngularFirestore) {}
  @Input() book: any;

  selectedAuthor: string;

  @Input() authorsList: string[];
  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.selectedAuthor = this.book.author;
  }
  deleteBook(): void {
    this.firestore
      .collection('books')
      .get()
      .subscribe((res) => {
        res.docs.forEach((item) => {
          if ((item as any).data().title === this.book.title) {
            item.ref.delete().then((res) => {
              this.closeModalplease();
            });
          }
        });
      });
  }
  closeModalplease(): void {
    this.closeModal.emit(true);
  }
}
