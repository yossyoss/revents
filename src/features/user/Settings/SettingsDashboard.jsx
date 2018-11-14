import React from "react";
import { Grid } from "semantic-ui-react";
import SettingNav from "./SettingNav";
import { Route, Switch, Redirect } from "react-router-dom";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
