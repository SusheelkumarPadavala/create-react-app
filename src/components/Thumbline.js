import React from 'react';
import { Feed } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history'

class Thumbline extends React.Component {

  static props = {
    userInfo: PropTypes.object.isRequired,
    onFeedClick: PropTypes.func.isRequired
  }

  navigateToUserInfo = () => {
    console.log("bbb=", this.props.userInfo.id.value);
    createBrowserHistory().push({
      pathname: '/user/' + this.props.userInfo.id.value.replace(" ", ""),
      state: { userInfo: this.props.userInfo }
    }
    );
    createBrowserHistory().go();
    console.log("createBrowserHistory=", this);
  }


  render() {
    console.log("aaa", this);

    return (
      <div>
        <div onClick={this.navigateToUserInfo} >
          <Feed >


            <Feed.Event>
              <Feed.Label image={this.props.userInfo.picture.thumbnail} />
              <Feed.Content>
                <Feed.Date content={this.props.userInfo.registered.age + '  day ago'} />
                <Feed.Summary>
                  {this.props.userInfo.name.first + ' ' + this.props.userInfo.name.last}
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