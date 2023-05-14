import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setAddButton(false);
  };

  const [AddButton, setAddButton] = useState(false);

  const addExpenseButton = () => {
    setAddButton(true);
  };

  const cancelHandler = () => {
    setAddButton(false);
  };

  return (
    <div className="new-expense">
      {!AddButton && (
        <button onClick={addExpenseButton}>Add New Expense</button>
      )}
      {AddButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
