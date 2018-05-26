import React, { Component } from 'react';
import axios from 'axios';
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';

class Feeling extends Component {
  render() {
    return (
      <div className="feeling">
       <FeedbackHeader />
       
        HOW'RE YOU FEELING

      </div>
    );
  }
}

export default Feeling;