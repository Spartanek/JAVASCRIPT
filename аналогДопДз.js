// Завдання 7 - додаткове, виконувати не обов'язково
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

let randomId = Math.floor(Math.random() * 1000 + 1);
/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  createTransaction(amount, type) {
    // id - має бути унікальним
    // Метод створює
    const transaction = {
      amount,
      type,
      id: randomId,
      // id: 1,
    };
    // не треба прописувати amount, type, бо це вже константа
    // але чи потрібно писати id чи randomid?
    const { id } = transaction;
    console.log(amount, type, id);
    return transaction;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    if (amount <= 0) {
      console.log("Додати 0 або менше 0 не можна");
      return;
    }

    const depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );

    //  Метод відповідає за додавання суми до балансу.
    this.balance += amount;
    // Викликає createTransaction для створення об'єкта транзакції

    // push - він дозволяє додати що передасте в масив
    //  після чого додає його в історію транзакцій
    this.transactions.push(depositTransaction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    // Метод відповідає за зняття суми з балансу.
    if (amount > this.balance) {
      console.log(
        `зняття такої суми не можливо, недостатньо коштів. Вам не вистачає ${
          amount - this.balance
        } грн`
      );
      return;
    }
    const withdrowTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );

    this.balance -= amount;
    //  Викликає createTransaction для створення об'єкта транзакції

    // після чого додає його в історію транзакцій.
    this.transactions.push(withdrowTransaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      // Метод шукає
      if (id === transaction.id) {
        // повертає об'єкт транзакції
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let result = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        result += transaction.amount;
      }
    }
    return result;
  },
};

console.log(account.createTransaction(1000, Transaction.DEPOSIT));
// console.log(account.createTransaction(1000, "Deposit"));

account.deposit(1000);
account.withdraw(1000);

// console.log(account.getBalance());
console.log(account.getTransactionDetails(randomId));
account.deposit(1000);

// console.log(account.getBalance());

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getBalance());
