import React, { FormEvent, ChangeEvent } from "react";
import { Form, FormGroup, Label, Row, Col, Button, Input } from "reactstrap";
import { useHistory, BrowserRouter, Redirect } from "react-router-dom";
import reactRouter from "react-router-dom";
import { CommentType, ShopType, UserType } from "../types/Types";

type AcceptedProps = {
  sessionToken: string;
  clearToken: () => void;
  fetchUser: () => void;
};

type UserDataState = {
  user: UserType;
};

export default class UserData extends React.Component<
  AcceptedProps,
  UserDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        comment: [],
      },
    };
  }

  FetchUser() {
    fetch(`http://localhost:3002/user/`, {
      method: "get",
      headers: {
        "content-type": "application/json",
        authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          user: {
            firstName: res.firstName,
            lastName: res.lastName,
            comment: res.comment,
          },
        });
      });
  }

  handleSubmit(e: FormEvent) {
    console.log(this.state.user, this.state.user);
    e.preventDefault();
    fetch(`http://localhost:3002/users/update`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: this.props.sessionToken,
      },
      body: JSON.stringify({
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
        comment: this.state.user.comment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({});
      });
  }

  deleteUser() {
    fetch(`http://localhost:3002/users/update`, {
      method: "delete",
      headers: {
        "content-type": "application/json",
        authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  componentWillUnmount() {
    clearTimeout();
  }

  componentWillUpdate() {
    clearTimeout();
  }

  render() {
    return (
      <div>
        <h1 id="profileHead">My Dreamalish Profile</h1>
        <Row id="profileRow"></Row>
      </div>
    );
  }
}
