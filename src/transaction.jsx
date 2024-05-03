import React from 'react'

const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render 
  return(
    <form onSubmit={handleSubmit}>
      <div className="transaction-page">
       
      <input type="date" value={Date} placeholder='Date'/>
      <input type="description" value={Description} placeholder='Description'/>
      <input type="category" value={Category} placeholder='Category'/>
      <input type="amount" value={Number} placeholder='Number'
            onChange={(e) => setTransaction(e.target.value)}
          form/>
        <div/>
        )
        const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const handleSearchChange = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <TransactionsSearch filterTransactions={handleSearchChange} />{" "}
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <Transactions transactions={filteredTransactions} />
    </div>
  );
}


