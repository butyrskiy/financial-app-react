import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //? use one state
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // });

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);

    //? use one state #1
    // setUserInput({
    //   ...userInput,
    //   name: e.target.value,
    // });

    //? use one state #2
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: e.target.value,
    //   }
    // });
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-cost__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default CostForm;
