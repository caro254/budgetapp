import expenses from "../tests/fixtures/expenses";

export default expense => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};
