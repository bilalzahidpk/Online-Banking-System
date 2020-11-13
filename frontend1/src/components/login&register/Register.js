import { useState } from "react";
import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import { returnErrors } from "../../actions/messages";
import Avatar from "@material-ui/core/Avatar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
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
      <Link color="inherit" href="/" styke={{ textDecoration: "none" }}>
        The Vault Online Banking System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [username, setUserName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    if (password1 !== password2) {
      props.passwordNotMatch(
        {
          passwordNotMatch: "Passwords do not match",
        },
        400
      );
    } else {
      const newUser = {
        first_name,
        last_name,
        email,
        mobile_number,
        username,
        password1,
        password2,
      };
      console.log(newUser);
      props.registerUser(newUser);
    }
  };

  return (
    <div>
      {props.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <ValidatorForm
              className={classes.form}
              noValidate
              onSubmit={onSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    placeholder="First Name"
                    value={first_name}
                    onChange={(event) => setFirstName(event.target.value)}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={(event) => setLastName(event.target.value)}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>

                {/* <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    id="mobileNumber"
                    label="Mobile Number"
                    name="mobileNumber"
                    autoComplete="mnnumber"
                    placeholder="Mobile Number"
                    value={mobile_number}
                    onChange={(event) => setMobileNumber(event.target.value)}
                    validators={["required"]}
                    errorMessages={["this field is required"]} */}
                <Grid item xs={12}>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={mobile_number}
                    onChange={setMobileNumber}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={email}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    value={password1}
                    onChange={(event) => setPassword1(event.target.value)}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmpassword"
                    autoComplete="current-password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      )}{" "}
    </div>
  );
};

// class Register extends React.Component {
//   state = {
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//     first_name: "",
//     last_name: "",
//     mobile_number: ""
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     const {
//       first_name,
//       last_name,
//       email,
//       mobile_number,
//       username,
//       password1,
//       password2
//     } = this.state;
//     if (password1 !== password2) {
//       this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
//     } else {
//       const newUser = {
//         first_name,
//         last_name,
//         email,
//         mobile_number,
//         username,
//         password1,
//         password2
//       };
//       this.props.register(newUser);
//     }
//   };

//   onChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     if (this.props.isAuthenticated) {
//       return <Redirect to="/" />;
//     }
//     const {
//       first_name,
//       last_name,
//       email,
//       mobile_number,
//       username,
//       password1,
//       password2
//     } = this.state;

//     return (
//       <div className="ui container">
//         <form className="ui form" onSubmit={this.onSubmit}>
//           <div className="field">
//             <label>First Name</label>
//             <input
//               value={first_name}
//               type="text"
//               name="first_name"
//               placeholder="First Name"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="field">
//             <label>Last Name</label>
//             <input
//               value={last_name}
//               type="text"
//               name="last_name"
//               placeholder="Last Name"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               value={email}
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="field">
//             <label>Phone Number</label>
//             <input
//               value={mobile_number}
//               type="tel"
//               name="mobile_number"
//               placeholder="Phone Number"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="field">
//             <label>User Name</label>
//             <input
//               value={username}
//               type="text"
//               name="username"
//               placeholder="User Name"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="field">
//             <label>Password</label>
//             <input
//               value={password1}
//               type="password"
//               name="password1"
//               placeholder=""
//               onChange={this.onChange}
//             />
//           </div>

//           <div className="field">
//             <label>Confirm Password</label>
//             <input
//               value={password2}
//               type="password"
//               name="password2"
//               placeholder=""
//               onChange={this.onChange}
//             />
//           </div>

//           {/* <div className="field">
//             <div className="ui checkbox">
//               <input type="checkbox" tabindex="0" className="hidden" />
//               <label>I agree to the Terms and Conditions</label>
//             </div>
//           </div> */}
//           <button className="ui button" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    passwordNotMatch: (message, status) =>
      dispatch(returnErrors(message, status)),
    registerUser: (user) => dispatch(register(user)),
  };
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
