//libraries
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//to use index.js reducer
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

//header component
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';


class Understanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      understand: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      understand: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('add understanding');

    const action = { type: 'ADD_UNDERSTANDING', payload: this.state.understand };
    this.props.dispatch(action);

    this.setState({
      understand: '',
    });
    this.props.history.push('/stepthree'); 
  }


  render() {
    return (
      <div className="understand">
        <FeedbackHeader />

        HOW WELL DYOU UNDERSTAND THE MATERIAL
        <br />
        <TextField
          label="rate 1 - 5"
          onChange={this.handleChange}
          value={this.state.understand}
          margin="normal"
        />
        <Button onClick={this.handleSubmit}>NEXT</Button>
      </div>
    );
  }
}

export default connect()(Understanding);