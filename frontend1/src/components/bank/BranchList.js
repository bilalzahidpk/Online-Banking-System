import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import { getBranch } from "../../actions/branch";
import branch from "../../reducers/branch";

export class BranchList extends Component {
  componentDidMount() {
    this.props.getBranch();
  }

  render() {
    return (
      <div>
        <br></br>
        <h1>Branches:</h1>{" "}
        {this.props.branch.map(branchobject => (
          <List style={{ marginTop: "50px" }}>
            <List.Item>
              <List.Content style={{ fontSize: "20px" }}>
                {branchobject.branch_name}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content style={{ fontSize: "20px" }}>
                Office: {branchobject.branch_address}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content style={{ fontSize: "20px" }}>
                Country: {branchobject.branch_country}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content style={{ fontSize: "20px" }}>
                City: {branchobject.branch_city}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content style={{ fontSize: "20px" }}>
                Contact: {branchobject.branch_contact}
              </List.Content>
            </List.Item>
          </List>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  branch: state.branch.branch
});

export default connect(mapStateToProps, { getBranch })(BranchList);
