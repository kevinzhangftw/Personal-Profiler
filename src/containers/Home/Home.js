import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Post } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {Card, CardMedia, CardTitle} from 'material-ui/Card';
// import static images from the image folder
import img1 from '../../images/winningTeam.jpg'

export class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <MuiThemeProvider> 
       <Card>
        <CardMedia>
          <img src={img1} alt="" />
        </CardMedia>
      </Card> 
      </MuiThemeProvider>
      
    );
  }
}

// connect to store
const mapStateToProps = state => ({});

// Acces to dispatch to run
const mapDispatchToProps = dispatch => ({});

// connect hooks to higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
