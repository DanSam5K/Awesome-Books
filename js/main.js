
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

    static addBookToList(book) {
       const list = document.querySelector('#book-list')
       const row = document.createElement('tr');
       row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td><button type="button" class="delete">Remove</button></td>
       `;

       list.appendChild(row);
    }

    static deleteBook(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }
}