import React from "react";
import { Form, Input, Button, Radio } from "semantic-ui-react";
import { withdraw } from "../../actions/transaction";
import { connect } from "react-redux";

class WithdrawlTransaction extends React.Component {
  state = {
    amount: null,
    account_type: "",
  };

  handleChange = (e, { value }) => {
    this.setState({ account_type: value });

    console.log(this.state.account_typr);
  };

  onChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { amount, account_type } = this.state;
    this.props.withdraw(amount, account_type);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "100px" }}>
        <Form onSubmit={this.onSubmit}>
          <h3>Please enter amount to withdraw:</h3>
          <input
            required
            placeholder=""
            value={this.state.amount}
            onChange={this.onChange}
          />

          <br />
          <br />
          <Form.Field>
            Select Account to withdraw cash: <b>{this.state.account_type}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label="Current Account"
              name="radioGroup"
              value="Current Account"
              checked={this.state.account_type === "Current Account"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Savings Account"
              name="radioGroup"
              value="Savings Account"
              checked={this.state.account_type === "Savings Account"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <br />
          <Button content="Submit" primary />
        </Form>
      </div>
    );
  }
}
export default connect(null, { withdraw })(WithdrawlTransaction);
