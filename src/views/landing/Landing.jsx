import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

class Landing extends Component {
  render() {
    /*if (this.props.authState.loggedIn) {
      return <Redirect to="/admin/user-profile" />;
    }*/
    return (
      <div>
        <Container>
          <div className="header-body text-center mb-7">
            <Row className="justify-content-center">
              <Col lg="5" md="6">
                <h1 className="text-white">Edutek | Elearning</h1>
                <p className="text-lead text-light">
                  Plataforma para aprendizaje online
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

/*const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {})(Landing);*/

export default Landing;
