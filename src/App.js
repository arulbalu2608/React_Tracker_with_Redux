import "./App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { add_income, add_expense, delete_item } from "./redux/Action";
import { Row, Col, Button, Input, Table } from "reactstrap";

function App(props) {

  const {addIncome, addExpense , Balance, Income, Expense} = props;
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");

  const calculation = () => {

    if (Title  && Amount) {
      if (Amount > 0) {
        addIncome(Date.now(), Title, Amount);
      } else {
        addExpense(Date.now(), Title, Amount);
      }
    } else {
      alert("Enter correct value");
    }
  };

  return (
    <div className="App">
      <h1 className="title">Tracker</h1>
      <div>
        <div className="container">
          <h3>Balance</h3>

          <h5 className="Balance">₹{Balance}</h5>
        </div>
        <br />

        <div className="Income">
          <div className="container">
            <Row>
              <Col>
                <h3>Income</h3>
                <h5 className="Inc">₹{Income}</h5>
              </Col>
              <Col>
                <h3>Expense</h3>
                <h5 className="Exp">₹{Expense}</h5>
              </Col>
            </Row>
          </div>
        </div>

        <div className="container form">
          <Input
            type="text"
            name="title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <br />
          <Row>
            <Col>
              <Input
                type="number"
                name="amount"
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
              />
            </Col>
            <Col>
              <Button color="primary" onClick={calculation}>
                Add
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="List">
        <h1 className="listtitle">List of Items</h1>
        <Table dark>
          <tbody>
            {props.Arr.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.title}</td>
                  <td> {val.amount}</td>
                  <td className={val.amount > 0 ? "Pos" : "Neg"}>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => props.delete(val.id)}></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
       
        </Table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Balance: state.balance,
    Income: state.income,
    Expense: state.expense,
    Arr: state.arr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIncome: (id, title, amount) => dispatch(add_income(id, title, amount)),
    addExpense: (id, title, amount) => dispatch(add_expense(id, title, amount)),
    delete: (id) => dispatch(delete_item(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
