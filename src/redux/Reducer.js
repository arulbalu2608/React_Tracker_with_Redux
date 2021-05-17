import { EXPENSE_TRACKER } from "./Actiontype";

const initial = {
  balance: 0,
  income: 0,
  expense: 0,
  value:[],
  amount:0,
  arr: [],
};

const Reducer = (state = initial, action) => {
  switch (action.type) {
    case EXPENSE_TRACKER.ADD_INCOME:
      console.log(state.arr)
      return {
        ...state,
        balance: state.balance + parseInt(action.amount),
        income: state.income + parseInt(action.amount),
        arr: state.arr.concat({ id: action.id, title: action.title, amount: action.amount})
      };

    case EXPENSE_TRACKER.ADD_EXPENSE:
      return {
        ...state,
        balance: state.balance + parseInt(action.amount),
        expense: state.expense + parseInt(action.amount),
        arr:  state.arr.concat({ id: action.id, title: action.title, amount: action.amount}) 
      };
    case EXPENSE_TRACKER.DELETE_ITEM:
      const am=state.arr.find((ar)=>{
        if (ar.id===action.id) return ar.amount
      })
      console.log(am)
      if(am.amount>0){ return {
        ...state,
        arr: state.arr.filter((ar) => ar.id !== action.id),
        balance: state.balance - Math.abs( am.amount),
        income:state.income - am.amount
      };}
      else{
        return{
          ...state,
          arr: state.arr.filter((ar) => ar.id !== action.id),
          balance: state.balance + Math.abs(am.amount),
          expense :state.expense - am.amount
        }
      }
     
    default:
      return state;
  }
};

export default Reducer;
