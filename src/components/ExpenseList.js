import React from "react";
import { connect } from "react-redux"; //connect is a property in react-redux and that's why it's placed inside curly braces
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {
        
          props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (props.expenses.map((expense)=> {
          return <ExpenseListItem key={expense.id} {...expense} />        
    })
        )
  }
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList); //when we map state to Expense List it becomes a props
