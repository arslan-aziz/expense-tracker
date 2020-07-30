function TransactionModel(amount, from, to, description, category, transactionType) {
    return {
        amount: amount,
        from: from,
        to: to,
        description: description,
        category: category,
        transactionType: transactionType
    }
}

export default TransactionModel;