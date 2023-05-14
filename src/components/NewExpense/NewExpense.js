import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from "react";

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>;
    const addExpenseButton = <button onClick={startEditingHandler}>Add New Expense</button>;

    return (
        <div className="new-expense">
            {!isEditing && addExpenseButton}
            {isEditing && expenseForm}
        </div>
    )
};

export default NewExpense;