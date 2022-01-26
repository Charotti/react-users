import React from "react";

class UserInfo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.userName}</p>
        <p>{this.props.userEmail}</p>
        <p>{this.props.userWebSite}</p>
      </div>
    );
  }
}
export default UserInfo;
