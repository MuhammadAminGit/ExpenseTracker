import React , {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Vegetables",
    amount: 34.12,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e2",
    title: "New Phone",
    amount: 199.49,
    date: new Date(2021, 5, 3),
  },
  {
    id: "e3",
    title: "Books",
    amount: 294.67,
    date: new Date(2020, 2, 14),
  },
  {
    id: "e4",
    title: "Bike Maintainance",
    amount: 150,
    date: new Date(2022, 9, 8),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const NewExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onNewExpense={NewExpenseHandler} />
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
