import { Component, OnInit, OnDestroy } from '@angular/core';
import {Book} from '../models/Book.model';
import {Subscription} from 'rxjs';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  booksSubscription: Subscription;
  constructor(private booksService: BooksService, private rooter: Router) { }


  ngOnInit(): void {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }
   onNewBook(){
     this.rooter.navigate(['/books', 'new']);
   }
   onDeleteBook(book: Book) {
     this.booksService.removeBook(book);
   }
   onViewBook(id:number){
     this.rooter.navigate(['/books', 'view', id]);
   }

   ngOnDestroy(){
     this.booksSubscription.unsubscribe();
   }
}
