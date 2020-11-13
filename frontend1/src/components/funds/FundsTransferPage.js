import React from "react";
import MainPage from "../user/MainPage";
import NavBar from "../user/NavBar";
import FundsTransfer from "./FundsTransfer";
import { Grid } from "semantic-ui-react";

class FundsTransferPage extends React.Component {
  // state = {
  //   results: []
  // };

  // componentDidMount() {
  //   axios.get("http://127.0.0.1:8000/api/banking_customer/").then(response => {
  //     this.setState({ results: response.data });

  //     console.log(response.data);
  //   });
  // }

  render() {
    return (
      <div>
        {/* <Register />
        <LoginPage /> */}
        {/* <NavBar />
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <SideBar></SideBar>
            </Grid.Column>
            <Grid.Column width={8}>
              <FundsTransfer />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        <MainPage>
          <FundsTransfer />
        </MainPage>
      </div>
    );
  }
}

export default FundsTransferPage;
