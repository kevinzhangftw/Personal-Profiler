import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Post } from '../../components';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

// import static images from the image folder
import img1 from '../../images/winningTeam.jpg'

export class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Card>
        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
        >
          <img src={img1} alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
      </Card>
    );
  }
}

// connect to store
const mapStateToProps = state => ({});

// Acces to dispatch to run
const mapDispatchToProps = dispatch => ({});

// connect hooks to higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
