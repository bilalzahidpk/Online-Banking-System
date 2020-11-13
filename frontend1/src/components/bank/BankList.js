import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import { getBank } from "../../actions/bank";
import bank from "../../reducers/bank";

export class BankList extends Component {
  componentDidMount() {
    this.props.getBank();
  }

  render() {
    return (
      <div>
        {" "}
        {this.props.bank.map(bankobject => (
          <List style={{ marginTop: "50px" }}>
            <List.Item>
              <List.Icon name="address book" className="big" />
              <List.Content style={{ fontSize: "20px" }}>
                {bankobject.bank_name}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="building" className="big" />
              <List.Content style={{ fontSize: "20px" }}>
                Head Office: {bankobject.bank_head_office}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="teletype" className="big" />
              <List.Content style={{ fontSize: "20px" }}>
                UAN: {bankobject.bank_uan}
              </List.Content>
            </List.Item>
          </List>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bank: state.bank.bank
});

export default connect(mapStateToProps, { getBank })(BankList);
