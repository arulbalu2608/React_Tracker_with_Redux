import { ADD_INCOME, ADD_EXPENSE, DELETE_ITEM } from "./Actiontype";

export const add_income = (id, title, amount) => {
  return {
    type: ADD_INCOME,
    id: id,
    title: title,
    amount: amount,
  };
};
export const add_expense = (id, title, amount) => {
  return {
    type: ADD_EXPENSE,
    id: id,
    title: title,
    amount: amount,
  };
};

export const delete_item = (id) => {
  return {
    type: DELETE_ITEM,
    id: id,
  };
};
