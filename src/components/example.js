import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll, getAllAsync } from '../actions/default';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navianos: []
    }
  }
  componentDidMount() {
    const result = [];
    fetch('http://localhost:4040').then(response => {
      response.json().then(result => {
        this.setState({
          navianos: result.data
        })
      })
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello Navians!</h1>
        <ul className="navians-list">
          { this.state.navianos.map( (nvt, idx) => (<li key={idx}><div>{nvt.first_name}  {nvt.last_name}</div><span>{ nvt.role }</span></li> ))}
        </ul>
      </div>
    );
  }
}

export default connect()(Example);
