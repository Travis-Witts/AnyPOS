const transactionSum = (invoiceLines) => {
  let value;
  for (i = 0; i < invoiceLines.length; i++) {
    value += invoiceLines.quantity * invoiceLines.price;
  }
  return value;
};

module.exports = transactionSum;