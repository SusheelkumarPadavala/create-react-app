import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
// import JssProvider from 'react-jss/lib/JssProvider';
// import { withStyles, MuiThemeProvider } from 'material-ui/styles';
// import wrapDisplayName from 'recompose/wrapDisplayName';
// import createContext from '../styles/createContext';
import PropTypes from 'prop-types';
import { Route , Link,  NavLink, Redirect, Switch, withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history'

import Router from '../int/router';
import User from '../pages/user'



class Thumbline extends React.Component {

  static props ={
      userInfo : PropTypes.object.isRequired,
      onFeedClick: PropTypes.func.isRequired
  }

  navigateToUserInfo =()=>{
    console.log("bbb=",this.props.userInfo.id.value);
    createBrowserHistory().push({
      pathname: '/user/'+this.props.userInfo.id.value.replace(" ",""),
      state: { userInfo: this.props.userInfo}
    }
  );
    createBrowserHistory().go();
    console.log("createBrowserHistory=",this);
  }
  
  // getUser= (userid)=>{
  //  // alert("aa");
  //  console.log("in getUsers : ",this.props);
  //  //this.props.history.push({pathname:'/user/:1'});
  //  // path="/user/:userId" component={User}
  //  <Route path="/users/:id" component={User} />
  //  //this.props.history.push({pathname:'/user/:1'});
  //  //return <Redirect push to="/user" />
  // }
// <Link to="/users">Show Users</Link>
  render() {
    console.log("aaa",this);

    return (
      <div> 
        <div onClick={this.navigateToUserInfo} >
      <Feed > 
           
         
          <Feed.Event>
            <Feed.Label image={this.props.userInfo.picture.thumbnail} />
            <Feed.Content>
              <Feed.Date content= {this.props.userInfo.registered.age +'  day ago'}  />
              <Feed.Summary>
              {this.props.userInfo.name.first +' ' + this.props.userInfo.name.last  }
            </Feed.Summary>
            </Feed.Content>
            
          </Feed.Event>
        </Feed>

        </div>

      </div>
    );

  }
}

export default Thumbline;