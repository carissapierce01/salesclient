import React from "react";

type AcceptedProps = {
  sessionToken: string;
  clearToken: () => void;
  updateToken: (newToken: string) => void;
};

type HomeState = {};

export default class Home extends React.Component<AcceptedProps, HomeState> {
  render() {
    return <div>Home</div>;
  }
}
