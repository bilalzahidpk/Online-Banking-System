import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class SideBar extends Component {
  state = { activeItem: "account" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        inverted
        vertical
        style={{ border: "1px solid silver", width: "350px" }}
      >
        <Menu.Item
          style={{ height: "70px", fontSize: "20px" }}
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/balance" className="nav-link" activeClassName="active">
            Account Details
          </NavLink>
        </Menu.Item>

        <Dropdown
          item
          text="Account Transaction"
          style={{ height: "70px", fontSize: "20px" }}
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink
                to="/withdraw"
                className="nav-link"
                activeClassName="active"
              >
                {" "}
                <strong style={{ color: "black" }}>Withdrawl</strong>
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                to="/deposit"
                className="nav-link"
                activeClassName="active"
              >
                {" "}
                <strong style={{ color: "black" }}>Deposit</strong>
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          style={{ height: "70px", fontSize: "20px" }}
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/funds" className="nav-link" activeClassName="active">
            Funds Transfer
          </NavLink>
        </Menu.Item>

        <Dropdown
          item
          text="Loans and Personal Finances"
          style={{ height: "70px", fontSize: "20px" }}
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink
                to="/withdraw"
                className="nav-link"
                activeClassName="active"
              >
                {" "}
                <strong style={{ color: "black" }}>Withdrawl</strong>
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/loan" className="nav-link" activeClassName="active">
                {" "}
                <strong style={{ color: "black" }}>Buy Loan</strong>
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item
          style={{ height: "70px", fontSize: "20px" }}
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/bill" className="nav-link" activeClassName="active">
            Bill Payment
          </NavLink>
        </Menu.Item>

        <Menu.Item
          style={{ height: "70px", fontSize: "20px" }}
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        >
          <NavLink
            to="/complaint"
            className="nav-link"
            activeClassName="active"
          >
            Complaint Issuance
          </NavLink>
        </Menu.Item>

        <Menu.Item
          style={{ height: "70px", fontSize: "20px" }}
          active={activeItem === "settings"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
