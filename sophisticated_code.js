/* sophisticated_code.js */

// This code is an implementation of a book inventory system
// It allows for adding, updating, and deleting books from the inventory
// It also supports searching and sorting books based on various attributes

class Book {
  constructor(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
}

class Inventory {
  constructor() {
    this.books = [];
  }
  
  addBook(book) {
    this.books.push(book);
  }
  
  updateBook(title, updatedBook) {
    const bookIndex = this.books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
      this.books[bookIndex] = updatedBook;
    }
  }
  
  deleteBook(title) {
    const bookIndex = this.books.findIndex((book) => book.title === title);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
  }
  
  searchBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
  
  searchBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }
  
  searchBooksByPrice(price) {
    return this.books.filter((book) => book.price === price);
  }
  
  sortBooksByTitle() {
    return this.books.sort((a, b) => a.title.localeCompare(b.title));
  }
  
  sortBooksByPrice() {
    return this.books.sort((a, b) => a.price - b.price);
  }
}

// Usage example:

const inventory = new Inventory();

// Adding books
inventory.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 12.99));
inventory.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "Classic", 9.99));
inventory.addBook(new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", 14.99));
inventory.addBook(new Book("Pride and Prejudice", "Jane Austen", "Classic", 11.99));

// Updating a book
const updatedBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Literary Fiction", 19.99);
inventory.updateBook("The Great Gatsby", updatedBook);

// Deleting a book
inventory.deleteBook("Pride and Prejudice");

// Searching books
const fantasyBooks = inventory.searchBooksByGenre("Fantasy");
console.log(fantasyBooks);

const fitzgeraldBooks = inventory.searchBooksByAuthor("F. Scott Fitzgerald");
console.log(fitzgeraldBooks);

const cheapBooks = inventory.searchBooksByPrice(9.99);
console.log(cheapBooks);

// Sorting books
const sortedByTitle = inventory.sortBooksByTitle();
console.log(sortedByTitle);

const sortedByPrice = inventory.sortBooksByPrice();
console.log(sortedByPrice);