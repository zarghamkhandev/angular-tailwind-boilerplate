import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'interview-test';
  books: any[] = [];
  showAddBookModal = false;
  showBookDetailsModal = false;
  selectedBook: any = null;
  authors = [];
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('books')
      .get()
      .subscribe((res) => {
        res.docs.forEach((item) => {
          this.books.push(item.data());
        });
        console.log(this.books);
      });
    this.firestore
      .collection('authors')
      .get()
      .subscribe((res) => {
        res.docs.forEach((item) => {
          this.authors.push((item.data() as any).name);
        });
      });
  }

  showModal() {
    this.showAddBookModal = true;
  }

  closeModal() {
    this.showAddBookModal = false;
  }
  showDetailsModal() {
    this.showBookDetailsModal = true;
  }
  closeDetailsModal() {
    this.showBookDetailsModal = false;
  }
  setSelectedBook(value: any): void {
    this.selectedBook = value;
  }
}
