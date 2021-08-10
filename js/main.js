const form = document.querySelector('#form');
const bookTitleField = document.querySelector('#book-title');
const bookAuthorField = document.querySelector('#book-author');
const booksListContainer = document.querySelector('#books-list');
const template = document.querySelector('#list-item-template');
const LOCAL_STORAGE_PREFIX = 'AWESOME_BOOKS';
const BOOKS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-books`;

let books = loadBookInfo();
books.forEach((book) => renderBookInfo(book));

function renderBookInfo(bookInfo) {
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector('.list-item');
  listItem.dataset.booksId = bookInfo.id;
  const renderTitle = templateClone.querySelector(
    '[data-list-item-book-title]'
  );
  const renderAuthor = templateClone.querySelector(
    '[data-list-item-book-author]'
  );
  renderTitle.innerText = bookInfo.title;
  renderAuthor.innerText = bookInfo.author;
  booksListContainer.appendChild(templateClone);
}

function loadBookInfo() {
  const bookString = localStorage.getItem(BOOKS_STORAGE_KEY);
  return JSON.parse(bookString) || [];
}

function saveBookInfo() {
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = bookTitleField.value;
  const bookAuthor = bookAuthorField.value;
  if (bookTitle === '' && bookAuthor === '') return;
  const bookInfo = {
    title: bookTitle,
    author: bookAuthor,
    id: new Date().valueOf().toString(),
  };
  books.push(bookInfo);
  renderBookInfo(bookInfo);
  saveBookInfo();
  bookTitleField.value = '';
  bookAuthorField.value = '';
});

booksListContainer.addEventListener('click', (e) => {
  if (!e.target.matches('[data-button-delete]')) return;
  const parent = e.target.closest('.list-item');
  const bookID = parent.dataset.booksId;
  books = books.filter((book) => book.id !== bookID);
  parent.remove();
  saveBookInfo();
});
