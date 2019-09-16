/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';

const styles = {
  title: {
    flexGrow: 1
  },
  fixedElement: {
    position: 'fixed',
    height: 48,
    top: 64,
    left: 0,
    right: 0,
    background: 'red',
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <Icon>face</Icon>
            </IconButton>
            <Typography type="title" color="inherit" className={this.props.classes.title}>
              Title
            </Typography>
            <Button color="contrast" onClick={this.handleClick}>Open Dialog</Button>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.fixedElement}>
          <span>left</span>
          <span>right</span>
        </div>
        <div style={{height: 1000}}>
        </div>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
