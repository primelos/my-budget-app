import React, { useContext } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { ListContext } from '../Context'
import "./index.scss";

function ExpenseList() {
  const { expenseList, handleDeleteExpense } = useContext(ListContext)
  return <div>
    <h2 id='expense-header'>Expense List</h2>
    <ul className='income-list'>
        {
          expenseList.map((expense, i) => {
            return(
            <li className='list-item' key={i}>
              <i className="fas fa-trash" onClick={() => handleDeleteExpense(i)} ></i>
              <span className='list-item-content'>{expense.description}</span>
              <span className='list-item-content list-amount'>{expense.amount}</span>
            </li>
            )
          })
        }
      </ul>
  </div>;
}

export default ExpenseList;
