import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// reactstrap components
import { Container } from "reactstrap";

//import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebars/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";

import routes from "utils/routes.js";

const DashboarAdmin = (props) => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Dashboard";
  };

  return (
    <div>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/dashboard",
          imgSrc: "https://edutek.org.gt/wp-content/uploads/2020/02/edu.png",
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>{getRoutes(routes)}</Switch>
        <Container fluid></Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(DashboarAdmin);
//export default DashboarAdmin;
