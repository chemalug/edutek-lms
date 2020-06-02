import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/configureStore.dev";

import "assets/vendor/fontawesome-free/css/all.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "assets/css/sb-admin-2.css";

import AuthNavbar from "components/Navbars/AuthNavbar";

import Landing from "views/landing/Landing";
import DashboarAdmin from "views/dashboard/admin/dashboard.dmin";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthNavbar />
        <Switch>
          <Route path="/dashboard" component={DashboarAdmin} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
