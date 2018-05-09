import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// material ui themes
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//compoents
import { Post } from '../../components';
// import static images from the image folder
import img1 from '../../images/winningTeam.jpg';

export class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}> 
       <Post media={img1} />
      </MuiThemeProvider>      
    );
  }
}

// connect to store
const mapStateToProps = state => ({
});

// Acces to dispatch to run
const mapDispatchToProps = dispatch => ({});

// connect hooks to higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
