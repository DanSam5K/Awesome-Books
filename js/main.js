let books = [];

const removeBtn = document.querySelector('.remove-btn');
const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const form = document.querySelector('#form');
const bookLists = document.createElement('div');
const lists = document.querySelector('#lists');

// addBtn.onclick = (e) => {
//   e.preventDefault();
//   if (title.value === '' && author.value === '') {
//     alert('Please enter the title and author');
//     return;
//   }

//   const option = new Option(title.value, author.value);

//   form.add(option, undefined);
//   title.value = '';
//   author.value = '';
//   title.focus();
//   author.focus();
// };

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    alert('Please enter the title and author');
  }
  const obj = Object.create({});
  obj.title = title.value;
  obj.author = author.value;
  books.push(obj);
});

console.log('Books Length: ', books.length);
let length = books.length;
for (let i = 0; i < length; i++) {
  const bookTitle = document.createElement('p');
  bookTitle.innerText = book.title;
  console.log('Book title: ', books[i].title);
  const bookAuthor = document.createElement('p');
  bookAuthor.innerText = books[i].author;

  bookLists.appendChild(bookAuthor);
  bookLists.appendChild(bookTitle);
}

books.forEach((book) => {
  const bookTitle = document.createElement('p');
  bookTitle.innerText = book.title;
  console.log('Book title: ', book.title);
  const bookAuthor = document.createElement('p');
  bookAuthor.innerText = book.author;

  bookLists.appendChild(bookAuthor);
  bookLists.appendChild(bookTitle);
});

lists.append(bookLists);
