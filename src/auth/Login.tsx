import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

type AcceptedProps = {
  updateToken: (newToken: string) => void;
};

type LoginInfo = {
  pageTitle: string;
  email: string;
  password: string;
  isLoading?: any; // I don't know what type it is if we mark as null so I used any
};

export default class Login extends React.Component<AcceptedProps, LoginInfo> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      pageTitle: "",
      email: "",
      password: "",
    };
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch("http://localhost:3002/user/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => this.props.updateToken(json.sessionToken));
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">{this.state.pageTitle}</h1>
              <form
                onSubmit={(e) => {
                  this.handleSubmit(e);
                }}
              >
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                  >
                    {this.state.pageTitle}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
