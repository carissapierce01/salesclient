import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./home/Home";
import "./App.css";
import Shop from "./shop/Shop";
import Navbar from "./navbar/Navbar";
import Auth from "./auth/Auth";

type AuthState = {
  sessionToken: string;
  isAdmin?: boolean;
};

export default class App extends React.Component<{}, AuthState> {
  constructor(props: string) {
    super(props);
    this.state = {
      sessionToken: "",
      isAdmin: false,
    };
  }

  componentWillMount() {
    if (localStorage.getItem("setSessionToken")) {
      let token: string | null = localStorage.getItem("setSessionToken");
      this.setState({ sessionToken: token != null ? token : "" });
      console.log("sessionToken:", localStorage.getItem("setSessionToken"));
    }
  }

  updateToken(newToken: string) {
    localStorage.setItem("setSessionToken", newToken);
    this.setState({ sessionToken: newToken });
  }

  clearToken() {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar clearToken={() => this.clearToken()} />
          {this.state.sessionToken !== "" ? (
            <Shop
              sessionToken={this.state.sessionToken}
              clearToken={() => this.clearToken()}
            />
          ) : (
            <Auth
              sessionToken={this.state.sessionToken}
              updateToken={(newToken) => {
                this.updateToken(newToken);
              }}
            />
          )}
        </Router>
      </div>
    );
  }
}
