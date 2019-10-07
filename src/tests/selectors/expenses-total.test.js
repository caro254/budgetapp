import selectExpenseTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const res = selectExpenseTotal([]);
  expect(res).toBe(0);
});
