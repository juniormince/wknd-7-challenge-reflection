import React, { Component } from 'react';
import axios from 'axios';
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';

class Comments extends Component {
  render() {
    return (
      <div>
        <FeedbackHeader />
        ANY COMMENTS YOU WANNA LEAVE?
        {/* <Feeling />
        <Understanding />
        <Support />
        <Comments />
        <FormComplete />
        <Admin /> */}

      </div>
    );
  }
}

export default Comments;