//libraries
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//to use index.js reducer
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

//header component
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      comments: event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('add Comments');
    const action = { type: 'ADD_COMMENTS', payload: this.state.comments };
    this.props.dispatch(action);

    this.setState({
      comments: '',
    });
    this.props.history.push('/success'); 
  }




  render() {
    return (
      <div className="comments">
        <FeedbackHeader />

        ANY COMMENTS YOU WANNA LEAVE?
        <br />
        <TextField
          helperText="tell us (briefly) how you really feel"
          label="comment here"
          onChange={this.handleChange}
          value={this.state.comments}
          margin="normal"
        />
        <Button onClick={this.handleSubmit}>SUBMIT</Button>
      </div>
    );
  }
}

export default connect()(Comments);