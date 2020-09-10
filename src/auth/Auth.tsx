import React from "react";
import Register from "./Register";
import Login from "./Login";
import { Form, FormGroup, Label, Button, Input, Row, Col } from "reactstrap";

type AcceptedProps = {
  sessionToken: string;
  updateToken: (newToken: string) => void;
};

type AuthState = {
  isLoggingIn: boolean;
};

export default class Auth extends React.Component<AcceptedProps, AuthState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      isLoggingIn: false,
    };
  }

  render() {
    return (
      <div id="authDiv">
        <div id="authAlphaDiv">
          <Button
            id="togglebutt"
            onClick={() => {
              this.setState({ isLoggingIn: !this.state.isLoggingIn });
            }}
          >
            TOGGLE SIGNUP/LOGIN
          </Button>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              {this.state.isLoggingIn ? (
                <Login updateToken={this.props.updateToken} />
              ) : (
                <Register updateToken={this.props.updateToken} />
              )}
            </Col>
            <Col md={{ size: 4, offset: 0 }}></Col>
          </Row>
        </div>
      </div>
    );
  }
}
