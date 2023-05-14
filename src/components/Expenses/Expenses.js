import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import {useState} from "react";
import './Expenses.css';

const Expenses = props => {
    const [selectedFilter, setSelectedFilter] = useState('2022');
    // Store the filtered year into a state
    const selectedFilterHandler = filter => {
        setSelectedFilter(filter);
    }
    /* Store the filtered expenses into a new array */
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === selectedFilter
    });

    return (
        <div className='expenses'>
            <ExpensesFilter selected={selectedFilter} onSelectedFilter={selectedFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses;