import React from "react";
import { connect } from "react-redux";
import { db } from "functions/firebase";
import DashboarAdmin from "views/dashboard/admin/dashboard.admin";

const RoutePage = (props) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  if (props.auth.isAuthenticated) {
    const { auth } = props;

    db.ref(`/users/${auth.user.uid}`).once("value", (user) => {
      setIsAdmin(user.val().info.role.isAdmin);
    });
    if (isAdmin) {
      return (
        <div>
          <DashboarAdmin />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Hola route Otro</h1>
        </div>
      );
    }
    return <div></div>;
  } else {
    return <div></div>;
  }
};
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(RoutePage);
//export default RoutePage;
