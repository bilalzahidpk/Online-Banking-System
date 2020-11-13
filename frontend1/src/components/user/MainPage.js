import React, { Component } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { logout } from "../../actions/auth";
import { getUser } from "../../actions/user";
import compose from "recompose/compose";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
// import { Grid, List, Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Detail from "../detail/Detail";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Divider,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu } from "@material-ui/icons";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// import { MenuItem } from "semantic-ui-react";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

// export default function Dashboard() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         className={clsx(classes.appBar, open && classes.appBarShift)}
//       >
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(
//               classes.menuButton,
//               open && classes.menuButtonHidden
//             )}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             component="h1"
//             variant="h6"
//             color="inherit"
//             noWrap
//             className={classes.title}
//           >
//             Dashboard
//           </Typography>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>{mainListItems}</List>
//         <Divider />
//         <List>{secondaryListItems}</List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//           <Grid container spacing={3}>
//             {/* Chart */}
//           </Grid>
//           <Box pt={4}>
//             <Copyright />
//           </Box>
//         </Container>
//       </main>
//     </div>
//   );
// }

class MainPage extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorE1: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  onClick = () => {
    this.props.logout();
  };
  render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;
    console.log(children);
    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>

        <MenuList b={5}>
          <MenuItem b={5} component={Link} to="/mainpage" replace>
            <Typography>Home</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/deposit">
            <Typography>Deposit Money</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/withdraw">
            <Typography>Withdraw Money</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/loan">
            <Typography>Buy Loan</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/funds">
            <Typography>Funds Transfer</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/bill">
            <Typography> Pay Bill</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/complaint">
            <Typography>Issue Complain</Typography>
          </MenuItem>
          <MenuItem b={5} component={Link} to="/contact">
            <Typography> Contact</Typography>
          </MenuItem>
        </MenuList>
      </div>
    );

    /* // <div>
    //   <NavBar />
    //   <Grid>
    //     <Grid.Row>
    //       <Grid.Column width={4}>
    //         <SideBar />
    //       </Grid.Column>

    //       <Grid.Column width={8}>
    //         <br></br>
    //         <br></br>
    //         <h1 style={{ textAlign: "center" }}>
    //           Select the options available to avail our services!{" "}
    //         </h1>
    //         <List ordered>
    //           <List.Item>
    //             <h2>Account Transaction</h2>
    //           </List.Item>
    //           <List.Item>
    //             <h2>Funds Transfer</h2>
    //           </List.Item>
    //           <List.Item>
    //             <h2>Loans & Personal Finances</h2>
    //           </List.Item>
    //           <List.Item>
    //             <h2>Bill Payment</h2>
    //           </List.Item>
    //           <List.Item>
    //             <h2>Complaint Issuance</h2>
    //           </List.Item>
    //         </List>
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </div> */

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Menu
              </Typography>
              <Typography variant="h6" noWrap style={{ margin: "auto" }}>
                The Vault Online Banking System
              </Typography>
              <Button
                variant="contained"
                style={{ marginRight: "5px" }}
                onClick={this.onClick}
              >
                <Typography noWrap>Log Out</Typography>
              </Button>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              ></Drawer>
            </Hidden>
          </nav>
        </Grid>
        <Grid item xs={4} style={{ margin: "auto", marginTop: "50px" }}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children ? (
              children
            ) : (
              <div style={{ margin: "auto", marginTop: "50px" }}>
                <Card
                  style={{
                    height: "300px",
                    width: "600px",
                    backgroundColor: "#e6eded",
                  }}
                >
                  <h1 style={{ textAlign: "center", margin: "auto" }}>
                    Welcome! {this.props.user.first_name}
                  </h1>
                  <br />
                  <h1
                    style={{
                      textAlign: "center",
                      margin: "auto",
                      marginTop: "30px",
                    }}
                  >
                    Account Number: {this.props.user.pk}
                  </h1>
                  <Detail />
                </Card>
              </div>
            )}
          </main>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.user,
  pk: state.user.pk,
});

const actions = { getUser, logout };

export default compose(
  withStyles(useStyles, { name: "MainPage" }),
  connect(mapStateToProps, actions)
)(MainPage);
