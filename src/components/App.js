import React from 'react';
import loadingGif from '../resources/loading.gif';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitsheetId: null,
      splitsheet: null,
      errorCode: null,
      errorMessage: null,
      isLoading: false,
    };
  }

  postForm = (splitsheet) => {
    this.setState({
      splitsheet: splitsheet,
      isLoading: true
    });

    console.log('Splitsheet:');
    console.log(splitsheet);

    fetch('https://virtserver.swaggerhub.com/santidmar/SplitSheetAPI/1.0.0/splitsheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: this.state.splitsheet
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response);
      }
    })
    .then(data => {
      console.log(`Splitsheet ID ${data.splitsheetId}`)
      this.setState({splitsheetId: data.splitsheetId})
    })
    .catch(response => {
      console.error(`Failed to POST; Status code ${response.status}`);
      console.error(response.statusText);
      this.setState({
        errorCode: response.status,
        errorMessage: response.statusText
      })
    })
    .finally(() => this.setState({isLoading: false}));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <img src={loadingGif} alt='Loading' />
      )
    } else {
      return (
        <Form onSubmit={this.postForm} />
      );
    }
  }
}

export default App;
