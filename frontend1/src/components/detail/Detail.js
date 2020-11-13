import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { getDetail } from "../../actions/detail";
import { connect } from "react-redux";
import cookie from "react-cookies";
class Detail extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <h1 style={{ textAlign: "center" }}>
          Current Account Balance:
          <span> </span>
          Rs.{this.props.detail.current_balance}
        </h1>
        <h1 style={{ textAlign: "center" }}>
          Savings Account Balance:
          <span> </span>
          Rs.{this.props.detail.savings_balance}
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ detail: state.detail.detail });
export default connect(mapStateToProps, { getDetail })(Detail);
