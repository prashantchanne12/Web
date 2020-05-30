// ES-6
// Book 
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI 
class UI {
    constructor() { }

    addBookToList(book) {
        const list = document.querySelector('#book-list');

        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="delete">X</a></td>`

        list.appendChild(row);
    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');

        // Add classes
        div.className = `alert ${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));

        // Get a parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // Insert alert
        container.insertBefore(div, form);

        // Timout after 3s
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }



}

// Local Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = this.getBooks();
        const ui = new UI();

        books.forEach(book => {
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = this.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = this.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));

    }
}

// DOM load event
document.addEventListener('DOMContentLoaded', function () {
    Store.displayBooks();

});

// Event Listener for submit
document.querySelector('#book-form').addEventListener('submit', function (event) {
    // Get the value
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    // Instantiating Book
    const book = new Book(title, author, isbn);

    // Instantiating UI
    const ui = new UI();

    // validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add Book to the list
        ui.addBookToList(book);

        // Add to local stoarge
        Store.addBook(book);

        // show success
        ui.showAlert(`${title} Added`, 'success');


        // Clear fields
        ui.clearFields();
    }



    event.preventDefault();
});

// Event listener for delete
document.querySelector('#book-list').addEventListener('click', function (event) {


    // Delete Book
    if (event.target.className === 'delete') {

        // Remove from Local Storage
        Store.removeBook(event.target.parentElement.previousElementSibling.textContent);

        event.target.parentElement.parentElement.remove();
        const ui = new UI();
        // Show message
        ui.showAlert('Book removed', 'success');

    }



    event.preventDefault();
});