import './ExpenseDate.css'
const ExpenseDate = (props) => {

    const Day = props.date.toLocaleString('en-us', {day : '2-digit'});
    const Month = props.date.toLocaleString('en-us', {month : 'long'});
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{Month}</div>
            <div className='expense-date__year'>{year}</div>   
            <div className='expense-date__day'>{Day}</div>  
        </div>
    );
}

export default ExpenseDate;