import React from "react";
import { Divider,Card, Icon, Image } from 'semantic-ui-react'

class User extends React.Component {

  state ={
    userInfo: this.props.location.state.userInfo
 }

  render(){

 console.log("user object = ",this);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>User Profile</h1>
      <Divider />

      <Card>
    <Image src={this.state.userInfo.picture.large} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.state.userInfo.name.first +' ' + this.state.userInfo.name.last  }</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    </div>
  );
};
}
export default User;
