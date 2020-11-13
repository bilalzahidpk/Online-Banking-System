import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.complaint) alert.error(error.message.complaint);
      if (error.message.fundsNotTransfered)
        alert.error(error.message.fundsNotTransfered);
      if (error.message.billNotPaid) alert.error(error.message.billNotPaid);
      if (error.message.loanNotBought) alert.error(error.message.loanNotBought);
      if (error.message.passwordNotMatch)
        alert.error(error.message.passwordNotMatch);
    }
    if (message !== prevProps.message) {
      if (message.complaintAdded) alert.success(message.complaintAdded);
      if (message.billAdded) alert.success(message.billAdded);
      if (message.amountWithdrawl) alert.success(message.amountWithdrawl);
      if (message.amountDeposited) alert.success(message.amountDeposited);
      if (message.loanAdded) alert.success(message.loanAdded);
      if (message.fundsTransfered) alert.success(message.fundsTransfered);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
