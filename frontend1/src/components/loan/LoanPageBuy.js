import React from "react";
import { Form, TextArea, Button, Dropdown, Radio } from "semantic-ui-react";
import { addLoan } from "../../actions/loan";
import { connect } from "react-redux";

class LoanPageBuy extends React.Component {
  state = { loan_type: "", loan_amount: null, loan_period: 0 };

  handleInput = (e) => {
    this.setState({ loan_amount: e.target.value });
  };

  handleDropdown = (e, { value }) => {
    this.setState({ loan_type: value });
  };

  handlePeriodDropdown = (e, { value }) => {
    this.setState({ loan_period: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { loan_type, loan_period, loan_amount } = this.state;
    this.props.addLoan(loan_amount, loan_period, loan_type);
  };

  render() {
    const loanOptions = [
      {
        key: "Car",
        text: "Car",
        value: "Car",
      },
      {
        key: "House",
        text: "House",
        value: "House",
      },
      {
        key: "Personal",
        text: "Personal",
        value: "Personal",
      },
    ];

    const periodOptions = [
      {
        key: "1",
        text: "1",
        value: 1,
      },
      {
        key: "2",
        text: "2",
        value: 2,
      },
      {
        key: "3",
        text: "3",
        value: 3,
      },
      {
        key: "4",
        text: "4",
        value: 4,
      },
      {
        key: "5",
        text: "5",
        value: 5,
      },
    ];

    return (
      <div>
        <div className="ui container">
          <br></br>
          <h1>Select your Loan type:</h1>
          <Dropdown
            placeholder="Select Loan"
            fluid
            search
            selection
            options={loanOptions}
            onChange={this.handleDropdown}
          />
        </div>
        <br></br>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <h1>Enter Loan Amount</h1>
            <input
              required
              placeholder="Loan Amount"
              value={this.state.loan_amount}
              onChange={this.handleInput}
            />
          </Form.Field>
          <br />
          <h1>Period:</h1>
          <Dropdown
            placeholder="Period"
            fluid
            search
            selection
            options={periodOptions}
            onChange={this.handlePeriodDropdown}
          />
          <br></br>
          <Button primary>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default connect(null, { addLoan })(LoanPageBuy);
