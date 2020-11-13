import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BankDetailPage from "./bank/BankDetailPage";
import Complaint from "./complaints/Complaint";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import MainPage from "./user/MainPage";
import BillPage from "./bill/BillPage";
import ComplaintPage from "./complaints/ComplaintPage";
import LoginPage from "./login&register/LoginPage";
import Register from "./login&register/Register";
import Alerts from "./user/Alerts";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import DepositTransactionPage from "./transaction/DepositTransactionPage";
import WithdrawlTransactionPage from "./transaction/WithdrawlTransactionPage";
import FundsTransferPage from "./funds/FundsTransferPage";
import DetailPage from "./detail/DetailPage";
import LoanPage from "./loan/LoanPage";
//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment style={{ backgroundColor: "red" }}>
              <Alerts />
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/mainpage" component={MainPage} />
                <PrivateRoute
                  exact
                  path="/complaint"
                  component={ComplaintPage}
                />
                <PrivateRoute exact path="/bill" component={BillPage} />
                <PrivateRoute
                  exact
                  path="/contact"
                  component={BankDetailPage}
                />
                <PrivateRoute
                  exact
                  path="/deposit"
                  component={DepositTransactionPage}
                />
                <PrivateRoute
                  exact
                  path="/withdraw"
                  component={WithdrawlTransactionPage}
                />
                <PrivateRoute
                  exact
                  path="/funds"
                  component={FundsTransferPage}
                />
                <PrivateRoute exact path="/loan" component={LoanPage} />
                <PrivateRoute exact path="/balance" component={DetailPage} />
              </Switch>
            </Fragment>
          </Router>
          <Alerts />
        </AlertProvider>
      </Provider>
    );
  }
}
export default App;
