import React, { Component } from 'react';
import axios from 'axios';
import './ResultsHeader.css';

class ResultsHeader extends Component {
  render() {
    return (
      <div>
        <header className="results-header">
          <h1 className="results-title">Feedback Results!</h1>

        </header>
        <br/>
      
      </div>
    );
  }
}

export default ResultsHeader;