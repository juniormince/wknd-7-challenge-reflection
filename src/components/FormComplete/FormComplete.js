import React, { Component } from 'react';
import axios from 'axios';
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';
import { connect } from 'react-redux';


const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);


class FormComplete extends Component {

  
  submitForm = () => {
    axios.post('/api/feedback', this.props.reduxState.FormSubmission)
            .then((response) => {
                console.log('success');
            })
            .catch((error) => {
                alert('There was a problem');
            })
  }
  

  


  render() {
    return (
      <div>
        <FeedbackHeader />
        HEY THANKS
      <button onClick={this.submitForm}>submit</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(FormComplete);