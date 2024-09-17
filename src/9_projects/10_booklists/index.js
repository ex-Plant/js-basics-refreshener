window.onload = function () {
  console.log(`app started!`);
  bookList.init();
};



function capitalizeName(author) {
  const authArr = !author ? [] : author.split(" ");

  for (let i = 0; i < authArr.length; i++) {
    let string = authArr[i];
    let firstLetter = string[0].toUpperCase();
    string = firstLetter + string.substring(1);
    authArr.splice(i, 1, string);
  }

  return authArr.join(" ") || "Book author";
}

function capitalizeTitle(title) {
  const firstTitleLetter = title[0];

  return(
    firstTitleLetter && firstTitleLetter.toUpperCase() + title.substring(1))
    ?? "Unknown Book title";
}

function appendBookLiToBookList(book) {
  const { title, author } = book;

  const newLi = document.createElement(`li`);
  const authorCapitalized = capitalizeName(author);
  const titleCapitalized = capitalizeTitle(title)

  newLi.innerHTML = `${titleCapitalized} by ${authorCapitalized}`;
  newLi.id = book.id;
  newLi.style.cursor = `pointer`;

  bookList.booksUl.appendChild(newLi);
  newLi.addEventListener("click", () => {
    bookList.deleteBook(newLi.id)
    bookList.booksUl.removeChild(newLi);
  });

  if (bookList.books.length > 0) {
    bookList.delBtn.style.display = `inline`
  }
}

class Book {
  constructor(author, title) {
    this.id = Date.now();
    this.author = author;
    this.title = title;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.addBtn = undefined;
    this.delBtn = undefined;
    this.dialog = undefined;
  }

  init = () => {
    this.form = document.querySelector("form");
    this.addBtn = document.getElementById(`addBtn`);
    this.delBtn = document.getElementById(`delBtn`);
    this.dialog = document.getElementById(`dialog`);
    this.booksUl = document.querySelector(`ul.bookList`);
    this.authorInput = document.querySelector(`#author`);
    this.titleInput = document.querySelector(`#title`);

    this.addBtn.addEventListener("click", () => this.dialog.open = true);
    this.form.addEventListener("submit", this.handleSubmit)
  };

  handleSubmit = () => {
    const book = new Book(this.authorInput.value, this.titleInput.value);

    this.books = [...this.books, book];
    storage.saveBooks(this.books);
    appendBookLiToBookList(book)
    bookList.dialog.open = false;

    this.titleInput.value = "";
    this.authorInput.value = "";
    this.id = Date.now();
  }


  deleteBook = (id) => {
    this.books = this.books.filter((b) => b.id !== id);
    storage.saveBooks(this.books);
  };
}




class Storage {
  saveBooks = (books) => {
    localStorage.setItem(`books`, JSON.stringify(books));
  };

  getBooks = () => {
    const books = localStorage.getItem(`books`);
    if (!books) return [];
    return JSON.parse(books) ?? [];
  };
}

class Ui {}
const storage = new Storage();
const ui = new Ui();
const bookList = new BookList();




































//
//
// window.onload = function () {
//   console.log(`app started!`);
//   bookList.init();
// };
//
// function onClickAdd() {
//   const book = new Book();
//   bookList.dialog.open = true;
//   book.init();
// }
//
// function onClickDeleteBook(dialog) {
//   // dialog.open = true;
// }
//
//
//
// class Book {
//   constructor() {
//     this.id = Date.now();
//   }
//
//   init = () => {
//     const form = document.querySelector("form");
//     this.authorInputEl = document.querySelector(`#author`);
//     this.titleInputEl = document.querySelector(`#title`);
//     this.authorInputEl.value = "";
//     this.titleInputEl.value = "";
//
//     // this.authorInputEl.addEventListener("change", (e) => {
//     //   this.author = e.target.value;
//     // });
//
//     // this.titleInputEl.addEventListener("change", (e) => {
//     // this.title = e.target.value;
//     // });
//
//     form.addEventListener("submit",  this.handleSubmit)
//   };
//
//   handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(`onAddABook`);
//     const book = {
//       author: this.authorInputEl.value,
//       title: this.titleInputEl.value,
//       id: this.id,
//     };
//
//     bookList.addBook(book);
//
//     this.titleInputEl.value = "";
//     this.authorInputEl.value = "";
//     this.id = Date.now();
//
//     bookList.dialog.open = false;
//   }
// }
//
// function capitalizeName(author) {
//   const authArr = !author
//     ? []
//     : author.split(" ");
//
//   for (let i = 0; i < authArr.length; i++) {
//     let string = authArr[i];
//     let firstLetter = string[0].toUpperCase();
//     string = firstLetter + string.substring(1);
//     authArr.splice(i, 1, string);
//   }
//
//   return authArr.join(" ") || "Book author";
// }
//
// function capitalizeTitle(title) {
//   const firstTitleLetter = title[0];
//   return(
//       firstTitleLetter && firstTitleLetter.toUpperCase() + title.substring(1))
//     ?? "Book title";
// }
//
// function appendBookLiToBookList(book) {
//   const { title, author } = book;
//
//   const newLi = document.createElement(`li`);
//   const authorCapitalized = capitalizeName(author);
//   const titleCapitalized = capitalizeTitle(title)
//
//   newLi.innerHTML = `${titleCapitalized} by ${authorCapitalized}`;
//   bookList.booksUl.appendChild(newLi);
//
// }
//
//
//
// class BookList {
//   constructor() {
//     this.books = [];
//     this.addBtn = undefined;
//     this.delBtn = undefined;
//     this.dialog = undefined;
//   }
//
//   init = () => {
//     console.log(`initialized`);
//     this.addBtn = document.getElementById(`addBtn`);
//     this.delBtn = document.getElementById(`delBtn`);
//     this.dialog = document.getElementById(`dialog`);
//     this.booksUl = document.querySelector(`ul.bookList`);
//
//     this.addBtn.addEventListener("click", () => onClickAdd(this.dialog));
//     this.delBtn.addEventListener("click", () => onClickDeleteBook(this.dialog));
//   };
//
//   addBook = (book) => {
//     console.log(`Adding book:`, book);
//     this.books = [...this.books, book];
//     console.log(this.books);
//     storage.saveBooks(this.books);
//     appendBookLiToBookList(book)
//
//   };
//
//   deleteBook = (book) => {
//     this.books = this.books.filter((b) => b.id !== book.id);
//     storage.saveBooks(this.books);
//   };
// }
//
//
//
//
// class Storage {
//   saveBooks = (books) => {
//     console.log(books);
//     localStorage.setItem(`books`, JSON.stringify(books));
//   };
//
//   getBooks = () => {
//     const books = localStorage.getItem(`books`);
//     if (!books) return [];
//     return JSON.parse(books) ?? [];
//   };
// }
//
// class Ui {}
// const storage = new Storage();
// const ui = new Ui();
// const bookList = new BookList();
