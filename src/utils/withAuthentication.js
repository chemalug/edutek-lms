import React from "react";

import { firebase } from "functions/index.firebase";
import AuthUserContext from "auth/authUserContext";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      const { authUser } = this.state;
      //console.log("withAuthentication file authUser", authUser);
      //console.log(authUser);

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }
  return WithAuthentication;
};

export default withAuthentication;
