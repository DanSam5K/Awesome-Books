
//Book Class: Represents a book
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

//UI Class: handle UI tasks

class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }
}