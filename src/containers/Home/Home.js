import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//lazyload compoents
import LazyLoad from 'react-lazyload';
// material ui themes
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//compoents
import { Post } from '../../components';
// import static images from the image folder
import img1 from '../../images/winningTeam.jpg';
import img2 from '../../images/kaiTimmies.jpg';

export class Home extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <LazyLoad height={200} offset={100}>
          <Post media={img1}/>
        </LazyLoad>
        <LazyLoad height={200} offset={100}>
          <Post media={img2}/>
        </LazyLoad>
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
