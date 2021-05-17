import { EXPENSE_TRACKER} from "./Actiontype";

export const add_income = (id, title, amount) => {
  return {
    type: EXPENSE_TRACKER.ADD_INCOME,
    id,
   title,
   amount,
  };
};
export const add_expense = (id, title, amount) => {
  return {
    type: EXPENSE_TRACKER.ADD_EXPENSE,
   id,
   title,
    amount,
  };
};

export const delete_item = (id) => {
  return {
    type: EXPENSE_TRACKER.DELETE_ITEM,
    id,
  };
};
