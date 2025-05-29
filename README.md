# Лабораторная работа №1

## Описание лабораторной работы

Цель данной работы — ознакомиться с базовым синтаксисом и основными функциями языка JavaScript через разработку консольного приложения для анализа финансовых транзакций.

В процессе выполнения была реализована система анализа транзакций с возможностью фильтрации, агрегации и поиска по различным параметрам.

## Инструкции по запуску проекта

1. Установите Node.js (если еще не установлен).
2. Скачайте проект в локальную директорию.
3. Убедитесь, что в корне проекта присутствуют файлы:
   - `transactions.json`
   - `index.js`
4. Запустите приложение:

```bash
node index.js
Вот обновлённый `README.md` **без ответов на контрольные вопросы**:

````markdown
# Лабораторная работа №1: Консольное приложение для анализа транзакций

## Описание лабораторной работы

Цель данной работы — ознакомиться с базовым синтаксисом и основными функциями языка JavaScript через разработку консольного приложения для анализа финансовых транзакций.

В процессе выполнения была реализована система анализа транзакций с возможностью фильтрации, агрегации и поиска по различным параметрам.

## Инструкции по запуску проекта

1. Установите Node.js (если еще не установлен).
2. Скачайте проект в локальную директорию.
3. Убедитесь, что в корне проекта присутствуют файлы:
   - `transactions.json`
   - `index.js`
4. Запустите приложение:

```bash
node index.js
````

## Краткая документация к проекту

### Основные файлы

* `transactions.json` — JSON-файл с исходными данными о транзакциях.
* `index.js` — основной исполняемый файл с реализацией логики.

### Класс `TransactionAnalyzer`

Методы:

* `addTransaction(transaction)`
* `getAllTransactions()`
* `getUniqueTransactionType()`
* `calculateTotalAmount()`
* `calculateTotalAmountByDate(year, month, day)`
* `getTransactionByType(type)`
* `getTransactionsInDateRange(startDate, endDate)`
* `getTransactionsByMerchant(merchantName)`
* `calculateAverageTransactionAmount()`
* `getTransactionsByAmountRange(minAmount, maxAmount)`
* `calculateTotalDebitAmount()`
* `findMostTransactionsMonth()`
* `findMostDebitTransactionMonth()`
* `mostTransactionTypes()`
* `getTransactionsBeforeDate(date)`
* `findTransactionById(id)`
* `mapTransactionDescriptions()`

## Примеры использования

```js
const analyzer = new TransactionAnalyzer(transactions);

console.log(analyzer.calculateTotalAmount());
console.log(analyzer.getTransactionByType("debit"));
console.log(analyzer.getTransactionsByMerchant("SuperMart"));
```

## Список использованных источников

* [MDN Web Docs](https://developer.mozilla.org/)
* [JavaScript Info](https://javascript.info/)
* Конспекты занятий
