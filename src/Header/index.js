import React, { useContext } from "react";
import "./index.scss";
import { HeaderContext } from "../Context";



function Header() {
  const { income, expense } = useContext(HeaderContext)
  return <div className="app-header"> 
    <h1 className='current-budget-header'>Current Budget</h1>
    <p className='budget-number'>{income - expense}</p>
    <br />

    <p className='income'>{income}</p>
     <br />
     <p className='expense'>{expense}</p>
   
  </div>;
}
export default Header;
