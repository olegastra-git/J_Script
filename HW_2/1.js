class Library {
    #books;

    constructor(initialBooks) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error('Initial book list contains duplicates');
        }
        this.#books = initialBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('This book already exists in the library');
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error('This book is not found in the library');
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// Пример использования
const library = new Library(['Book1', 'Book2', 'Book3']);

console.log(library.allBooks); // ['Book1', 'Book2', 'Book3']

library.addBook('Book4');
console.log(library.allBooks); // ['Book1', 'Book2', 'Book3', 'Book4']

library.removeBook('Book2');
console.log(library.allBooks); // ['Book1', 'Book3', 'Book4']

console.log(library.hasBook('Book1')); // true
console.log(library.hasBook('Book5')); // false