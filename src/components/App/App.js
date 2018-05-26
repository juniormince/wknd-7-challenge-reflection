//libraries
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//styling
import './App.css';

//components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import FormComplete from '../FormComplete/FormComplete';
import Admin from '../Admin/Admin';
import FeedbackHeader from '../FeedbackHeader/FeedbackHeader';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* routes and sub-urls */}
            <Route exact path="/" component={Feeling} />
            <Route exact path="/steptwo" component={Understanding} />
            <Route exact path="/stepthree" component={Support} />
            <Route exact path="/stepfour" component={Comments} />
            <Route exact path="/success" component={FormComplete} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
