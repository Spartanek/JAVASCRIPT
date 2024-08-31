// Напишіть сценарій для управління бібліотечною системою. Створіть об'єкт library, в якому потрібно реалізувати методи для роботи з книгами, читачами та історією видачі книг.

/*
 * Є два типи операцій з книгами:
 * видача книги читачеві та повернення книги в бібліотеку.
 */
const BookOperation = {
  BORROW: "borrow",
  RETURN: "return",
};

/*
 * Кожна операція - це об'єкт з властивостями: id, type, bookId та readerId
 */

const library = {
  // Список книг у бібліотеці
  books: [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      borrow: false,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      borrow: false,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classics",
      year: 1925,
      borrow: false,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      borrow: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Literature",
      year: 1951,
      borrow: false,
    },
  ],

  // Список зареєстрованих читачів
  readers: [
    {
      id: 3001,
      name: "Олександр Петренко",
      email: "oleksandr.petrenko@example.com",
      age: 32,
      isSubscribed: true,
      books: [],
    },
    {
      id: 3002,
      name: "Марія Іваненко",
      email: "mariya.ivanenko@example.com",
      age: 27,
      isSubscribed: false,
      books: [],
    },
    {
      id: 3003,
      name: "Андрій Ковальчук",
      email: "andriy.kovalchuk@example.com",
      age: 45,
      isSubscribed: true,
      books: [],
    },
    {
      id: 3004,
      name: "Наталія Шевченко",
      email: "nataliya.shevchenko@example.com",
      age: 39,
      isSubscribed: true,
      books: [],
    },
    {
      id: 3005,
      name: "Ігор Сидоренко",
      email: "ihor.sydorenko@example.com",
      age: 24,
      isSubscribed: false,
      books: [],
    },
  ],

  // Історія операцій з книгами
  operations: [],

  /*
   * Метод створює і повертає об'єкт операції.
   * Приймає тип операції, id книги та id читача.
   */
  createOperation(type, bookId, readerId) {
    // кожен раз створює нову операцію при виклику
    const operation = {
      id: Math.random() * (2000 - 1000) + 1000,
      type,
      bookId,
      readerId,
    };
    this.operations.push(operation); // Додаємо операцію до історії
    return operation; // Повертаємо створену операцію
  },

  /*
   * Метод відповідає за додавання нової книги до бібліотеки.
   * Приймає об'єкт з інформацією про книгу (назва, автор, рік видання).
   */
  addBook(bookInfo) {
    const newBook = {
      id: Math.random() * (1000 - 5) + 5,
      borrow: false,
      // весь вміст який вклали у bookInfo
      ...bookInfo,
    };
    this.books.push(newBook); // Додаємо нову книгу до списку книг
    return newBook; // Повертаємо об'єкт нової книги
  },

  /*
   * Метод відповідає за реєстрацію нового читача.
   * Приймає об'єкт з інформацією про читача (ім'я, email).
   */
  addReader(readerInfo) {
    const newReader = {
      id: Math.random() * (4000 - 3005) + 3005,
      books: [],
      // весь вміст який вклали у bookInfo
      ...readerInfo,
      isSubscribed: false, // Новий читач за замовчуванням не підписаний
    };
    this.readers.push(newReader); // Додаємо нового читача до списку читачів
    return newReader; // Повертаємо об'єкт нового читача
  },

  /*
   * Метод відповідає за видачу книги читачеві.
   * Приймає id книги та id читача.
   * Викликає createOperation для створення об'єкта операції,
   * після чого додає його в історію операцій.
   *
   * Якщо книга вже видана або читач має заборгованість, виводить відповідне повідомлення.
   */
  borrowBook(bookId, readerId) {
    const book = this.books.find((bookItem) => bookItem.id === bookId);
    console.log(book);
    const person = this.readers.find(
      (readersItem) => readersItem.id === readerId
    );
    console.log(person);
    if (!book) {
      console.log("Такої книги у нас немає в базі");
      return;
    }
    if (!person) {
      console.log("Такої читача у нас немає в базі");
      return;
    }
    //   person.isSubscribed !== true;
    if (!person.isSubscribed) {
      console.log("Людина не підписана на наш сервіс");
    }
    // Перевіряємо, чи книга вже була видана

    const borrowBook = this.books.find((book) => book.bookId === bookId);

    // const isBookBorrowed = this.operations.some(
    //   (bookItem) =>
    //     bookItem.bookId === bookId && bookItem.type === BookOperation.BORROW
    // );
    if (borrowBook.borrow) {
      console.log("Книга вже видана.");
      return;
    }

    person.books.push(book);
    book.borrow = true;
    const borrowing = this.createOperation(
      BookOperation.BORROW,
      bookId,
      readerId
    );
    console.log("Книга видана читачеві:", borrowing);
  },

  /*
   * Метод відповідає за повернення книги в бібліотеку.
   * Приймає id книги та id читача.
   * Викликає createOperation для створення об'єкта операції,
   * після чого додає його в історію операцій.
   */
  returnBook(bookId, readerId) {
    const book = this.books.find((b) => b.id === bookId);
    const person = this.readers.find((p) => p.id === readerId);
    if (!book) {
      console.log("Такої книги у нас немає в базі");
      return;
    }
    if (!person) {
      console.log("Такої читача у нас немає в базі");
      return;
    }
    if (!person) {
      console.log("Такої читача у нас немає в базі");
      return;
    }
    // Перевіряємо, чи книга була видана цьому читачеві

    const isBookBorrowed = this.operations.find(
      (operation) =>
        operation.bookId === bookId && operation.readerId === readerId
    );

    if (!isBookBorrowed) {
      console.log("Ця книга не була видана цьому читачеві.");
      return;
    }
    book.borrow = false;
    // Додаємо операцію повернення книги
    const operationGivingBack = this.createOperation(
      BookOperation.RETURN,
      bookId,
      readerId
    );
    console.log(`Книга повернута: ${operationGivingBack}`);
  },

  /*
   * Метод повертає список доступних (не виданих) книг
   */
  getAvailableBooks() {
    console.log(this.books.filter((bookItem) => bookItem.borrow === false));
  },
  /*
   * Метод повертає список книг, які зараз знаходяться у певного читача
   */
  getReaderBooks(readerId) {
    const person = this.readers.find(
      (readersItem) => readersItem.id === readerId
    );
    console.log(person.books);
  },
  /*
   * Метод шукає і повертає об'єкт операції за id
   */
  getOperationDetails(id) {
    const findOperation = this.operations.find((item) => item.id === id);
  },

  /*
   * Метод повертає кількість операцій певного типу за всю історію
   */
  getOperationTotal(typeOper) {
    return this.operations.filter((operation) => operation.type === typeOper)
      .length;
  },
};
