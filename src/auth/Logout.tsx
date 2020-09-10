import React from "react";
import logoutPic from "../../assets/logout.png";

type AcceptedProps = {
  clearToken: () => void;
};

export default class Logout extends React.Component<AcceptedProps> {
  constructor(props: AcceptedProps) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <div className="nav-item"></div>
      </div>
    );
  }
}
