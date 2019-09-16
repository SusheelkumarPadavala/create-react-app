import React from "react";
import { Divider, Card, Image } from 'semantic-ui-react'

class User extends React.Component {

  state = {
    userInfo: this.props.location.state.userInfo
  }

  render() {

    console.log("user object = ", this);
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "blue" }}>User Profile</h1>
        <Divider />

        <Card>
          <Image src={this.state.userInfo.picture.large} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.state.userInfo.name.first + ' ' + this.state.userInfo.name.last}</Card.Header>
            <Card.Meta>
              DOB    : {this.state.userInfo.dob.date} <br />
              Gender : {this.state.userInfo.gender}
            </Card.Meta>
            <Card.Description>
              Phone : {this.state.userInfo.phone} <br />
              Cell  : {this.state.userInfo.cell}
            </Card.Description>
          </Card.Content>

        </Card>
      </div>
    );
  };
}
export default User;
