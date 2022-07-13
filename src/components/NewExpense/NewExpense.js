import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, seisEditing] = useState(false);

    const saveExpenseDatahandler = (savedData) => {
        const expenseData = {
          id:Math.random().toString(), ...savedData
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        seisEditing(false);
    };

    const startEditingHandler = () => {
        seisEditing(true);
    }

    const endEditngHandler = state => {
        seisEditing(state);
    };

  return (
    <div className="new-expense">
        { !isEditing &&  <button onClick={startEditingHandler}>Add new Expense</button>}
        { isEditing && <ExpenseForm stateManage = {endEditngHandler} onSaveExpenseData = {saveExpenseDatahandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;