class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBooks(author) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td class="d-flex justify-content-end"><button type="button" class="delete btn btn-danger">Remove</button></td>
       `;

    list.appendChild(row);
  }

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static viewList() {
    document.querySelector('#list-view').classList.add('active');
    document.querySelector('#list-view').setAttribute('aria-current', 'page');
    document.querySelector('#table-data').classList.remove('visually-hidden');
    document.querySelector('#book-form').classList.add('visually-hidden');
    document.querySelector('#form-title').classList.add('visually-hidden');
    document.querySelector('#add-view').classList.remove('active');
    document.querySelector('#contact-view').classList.remove('active');
  }

  static viewContact() {
    document.querySelector('#contact-view').classList.add('active');
    document
      .querySelector('#contact-view')
      .setAttribute('aria-current', 'page');
    document.querySelector('#contact').classList.remove('visually-hidden');
    document.querySelector('#main-content').classList.add('visually-hidden');
    document.querySelector('#add-view').classList.remove('active');
    document.querySelector('#list-view').classList.remove('active');
  }

  static getTime() {
    const { DateTime } = luxon;
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    return date;
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title === '' || author === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    const book = new Book(title, author);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.showAlert('Book Added', 'success');
    UI.clearFields();
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlert('Book deleted', 'success');
});

document.querySelector('#list-view').addEventListener('click', UI.viewList);
document
  .querySelector('#contact-view')
  .addEventListener('click', UI.viewContact);

document.querySelector('#date').textContent = UI.getTime();
