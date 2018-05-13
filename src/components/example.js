import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultAction } from '../actions/default';

class Example extends Component {
  componentDidMount() {
    this.props.dispatch(defaultAction());
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello World!</h1>
      </div>
    );
  }
}

export default connect()(Example);
