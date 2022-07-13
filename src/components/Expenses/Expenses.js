import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../NewExpense/ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const onChangeFilterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      ></ExpensesFilter>
      <ExpenseChart expenses = {filteredExpenses}></ExpenseChart>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
