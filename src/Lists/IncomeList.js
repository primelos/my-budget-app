import React, { useContext } from "react";
import "./index.scss";
import { ListContext } from "../Context";

function IncomeList() {
  const {incomeList, handleDeleteIncome } = useContext(ListContext)
  return <div>
      <h2 id='income-header'>Income List</h2>
      <ul className='income-list'>
        {
          incomeList.map((income, i) => {
            return(
            <li className='list-item' key={i}>
              {console.log(income)}
              <i class="fas fa-trash" onClick={() => handleDeleteIncome(i)} ></i>
              <span className='list-item-content'>{income.description}</span>
              <span className='list-item-content list-amount'>{income.amount}</span>
            </li>
            )
          })
        }
      </ul>
    </div>;
}

export default IncomeList;
