import './ExpensesFilter.css';

// Listen to user select element
const ExpensesFilter = props => {
  const selectYearHandler = event => {
    console.log(event.target.value);
    props.onSelectedFilter(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectYearHandler}>
          <option value="2023">2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;