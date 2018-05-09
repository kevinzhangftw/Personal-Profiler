import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        HIHI
      </div>
    );
  }
}

// connect to store
const mapStateToProps = state => ({});

// Acces to dispatch to run
const mapDispatchToProps = dispatch => ({});

// connect hooks to higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
