import React from "react";
import { Link } from "react-router-dom";

class navBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const logout = this.props.currentUser ? (
      <Link className="nav-log-in" to={"/@me"}>
        Open Amica
      </Link>
    ) : (
      <Link className="nav-log-in" to={"/login"}>
        Login
      </Link>
    );

    return <div>{logout}</div>;
  }
}

export default navBar;
