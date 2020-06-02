import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginModal from "views/pages/login/Login";

const AuthNavbar = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    console.log(modal);
  };
  if (!props.auth.isAuthenticated) {
    return (
      <>
        <div className="pt-4 pt-lg-4">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="https://www.edutek.org.gt">
                <img
                  src="https://edutek.org.gt/wp-content/uploads/2020/02/edu.png"
                  alt="logo edutek"
                  height="48"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample07"
                aria-controls="navbarsExample07"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="https://www.edutek.org.gt">
                      Home <i className="fas fa-fw fa-home"></i>
                      <span className="sr-only"></span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard <i className="fas fa-fw fa-tachometer-alt"></i>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" onClick={toggle} to="">
                      Login <i className="fas fa-fw fa-user"></i>
                    </Link>
                    {!toggle ? null : (
                      <LoginModal
                        modal={modal}
                        toggle={toggle}
                        className={props.className}
                      />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
};
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(AuthNavbar);
//export default AuthNavbar;
