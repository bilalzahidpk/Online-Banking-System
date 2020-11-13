import { useState } from "react";
import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../actions/auth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="/"
        style={{ textDecoration: "none", color: "grey" }}
      >
        The Vault Online Banking System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginPage(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    props.login(username, password);
  };

  return (
    <div>
      {props.isAuthenticated ? (
        <Redirect to="/mainpage" />
      ) : (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={onSubmit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item style={{ margin: "auto" }}>
                    <Link to="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
// class LoginPage extends React.Component {
//   state = {
//     username: "",
//     password: "",
//   };

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.username, this.state.password);
//     this.props.login(this.state.username, this.state.password);
//   };

//   render() {
//     if (this.props.isAuthenticated) {
//       return <Redirect to="/mainpage" />;
//     }
//     const { username, password } = this.state;

//     return (
//       <div>
//         <h1 style={{ textAlign: "center", marginTop: "50px" }}>
//           Welcome to Vault Online Banking!
//         </h1>
//         <div
//           className="ui placeholder segment"
//           style={{ marginTop: "150px", height: "350px" }}
//         >
//           <div
//             className="ui two column middle aligned very relaxed stackable grid"
//             style={{ position: "relative" }}
//           >
//             <div className="center aligned column">
//               <form className="ui form" onSubmit={this.onSubmit}>
//                 <div className="field">
//                   <label>Username</label>
//                   <div className="ui left icon input">
//                     <input
//                       value={username}
//                       name="username"
//                       type="text"
//                       placeholder="Username"
//                       onChange={this.onChange}
//                     />
//                     <i className="user icon"></i>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label>Password</label>
//                   <div className="ui left icon input">
//                     <input
//                       type="password"
//                       name="password"
//                       value={password}
//                       onChange={this.onChange}
//                     />
//                     <i className="lock icon"></i>
//                   </div>
//                 </div>
//                 <button type="submit" className="ui blue submit button">
//                   Login
//                 </button>
//               </form>
//             </div>
//             <div className="middle aligned column">
//               <Link to="/register">
//                 <div className="ui big button">
//                   <i className="signup icon"></i>
//                   Sign Up
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="ui vertical divider">Or</div>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
