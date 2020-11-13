import React from "react";
import BankList from "./BankList";
import MainPage from "../user/MainPage";
import NavBar from "../user/NavBar";
import { Grid } from "semantic-ui-react";
import BranchList from "./BranchList";
const BankDetailPage = () => {
  return (
    <div>
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
              <BankList />
              <BranchList />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        <MainPage>
          <BankList />
          <BranchList />
        </MainPage>
      </div>
    </div>
  );
};

export default BankDetailPage;
