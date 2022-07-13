import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    // const [EnteredTitle, setEnteredTitle] = useState('');
    // const [EnteredAmount, setEnteredAmount] = useState('0.0');
    // const [EnteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        EnteredTitle:'',
        EnteredAmount:0,
        EnteredDate:''
    });

    const onTitleChangeHandler = (event) => {
        setUserInput((preState) => {
            return {...preState, EnteredTitle : event.target.value,}
        });
    };

    const onAmountChangeHandler = (event) =>{
        setUserInput((preState) => {
            return {...preState, EnteredAmount : event.target.value,}
        });
    };

    const onDateChangeHandler = (event) =>{
        setUserInput((preState) => {
            return {...preState, EnteredDate : event.target.value,}
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.EnteredTitle,
            amount: +userInput.EnteredAmount,
            date : new Date(userInput.EnteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setUserInput((preState) => {
            return {...preState, EnteredTitle : '',}
        });

        setUserInput((preState) => {
            return {...preState, EnteredAmount : '',}
        });

        setUserInput((preState) => {
            return {...preState, EnteredDate : '',}
        });
        

    };

    const stateReturnHandler = () => {
        props.stateManage(false);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text" value={userInput.EnteredTitle} onChange={onTitleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "number" value={userInput.EnteredAmount} min = "0.01" step ="0.01" onChange={onAmountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = "date" value={userInput.EnteredDate} min = "2019-01-01" max= "2024-01-01" onChange={onDateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={stateReturnHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;