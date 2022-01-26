import React from "react";
import users from "./users.json";
import UserInfo from "./component/UserInfo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        {users.map((user) => {
          return (
            <div>
              <UserInfo
                userName={user.name}
                userEmail={user.email}
                // userWebSite={user.website}
              ></UserInfo>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
