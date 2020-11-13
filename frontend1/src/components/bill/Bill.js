import React from "react";
import { Form, TextArea, Button, Dropdown, Radio } from "semantic-ui-react";
import { addBill } from "../../actions/bill";
import { connect } from "react-redux";

class Bill extends React.Component {
  state = { bill_type: "", bill_amount: null, bill_account: "" };

  handleChange = (e, { value }) => {
    // console.log(value);
    this.setState({ bill_account: value });

    console.log(this.state.bill_account);
  };

  handleInput = (e) => {
    this.setState({ bill_amount: e.target.value });
    console.log(this.state.bill_amount);
  };

  handleDropdown = (e, { value }) => {
    this.setState({ bill_type: value });
    console.log(this.state.bill_type);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { bill_type, bill_amount, bill_account } = this.state;
    const finalMessage = { bill_type, bill_amount };

    this.props.addBill(finalMessage, bill_account);
  };

  render() {
    const billOptions = [
      {
        key: "Electricity",
        text: "Electricity",
        value: "Electricity",
      },
      {
        key: "Water",
        text: "Water",
        value: "Water",
      },
      {
        key: "Gas",
        text: "Gas",
        value: "Gas",
      },
    ];
    return (
      <div>
        <div className="ui container">
          <br></br>
          <h1>Select your Bill type:</h1>
          <Dropdown
            placeholder="Select Bill"
            fluid
            search
            selection
            options={billOptions}
            onChange={this.handleDropdown}
          />
        </div>
        <br></br>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <h1>Enter Bill Amount</h1>
            <input
              placeholder="Bill Amount"
              value={this.state.bill_amount}
              onChange={this.handleInput}
            />
          </Form.Field>
          <br />
          <Form.Field>
            Select Account to pay bill: <b>{this.state.bill_account}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label="Current Account"
              name="radioGroup"
              value="Current Account"
              checked={this.state.bill_account === "Current Account"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Savings Account"
              name="radioGroup"
              value="Savings Account"
              checked={this.state.bill_account === "Savings Account"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button primary>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default connect(null, { addBill })(Bill);
