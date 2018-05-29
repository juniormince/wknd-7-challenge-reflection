import React, { Component } from 'react';
import axios from 'axios';
import './ResultsHeader.css';
import Avatar from '@material-ui/core/Avatar';

class ResultsHeader extends Component {
  render() {
    return (
      <div>
        <header className="results-header">
        <Avatar src="/images/goat_small.jpg"/>
          <h1 className="results-title">Feedback Results!</h1>

        </header>
        <br/>
      
      </div>
    );
  }
}

export default ResultsHeader;