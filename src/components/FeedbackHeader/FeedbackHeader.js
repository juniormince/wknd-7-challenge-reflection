import React, { Component } from 'react';
import axios from 'axios';
import './FeedbackHeader.css';

class FeedbackHeader extends Component {
  render() {
    return (
    <div>
        <header className="feedback-header">
          <h1 className="feedback-title">Feedback!</h1>
        </header>  
        <br/>
        </div>
    );
  }
}

export default FeedbackHeader;