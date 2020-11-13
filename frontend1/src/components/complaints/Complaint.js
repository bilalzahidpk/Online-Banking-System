import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { addComplaint } from "../../actions/complaint";
import { connect } from "react-redux";
import cookie from "react-cookies";
class Complaint extends React.Component {
  state = {
    complaint: " "
  };

  onChange = e => {
    this.setState({ complaint: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { complaint } = this.state;
    const finalmessage = { complaint };
    console.log(finalmessage);
    this.props.addComplaint(finalmessage);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "100px" }}>
        <Form onSubmit={this.onSubmit}>
          <h3>Please tell us your complaint:</h3>
          <TextArea
            placeholder="Write here!"
            onChange={this.onChange}
            name={this.state.complaint}
          />
          <br />
          <br />
          <Button content="Submit" primary />
        </Form>
      </div>
    );
  }
}
export default connect(null, { addComplaint })(Complaint);
