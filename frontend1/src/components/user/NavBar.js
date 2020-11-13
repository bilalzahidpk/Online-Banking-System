import React, { Component, useEffect } from "react";
import { logout } from "../../actions/auth";
//import { Menu, Icon } from "semantic-ui-react";
import { Menu, Segment, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../../actions/user";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();
// }

// const NavBar = () => {
//   const onClick = () => {
//     this.props.logout();
//   };

//   useEffect(() => {
//     props.getUser();
//   }, []);

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit" onClick={}>
//             Log Out
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

class NavBar extends Component {
  state = { activeItem: "home" };
  componentDidMount() {
    this.props.getUser();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  onClick = () => {
    this.props.logout();
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            style={{ fontSize: "20px" }}
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item
            style={{ fontSize: "20px" }}
            name="Edit Details"
            active={activeItem === "Edit Details"}
            onClick={this.handleItemClick}
          />
          <h1 style={{ marginLeft: "450px" }}>Vault Online Banking!</h1>
          <h1 style={{ marginLeft: "250px" }}>
            Hi! {this.props.user.first_name}
          </h1>
          <Menu.Menu position="right">
            <Button
              size="small"
              style={{ fontSize: "15px" }}
              onClick={this.props.logout}
            >
              <Icon name="sign out" onClick={this.onClick}></Icon>Log Out
            </Button>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ user: state.user.user });

const actions = { getUser, logout };

export default connect(mapStateToProps, actions)(NavBar);
