const data = require("./transactions.json");

class TransactionAnalyzer {
    transactions;

    constructor(transactionList) {
        this.transactions = transactionList; 
    }

    addTransaction(transaction) {
        this.transactions.push(new Transaction(transaction));
    }

    getAllTransaction() {
        return this.transactions;
    }

    getUniqueTransactionType() {
        return [...new Set(this.transactions.map(t => t.transaction_type))];
    }

    calculateTotalAmount() {
        return this.transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
    }

    calculateTotalAmountByDate(year, month, day) {
        return this.transactions.filter(t => {
            const date = new Date(t.transaction_date);
            return (!year || date.getFullYear() === year) &&
                   (!month || date.getMonth() + 1 === month) &&
                   (!day || date.getDate() === day);
        }).reduce((sum, t) => sum + t.transaction_amount, 0);
    }

    getTransactionByType(type) {
        return this.transactions.filter(t => t.transaction_type === type);
    }

    getTransactionsInDateRange(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return this.transactions.filter(t => {
            const date = new Date(t.transaction_date);
            return date >= start && date <= end;
        });
    }

    getTransactionsByMerchant(merchantName) {
        return this.transactions.filter(t => t.merchant_name === merchantName);
    }

    calculateAverageTransactionAmount() {
        if (this.transactions.length === 0) return 0;
        return this.calculateTotalAmount() / this.transactions.length;
    }

    getTransactionsByAmountRange(minAmount, maxAmount) {
        return this.transactions.filter(t => t.transaction_amount >= minAmount && 
                                        t.transaction_amount <= maxAmount);
    }

    calculateTotalDebitAmount() {
        return this.transactions.filter(t => t.transaction_type === 'debit')
                                 .reduce((sum, t) => sum + t.transaction_amount, 0);
    }

    findMostTransactionsMonth() {
        const counts = {};
        for (let t of this.transactions) {
            const month = t.transaction_date.slice(0, 7);
            counts[month] = (counts[month] || 0) + 1;
        }

        return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    }

    findMostDebitTransactionMonth() {
        const counts = {};
        for (let t of this.transactions.filter(t => t.transaction_type === 'debit')) {
            const month = t.transaction_date.slice(0, 7);
            counts[month] = (counts[month] || 0) + 1;
        }

        return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    }

    mostTransactionTypes() {
        const debitCount = this.transactions.filter(t => t.transaction_type === 'debit').length;
        const creditCount = this.transactions.filter(t => t.transaction_type === 'credit').length;
        if (debitCount > creditCount) return 'debit';
        if (creditCount > debitCount) return 'credit';

        return 'equal';
    }

    getTransactionsBeforeDate(date) {
        const cutoff = new Date(date);
        return this.transactions.filter(t => new Date(t.transaction_date) < cutoff);
    }

    findTransactionById(id) {
        return this.transactions.find(t => t.transaction_id === id);
    }

    mapTransactionDescriptions() {
        return this.transactions.map(t => t.transaction_description);
    }
}

const analyzer = new TransactionAnalyzer(data);
console.log(analyzer.mostTransactionTypes());
