import React from "react";
import { Form, TextArea, Button, Dropdown, Radio } from "semantic-ui-react";
import { fundsTransfer } from "../../actions/funds";
import { connect } from "react-redux";

class FundsTransfer extends React.Component {
  state = { amount: null, payee_account: "", receivers_account: "", id: null };

  handlePayeeChange = (e, { value }) => {
    this.setState({ payee_account: value });
  };

  handleReceiverChange = (e, { value }) => {
    this.setState({ receivers_account: value });
  };

  handleIDChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handleInput = (e) => {
    this.setState({ amount: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { amount, payee_account, receivers_account, id } = this.state;

    this.props.fundsTransfer(amount, payee_account, receivers_account, id);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "100px" }}>
        <Form onSubmit={this.onSubmit}>
          <h3>Please enter amount to transfer:</h3>
          <input
            required
            placeholder=""
            value={this.state.amount}
            onChange={this.handleInput}
          />

          <br />
          <h3>Please enter Receiver's Account ID:</h3>
          <input
            required
            placeholder=""
            value={this.state.id}
            onChange={this.handleIDChange}
          />

          <br />
          <Form.Field>
            Select Account to transfer cash from:{" "}
            <b>{this.state.payee_account}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label="Current Account"
              name="radioGroup"
              value="Current Account"
              checked={this.state.payee_account === "Current Account"}
              onChange={this.handlePayeeChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Savings Account"
              name="radioGroup"
              value="Savings Account"
              checked={this.state.payee_account === "Savings Account"}
              onChange={this.handlePayeeChange}
            />
          </Form.Field>
          <br />
          <br />

          <Form.Field>
            Select Account to transfer cash into Receiver's{" "}
            <b>{this.state.receivers_account}</b>:{" "}
          </Form.Field>
          <Form.Field>
            <Radio
              label="Current Account"
              name="radioGroup"
              value="Current Account"
              checked={this.state.receivers_account === "Current Account"}
              onChange={this.handleReceiverChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Savings Account"
              name="radioGroup"
              value="Savings Account"
              checked={this.state.receivers_account === "Savings Account"}
              onChange={this.handleReceiverChange}
            />
          </Form.Field>
          <Button content="Submit" primary />
        </Form>
      </div>
    );
  }
}
export default connect(null, { fundsTransfer })(FundsTransfer);
