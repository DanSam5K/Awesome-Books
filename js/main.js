let books = [];

const removeBtn = document.querySelector('.remove-btn');
const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const form = document.querySelector('#form');

addBtn.onclick = (e) => {
  e.preventDefault();
  if(title.value === '' && author.value === '') {
    alert('Please enter the title and author')
    return 
  }

  const option = new Option(title.value, author.value) 
  
  form.add(option, undefined)
  title.value = '';
  author.value = '';
  title.focus();
  author.focus();
}
