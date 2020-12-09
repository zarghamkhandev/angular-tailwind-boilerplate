import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { AddBookModalComponent } from './components/add-book-modal/add-book-modal.component';
import { BookDetailsModalComponent } from './components/book-details-modal/book-details-modal.component';

@NgModule({
  declarations: [AppComponent, BookComponent, AddBookModalComponent, BookDetailsModalComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
