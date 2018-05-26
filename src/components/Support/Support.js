//libraries
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//to use index.js reducer
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

//header component
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';


class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      support: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      support: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('add support');

    const action = { type: 'ADD_SUPPORT', payload: this.state.support };
    this.props.dispatch(action);

    this.setState({
      support: '',
    });
    this.props.history.push('/stepfour'); 
  }


  render() {
    return (
      <div className="support">
        <FeedbackHeader />

        HOW WELL ARE YOU BEING SUPPORTED?
        <br />
        <TextField
          label="rate 1 - 5"
          onChange={this.handleChange}
          value={this.state.support}
          margin="normal"
        />
        <Button onClick={this.handleSubmit}>NEXT</Button>
      </div>
    );
  }
}

export default connect()(Support);