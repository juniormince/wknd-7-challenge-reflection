//libraries
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//to use index.js reducer
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

//header component
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';


class Feeling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value
    });
  }

  handleSubmit = (event) => {
    console.log('add feels');
    const action = { type: 'ADD_FEELING', payload: this.state.feeling };
    this.props.dispatch(action);
    
    this.props.history.push('/steptwo'); 
  }


  render() {
    return (
      <div className="feeling">
        <FeedbackHeader />

        HOW'RE YOU FEELING
        <br />
        <TextField
          label="rate 1 - 5"
          onChange={this.handleChange}
          value={this.state.feeling}
          margin="normal"
        />
        <Button onClick={this.handleSubmit}>NEXT</Button>
      </div>
    );
  }
}

export default connect()(Feeling);