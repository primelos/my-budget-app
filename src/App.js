import React, { useState, useEffect } from "react";
import "./App.scss";
import IncomeExpenseInput from "./Inputs";
import { InputContext, HeaderContext, ListContext } from "./Context";
import Header from "./Header";
import List from "./Lists";

function App() {
  // header hooks
  const [income, setIncome] = useState(getHeaderInitialValue('income'));
  const [expense, setExpense] = useState(getHeaderInitialValue('expense'));

  // input hooks
  const [option, setOption] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  // list hooks
  const [incomeList, setIncomeList] = useState(getListInitialValue('incomeList'));
  const [expenseList, setExpenseList] = useState(getListInitialValue('expenseList'));

  function getHeaderInitialValue(value){
    return window.localStorage.getItem(value)?Number(window.localStorage.getItem(value)):0
  }
  function getListInitialValue(value){
    return window.localStorage.getItem(value)?JSON.parse(window.localStorage.getItem(value)):[]
  }
  function handleOption(value) {
    setOption(value);
  }
  function handleDescription(value) {
    setDescription(value);
  }
  function handleAmount(value) {
    setAmount(value);
  }
  function reset() {
    setAmount(0);
    setDescription("");
    setOption("+");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (amount === 0) return;
    if (option === "+") {
      setIncome(income + parseFloat(amount));
      setIncomeList([...incomeList, { description, amount }]);
      console.log(incomeList);
    } else {
      setExpense(expense + parseFloat(amount));
      setExpenseList([...expenseList, { description, amount }]);
    }
    reset();
  }
  useEffect(setLocalStorage, [income, expense, incomeList, expenseList])
  function setLocalStorage(){
    window.localStorage.setItem('income', income)
    window.localStorage.setItem('expense', expense)
    window.localStorage.setItem('incomeList', JSON.stringify(incomeList))
    window.localStorage.setItem('expenseList', JSON.stringify(expenseList))

  }
  function handleDeleteIncome(index) {
    const incomeItemDelete = incomeList[index];
    setIncome(income - incomeItemDelete.amount);
    setIncomeList(incomeList.filter((_, i) => i !== index));
  }
  function handleDeleteExpense(index) {
    const expenseItemDelete = expenseList[index];
    setExpense(expense - expenseItemDelete.amount);
    setExpenseList(expenseList.filter((_, i) => i !== index));
  }
  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit,
  };
  const headerContextValue = {
    income,
    expense,
  };
  const listContextValue = {
    incomeList,
    expenseList,
    handleDeleteExpense,
    handleDeleteIncome
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={headerContextValue}>
        <Header />
      </HeaderContext.Provider>
      <InputContext.Provider value={inputContextValue}>
        <IncomeExpenseInput />
      </InputContext.Provider>
      <ListContext.Provider value={listContextValue}>
        <List />
      </ListContext.Provider>
    </div>
  );
}

export default App;
