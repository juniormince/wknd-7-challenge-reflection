import React, { Component } from 'react';
import axios from 'axios';
import ResultsHeader from '../ResultsHeader/ResultsHeader';

//style libraries
import './Admin.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackList: [],
    }
  }


  getFeedback = () => {
    axios.get('/api/feedback')
    .then(response => {
      this.setState({
        feedbackList: response.data
      });
    }).catch(error => {
      alert('sorry didnt work');
      console.log(`ERROR trying to GET /api/feedback, ${error}`);
    });
  }


  componentDidMount = () => {
    this.getFeedback();
  }


  render() {
    return (
      <div className="admin">
        <ResultsHeader />

<Paper className="Paper">
        <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Feeling
                        </TableCell>
                            <TableCell>
                                Comprehension
                        </TableCell>
                            <TableCell>
                                Support
                        </TableCell>
                        <TableCell>
                                Comments
                        </TableCell>
                        <TableCell>
                                Delete
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackList.map((feedback, i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    {feedback.feeling}
                                </TableCell>
                                <TableCell>
                                    {feedback.understanding}
                                </TableCell>
                                <TableCell>
                                    {feedback.support}
                                </TableCell>
                                <TableCell>
                                    {feedback.comments}
                                </TableCell>
                                <TableCell>
                                   DELETE BUTTON HERE
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                </Paper>

      </div>
    );
  }
}

export default Admin;