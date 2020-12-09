import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
})
export class AddBookModalComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}
  title: string;
  selectedFile: File = null;
  description: string;
  selectedAuthor: string;
  photoURl: string;
  @Input() authorsList: string[];
  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit(): void {}
  fileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  closeModalplease(): void {
    this.closeModal.emit(true);
  }
  upload(): void {
    this.fireStorage
      .ref('books')
      .put(this.selectedFile)
      .then((res) => {
        res.ref.getDownloadURL().then((url) => {
          this.photoURl = url;
          this.firestore
            .collection('books')
            .add({
              author: this.selectedAuthor,
              description: this.description,
              title: this.title,
              cover_url: this.photoURl,
            })
            .then((res) => {
              this.closeModal.emit(true);
            });
        });
      });
  }
}
