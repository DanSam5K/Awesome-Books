let books = [];

const removeBtn = document.querySelector('.remove-btn');
const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#form');
const bookLists = document.createElement('div');
const lists = document.querySelector('#lists');

let id = 

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    alert('Please enter the title and author');
  }
  const obj = Object.create({});
  obj.title = title.value;
  obj.author = author.value;
  books.push(obj);
  console.log(books);

  let length = books.length;
  for (let i = 0; i < length; i++) {
    const bookTitle = document.createElement('p');
    bookTitle.innerHTML = books[i].title;
    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = books[i].author;
    const removeButton = document.createElement('input');
    removeButton.setAttribute("value", "Remove");
    removeButton.setAttribute("type", "submit");
    const line = document.createElement('hr');

    //remove child element
    bookTitle.id = `container${title.value}`;
    bookAuthor.id = `container${author.value}`;
    removeButton.setAttribute('onclick', 'removeBook(this.id)');


    bookLists.appendChild(bookAuthor);
    bookLists.appendChild(bookTitle);
    bookLists.appendChild(removeButton);
    bookLists.appendChild(line);
    console.log(bookLists);
  } 
});

const removeBook = (buttonId) => {
  const bookToRemove = document.getElementById('container' + `${buttonId}`);
  bookToRemove.parentNode.removeChild(bookToRemove);
  for(let i = 0; i < books.length; i++){
      if(books[i].title === buttonId){
          books.splice(i, 1);
      }
  }
}



lists.append(bookLists);
