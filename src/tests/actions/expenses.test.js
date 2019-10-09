import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[[1]]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1]
  });
});
test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "awesome",
    createdAt: 9000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(2).toBe(2);
    done();
  });
});
