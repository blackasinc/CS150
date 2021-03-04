import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitsheetId: null
    };
  }

  postForm = (name) => {
    fetch('https://virtserver.swaggerhub.com/santidmar/SplitSheetAPI/1.0.0/splitsheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        writerName: name,
        songName: 'So Icy',
        date: {},
        splitPercent: 66.7,
        signature: 'd290f1ee-6c54-4b01-90e6-d701748f0851'
      })
    })
    .then(response => response.json())
    .then(data => this.setState({splitsheetId: data.splitsheetId}));
  };

  render() {
    return (
      <Form onSubmit={this.postForm} />
    );
  }
}

export default App;
