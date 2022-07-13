import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car Insuarance",
    amount: 293.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "EMI",
    amount: 203.67,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e3",
    title: "Shopping",
    amount: 103.67,
    date: new Date(2021, 4, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const AddDataHandler = (expense) => {
    setExpenses((preState) => {
      return [expense, ...preState ];
    });
    console.log(expense);
  };

  return (
    <div className="app">
      <NewExpense onAddExpense={AddDataHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
